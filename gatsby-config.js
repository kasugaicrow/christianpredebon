/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    author: "Christian Predebon",
    title: 'Christian Predebon',
    siteUrl: 'https://christianpredebon.it'
  },
  plugins: [
    `gatsby-plugin-typescript`,
    'gatsby-plugin-tslint',
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown-pages`,
        path: `${__dirname}/src/`,
      },
    },
    `gatsby-transformer-remark`
  ]
}