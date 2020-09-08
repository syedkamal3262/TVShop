import React from 'react';
import {Link} from 'gatsby'
import  '../css/App.css'

export default function Header() {

  const headerStyle={
    display:"inline-flex",
    justifyContent:"center",
    alignItems: "baseline",
    width:"100%",
    margin:"0px",
    border:"1px solid rgb(216, 220, 221)"
  }
  return (
    <div style={headerStyle} >
    <ul >
        <li>
        <h1 style={{color:"#0074cc",margin:"0px",padding:"0px"}}>TV-Shop</h1>
        </li>
        <li>
        <Link to="/">
        Home
      </Link>
        </li>
        <li>
        <Link to="/products">
        TV`s
      </Link>
        </li>
        <li>
        <Link to="/cart">
          Cart 
          </Link>
        </li>
    </ul>
    </div>
  );
}
