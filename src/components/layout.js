// import React from 'react'
// import { StaticQuery, graphql } from 'gatsby'
// import Header from './header'
// import Footer from './footer'


// const Layout = ({ children }) => (
//   <StaticQuery
//     query = { graphql`
//       query PageQuery {
//           contentstackHeader {
//             id
//             menu
//             title
//             uid
//         }
//     }
//     `}

//     render = { 
//       data => (
//       <div className="main-wrapper">
//         <Helmet>
//           <meta charset="utf-8" />
//           <meta http-equiv="X-UA-Compatible" content="IE=edge" />
//           {/* <link preload rel="image"></link> */}
//           {/* <link rel="preload" href="../images/tech-hover-background.png" as="image"></link> */}
//           {/* <link rel="preload" href="../images/business-hover-background.png" as="image"></link> */}


//           {/* <link rel="preload" href="https://images.contentstack.io/v3/assets/blt1264fa9b448be721/bltaeb9449491a38494/5cfaa5957d8bc4da32ecec99/download" as="image"></link> */}
//           <meta name="viewport" content="width=device-width, initial-scale=1" />
//           <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700"/>
//           <link rel="shortcut icon" type="image/png" href="../images/favicon.ico"/>

//         </Helmet>

//         <div>
//           <Header header={data.contentstackRedesignHeaderGlobal} />
//           {children}
//           <Footer footer={data.contentstackRedesignFooterGlobal} />
//         </div>
//       </div>
//     )}
//   />
// )

// // Layout.propTypes = {
// //   children: PropTypes.func,
// // }

// export default Layout