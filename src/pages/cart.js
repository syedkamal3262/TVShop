import React from "react"
import Layout from "../components/layout"
import Cartgrid from "../components/Cartgrid"
import { useStateValue } from "../Context/StateProvider"

const Cart = () => {
  const [{ cart }, dispatch] = useStateValue()
  console.log(cart)
  return (
    <Layout>
      <div
        style={{
          maxheight: "100%",
        }}
        className="cart"
      >
        <div className="cart__total">
          <h3>Total {cart.length}</h3>
          <h3>Cash : </h3>
        </div>
        {cart.map(data => (
          <Cartgrid key={Math.floor(Math.random() * 100)} data={data} />
        ))}
      </div>
    </Layout>
  )
}

export default Cart
