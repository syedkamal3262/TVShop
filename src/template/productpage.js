import React from "react"
import Layout from "../components/layout"
import ProductDetail from "../components/productdetail"

function Productpage({ data: { contentfulProduct } }) {
  return (
    <Layout>
      <p className="breadcrumb">Home / TV / {contentfulProduct.sku}</p>
      <ProductDetail data={contentfulProduct} />
    </Layout>
  )
}
export const query = graphql`
  query MyQuery($sku: String) {
    contentfulProduct(sku: { eq: $sku }) {
      title
      sku
      pricewas
      priceNow
      instock
      description {
        description
      }
      image {
        fluid {
          ...GatsbyContentfulFluid
        }
      }
    }
  }
`
export default Productpage
