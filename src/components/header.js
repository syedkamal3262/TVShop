import React from "react"
import { Link } from "gatsby"
import "../css/App.css"
import { useStateValue } from "../Context/StateProvider"

export default function Header() {
  const headerStyle = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
    width: "100%",
    margin: "0px",
    border: "1px solid rgb(216, 220, 221)",
  }

  const [{ cart }, dispatch] = useStateValue()
  console.log(cart)
  return (
    <div style={headerStyle}>
      <h1
        className="site__title"
        style={{ color: "#0074cc", margin: "0px", padding: "0px" }}
      >
        TV-Shop
      </h1>
      {/* <button onClick={setstate}> </button> */}
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/products">TV`s</Link>
        </li>
        <li>
          <Link to="/cart">Cart</Link>
        </li>
      </ul>
    </div>
  )
}
