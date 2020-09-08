const path = require('path');
exports.createPages = async ({graphql,actions}) => {
const {createPage} = actions; 
const result = await graphql(`
{
  allContentfulProduct {
    nodes {
      sku
    }
  }
}
`);

result.data.allContentfulProduct.nodes.forEach((data) => {
    createPage({
        path: `/products/${data.sku}`,
        component: path.resolve('./src/template/productpage.js'),
        context: {
            sku: data.sku
        }
    })
 })
}