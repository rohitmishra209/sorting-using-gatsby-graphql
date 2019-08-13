const path = require('path');

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  return graphql(`
    {
    allContentstackProductList {
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
        subline
        id
      }
    }
  }
}
  `).then(result => {
    if (result.errors) {
      result.errors.forEach(e => console.error(e.toString()))
      return Promise.reject(result.errors)
    }

    const data = result.data.allContentstackProductList.edges    
    if(Array.isArray(data)) {
         data.forEach(edge => {
           const id = edge.node.id
           if(edge.node.url !== '') {
        createPage({path: edge.node.url,
          component: path.resolve(
            `src/components/page_details.js`
        ),
        // additional data can be passed via context
              context: {
                id,
              },
        })
           }
    })
  }
  })
}


