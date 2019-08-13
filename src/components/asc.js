import React from "react"
import {StaticQuery, graphql} from "gatsby"
import Header from "../components/header"
import Footer from "../components/footer"
//import Price_fielter from "../components/price_fielter"


const Ascending = () => (
  <StaticQuery
    query = { graphql`
      query PageQueryAsc {
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
                    price
                  }
            }
          }
    }
    `}

render = {
      data => (
        <div>
        <Header/>
         {data.allContentstackProductList.edges.map((product, index)=>{
          // console.log("====",product)
             return(
             <div>
               <a href={product.node.url}><h3>{product.node.title}</h3></a>
               <img src={product.node.image !== null ? product.node.image.url : ""} height="30%" width="40%"/>    
               <p>{product.node.subline}</p>
               <p>{product.node.price}</p>   
             </div>
             )
         })
         }
        <Footer/>    
      </div>
    )}
    />
)

export default Ascending
