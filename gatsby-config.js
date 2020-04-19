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
    siteUrl: 'https://christianpredebon.it',
    description: 'Personal website of Christian Predebon',
    twitterUsername: '@ChristianP998'
  },
  plugins: [
    `gatsby-plugin-typescript`,
    'gatsby-plugin-tslint',
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: `${__dirname}/src/content`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [{
          resolve: `gatsby-remark-prismjs`,
          options: {
            classPrefix: "language-",
            inlineCodeMarker: null,
            aliases: {},
            showLineNumbers: false,
            noInlineHighlight: false,
            languageExtensions: [{
              language: "superscript",
              extend: "javascript",
              definition: {
                superscript_types: /(SuperType)/,
              },
              insertBefore: {
                function: {
                  superscript_keywords: /(superif|superelse)/,
                },
              },
            }, ],
            prompt: {
              user: "root",
              host: "localhost",
              global: false,
            },
            escapeEntities: {}
          }
        }]
      }
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-163346811-1",
      }
    },
    {
      resolve: 'gatsby-plugin-mailchimp',
      options: {
        endpoint: 'https://christianpredebon.us4.list-manage.com/subscribe/post?u=335709d53062f86517a064763&amp;id=d7afe50e91'
      }
    },
    `gatsby-plugin-feed`
  ]
}