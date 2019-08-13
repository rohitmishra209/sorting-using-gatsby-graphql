/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  // In your gatsby-config.js
plugins: [
  {
    resolve: `gatsby-source-contentstack`,
    options: {
      // API Key is a unique key assigned to each stack. This is required.
      api_key: ``,

      // Access Token is a read-only credential . This is required.
      delivery_token: ``,

      // Environment where you published your data.
      environment: ``
    },
  }
]
}
