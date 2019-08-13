import React from "react"
import { graphql } from 'gatsby'

export default class PageDetails extends React.Component {

    render(){
    return(
        <div>
          <h1>{this.props.data.contentstackProductList.title}</h1>
          <img src={this.props.data.contentstackProductList.image.url} height="30%" width="40%"/>
          <h2>{this.props.data.contentstackProductList.subline}</h2>
          <p>{this.props.data.contentstackProductList.description}</p>
        </div>
    )
    }

}

 export const pageQuery = graphql`
  query MyQueryHomeabout($id: String!) {
  contentstackProductList(id: { eq: $id }) {
      title
    subline
    uid
    image {
      title
      url
    }
    description
  }
  }
`