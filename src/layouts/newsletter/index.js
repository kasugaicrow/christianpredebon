import React, { useState } from "react"
import addToMailchimp from 'gatsby-plugin-mailchimp'

const Newsletter = () => {
  const [email, setEmail] = useState("")
  const [res, setRes] = useState("")
  // const [msg, setMsg] = useState("")

  const handleNewsletterSubmit = async (e) => {
    e.preventDefault()
    const res = await addToMailchimp(email)
    setRes(res.msg)
  }

  return (
    <form className="newsletter-container" onSubmit={handleNewsletterSubmit}>
      <input placeholder="email@email.it" type="email" value={email} onChange={e => setEmail(e.target.value)} />
      <input type="submit" value="SUBSCRIBE" />
      
      {res !== "" && (
        <p>{res}</p>
      )}
    </form>
  )
}

export default Newsletter