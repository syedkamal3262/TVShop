import React from "react"
import Layout from "../components/layout"
import Cartgrid from "../components/Cartgrid"
import { useStateValue } from "../Context/StateProvider"

const Cart = () => {
  const [{ cart }, dispatch] = useStateValue()
  console.log(cart)
  return (
    <Layout>
      {cart.map(data => (
        <Cartgrid key={Math.floor(Math.random() * 100)} data={data} />
      ))}
    </Layout>
  )
}

export default Cart
