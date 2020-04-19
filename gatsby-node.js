const path = require('path');
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions;

  const postTemplate = path.resolve('src/templates/post.tsx')

  return graphql(`{
    allMarkdownRemark {
      edges {
        node {
          html
          id
          frontmatter {
            path
            title
            date
            tags
          }
        }
      }
    }
  }`)
    .then(res => {
      if (res.errors) {
        return Promise.reject(res.errors);
      }

      res.data.allMarkdownRemark.edges.forEach(({ node }) => {
        createPage({
          path: node.frontmatter.path,
          component: postTemplate
        })
      })

    })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}