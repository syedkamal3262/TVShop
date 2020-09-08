import React  from 'react'
import Layout from '../components/layout'
import Cartgrid from '../components/Cartgrid'

const Cart = (props) => {
   if(props.location.state){
            return (
            <Layout>
            <Cartgrid data={props.location.state.data}/>
            </Layout>
            )}
            else{
                return (
                    <Layout>
                    </Layout>
                )  
            }
}
export default Cart
