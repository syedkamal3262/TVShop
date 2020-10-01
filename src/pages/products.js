import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import ProductGrid from "../components/productGrid"

const ComponentName = ({ data }) => {
  return (
    <Layout>
      <div>
        <p className="breadcrumb">
          Home / TV <b>({data.allContentfulProduct.totalCount})</b>
        </p>
        {data.allContentfulProduct.nodes.map(product => (
          <ProductGrid key={product.sku} product={product} />
        ))}
      </div>
    </Layout>
  )
}

export const query = graphql`
  {
    allContentfulProduct {
      nodes {
        sku
        title
        description {
          description
        }
        image {
          fluid {
            ...GatsbyContentfulFluid
          }
        }
        priceNow
        pricewas
        instock
      }
      totalCount
    }
  }
`

export default ComponentName
