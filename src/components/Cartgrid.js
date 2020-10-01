import React from "react"

const Cartgrid = ({ data }) => {
  return (
    <div className="cart__box">
      <ul className="cart__grid">
        <li>{data?.title}</li>
        <li>${data?.priceNow}</li>
        <li>
          <button className="cart__delete">X</button>
        </li>
      </ul>
    </div>
  )
}
export default Cartgrid
