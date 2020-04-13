import React from "react"
import Navbar from "../../layouts/navbar"
import SEO from "../../layouts/seo"

const Blog = () => {
  return (
    <div className="application">
      <SEO title="Blog" description="My name's Christian Predebon and I'm a front end developer." />
      <Navbar>
        <h1>blog</h1>
      </Navbar>
    </div>
  )
}

export default Blog