import React from "react"
import { graphql } from "gatsby"
import Navbar from "../layouts/navbar"

const Template: React.FC<{ data: any }> = ({ data }) => {
  const post = data.markdownRemark

  return (
    <div className="application">
      <Navbar>
        <div className="post">
          <h1 className="post__title">{post.frontmatter.title}</h1>

          <span className="post-list__post-date">Published {post.frontmatter.date}</span>
          <div className="post-list__post-tag-group">
            {post.frontmatter.tags[0] !== '' && post.frontmatter.tags.map((tag: string, i: number) => (
              <span key={i} className="post-list__post-tag"> #{tag}</span>
            ))}
          </div>
          <div className="post-list__post-content" dangerouslySetInnerHTML={{ __html: post.html }} />
        </div>
      </Navbar>
    </div>
  )

}

export default Template

export const postQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter { 
        path
        title
        date
        tags
      }
    }
  }
`