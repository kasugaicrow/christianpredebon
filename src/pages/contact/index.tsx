import React from "react"
import Navbar from "../../layouts/navbar"
import SEO from "../../layouts/seo"

const Contact = () => {
  return (
    <Navbar>
      <SEO title="Hello" description="My name's Christian Predebon and I'm a front end developer." />
      <h1>Hello</h1>

      <p>Feel free to write me to ask me everything :)</p>

      <h2><a href="mailto:hello@christianpredebon.it">hello@christianpredebon.it</a></h2>

      <p>Or find me here:</p>

      <ul>
        <li><a className="is-size-medium" href="https://twitter.com/ChristianP998">Twitter</a></li>
        <li><a className="is-size-medium" href="https://github.com/kasugaicrow">Github</a></li>
      </ul>
    </Navbar>
  )
}

export default Contact