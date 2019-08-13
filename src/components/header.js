import React from "react"
import {StaticQuery, graphql} from "gatsby"

const Header = () => (
  <StaticQuery
    query = { graphql`
      query PageQuery {
          contentstackHeader {
            id
            menu
            title
            uid
        }
    }
    `}

render = {    
      data => (
      <div className="main-wrapper">
            {data.contentstackHeader.menu.map((menulist, index)=>{
               return(
               <div>
                 <h3>{menulist}</h3>  
               </div>
               )
            })
            }
      </div>
    )}
    />
)

export default Header
