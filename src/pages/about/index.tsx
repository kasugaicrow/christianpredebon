import React from "react"
import Navbar from "../../layouts/navbar"
import SEO from "../../layouts/seo"

const About = () => {

  return (
    <div className="application">
      <SEO title="About me" description="My name's Christian Predebon. I'm twenty-one and I'm a curious front end developer who loves to always keep up to date with new stuff and to try different technologies." />
      <Navbar>
        <h1>About me</h1>

        <p>• My name's Christian Predebon •</p>

        <p>I'm twenty-one and I'm a curious front end developer who loves to always keep up to date with new stuff.</p>

        <p>I currently work at <a href="https://zeuslab.it">Zeuslab</a> on the research and development team. We are a small team of functional programming enthusiastic people who loves challenges. My mainly involvement with the team is to develop and maintain web applications.</p>

        <p>Off work I have few hobbies, like reading, playing video games, <a href="https://open.spotify.com/playlist/4pjRUqYWelaZnrmD81jii5?si=iHfIYmMCSO-mC3q0V4gYZw">listening to electronic music</a> and taking walks.</p>

        <p>I want you to know that for this website I use Google Analytics to track some data for statistical purposes.</p>
      </Navbar>
    </div>
  )
}

export default About