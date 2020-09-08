import React from 'react'

const Cartgrid = ({data}) => {
    
    return (
        <div>
            <ul style={{
                display:"flex",
                direction:"row"
            }}>
                <li><b>Product </b>{data.title}</li>
                <li><b>Price </b>{data.priceNow}</li>
            </ul>
        </div>
    )
    
}

export default Cartgrid;
