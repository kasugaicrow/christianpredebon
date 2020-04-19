import React from "react"
import Navbar from "../../layouts/navbar"
import SEO from "../../layouts/seo"
import { graphql } from "gatsby"

const Blog: React.FC<{ data?: any }> = ({ data }) => {
  return (
    <div className="application">
      <SEO title="Blog" description="My name's Christian Predebon and I'm a front end developer." />
      <Navbar>
        <div className="post-list">
          {data.allMarkdownRemark.edges.map((post: any, i: number) => (
            <div key={i} className="post-list__post">
              <h1 className="post-list__post-title"><a href={post.node.frontmatter.path}>{post.node.frontmatter.title}</a></h1>
              <span className="post-list__post-date">{post.node.frontmatter.date}</span>
              <div className="post-list__post-tag-group">
                {post.node.frontmatter.tags[0] !== '' && post.node.frontmatter.tags.map((tag: string, i: number) => (
                  <span key={i} className="post-list__post-tag"> #{tag}</span>
                ))}
              </div>
              <p>{post.node.frontmatter.excerpt}</p>
            </div>
          ))}
        </div>
      </Navbar>
    </div>
  )
}

export default Blog

export const blogQuery = graphql`
  query Posts {
    allMarkdownRemark(limit: 10) {
      edges { 
        node {
          id 
          frontmatter {
            title
            path
            date
            excerpt
            tags
          }
        }
      }
    }
  }
`