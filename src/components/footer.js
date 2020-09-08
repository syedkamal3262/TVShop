import React from 'react'

const footer = () => {
    const footerStyle={
        textAlign:"center",
        width:"100%",
        border:"1px solid rgb(216, 220, 221)",
      }
    return (
        <>
        <div style={footerStyle}>
            <div>
                 <h1 style={{color:"#0074cc",margin:"0px",padding:"0px"}}>shop for you !</h1>
                <p style={{margin:"0px",padding:"0px",textAlign:"center"}}>
TVshop.com is operated by TVshop Retail Limited, registered in England with company number 02556638 whose registered office is at 5a, The landsPark, stockLostock, Tonbol, 4FR PL6 
<br />
The goods you buy from this site will be purchased from TVshop Retail Limited
                </p>
            </div>
        </div>
        </>
        
    )
}

export default footer;