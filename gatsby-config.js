/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */
import "./src/index.scss"
module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: 'Christian Predebon',
    siteUrl: 'https://christianpredebon.it'
  },
  plugins: [
    `gatsby-plugin-typescript`,
    'gatsby-plugin-tslint',
    `gatsby-plugin-sass`   
  ]
}
