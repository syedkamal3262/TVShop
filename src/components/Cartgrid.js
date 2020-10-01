import React from "react"

const Cartgrid = ({ data }) => {
  return (
    <div>
      <ul className="cart__grid">
        <li>{data?.title}</li>
        <li>{data?.priceNow}</li>
      </ul>
    </div>
  )
}
export default Cartgrid
