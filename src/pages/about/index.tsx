import React from "react"
import Navbar from "../../layouts/navbar"
import SEO from "../../layouts/seo"
import Newsletter from "../../layouts/newsletter"

const About = () => {

  return (
    <div className="application">
      <SEO title="About me" description="My name's Christian Predebon. I'm twenty-one and I'm a curious front end developer who loves to always keep up to date with new stuff and to try different technologies." />
      <Navbar>
        <h1>About me</h1>

        <p>My name's Christian Predebon.</p>

        <p>I'm twenty-one and I'm a curious front end developer who loves to always keep up to date with new stuff.</p>

        <p>I currently work at <a href="https://zeuslab.it">Zeuslab</a> on the research and development team. My mainly involvement with the team is to develop and maintain web applications.</p>

        <p>Off work I love to read, play video games, go on with personal projects and taking walks.</p>

        {/* <Newsletter /> */}
      </Navbar>
    </div>
  )
}

export default About