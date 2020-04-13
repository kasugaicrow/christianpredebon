import React from "react"
import Navbar from "../../layouts/navbar"
import SEO from "../../layouts/seo"

const About = () => {
  return (
    <div className="application">
      <SEO title="Hello" description="My name's Christian Predebon and I'm a front end developer." />
      <Navbar>
        <h1>about me</h1>
        <p>My name's Christian Predebon.</p>
        
        <p>I'm a curious front end developer who loves to always keep up to date with new stuff and to try different technologies.</p>

        <p>I am currently work at <a href="https://zeuslab.it">Zeuslab</a> on the research and development team. My mainly involvement with the team is to develop and maintain web applications.</p>

        <p>Off work I love to read, play video games, go on with personal projects and taking long walks.</p>
      </Navbar>
    </div>
  )
}

export default About