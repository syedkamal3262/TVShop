import React from "react"
import Layout from "../components/layout"
import Homegrid from "../components/homeGrid"

export default function Home() {
  return (
    <Layout>
      <div className="category">
        <Homegrid />
      </div>
    </Layout>
  )
}
