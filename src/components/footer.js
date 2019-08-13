import React from "react"
import {StaticQuery, graphql} from "gatsby"

const Footer = () => (
  <StaticQuery
    query = { graphql`
      query PageQueryFooter {
        contentstackFooter {
            title
            multi_line
        }
    }
    `}

render = {    
      data => (
      <div>
        <div>
            <h3>{data.contentstackFooter.multi_line}</h3>  
        </div>
      </div>
    )}
    />
)

export default Footer
