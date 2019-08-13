import React from "react"
import { graphql } from 'gatsby'

import PageDetails from "../components/page_details"
import Header from "../components/header"
import Footer from "../components/footer"
import Price_fielter from "../components/price_fielter"


export default class ProductsPage extends React.Component {
    render(){
        //console.log("datatata", this.props.data.allContentstackProductList.edges.length)
    var productList = this.props.data.allContentstackProductList.edges;
    return(
        <div>
          <Price_fielter/>
          
         
           {/* {productList.map((product, index)=>{
               return(
               <div>
                 <a href={product.node.url}><h3>{product.node.title}</h3></a>
                 <img src={product.node.image !== null ? product.node.image.url : ""} height="30%" width="40%"/>    
                 <p>{product.node.subline}</p>
                 <p>{product.node.price}</p>   
               </div>
               )
           })
           } */}
        </div>
        // }
      )
    }
}


 export const pageQuery = graphql`
  query MyQuery {
  allContentstackProductList(sort: {order: ASC, fields: price}) {
    edges {
      node {
        title
        uid
        url
        description
        header_title
        image {
          url
          title
        }
        price
        subline
      }
    }
  }
}

`