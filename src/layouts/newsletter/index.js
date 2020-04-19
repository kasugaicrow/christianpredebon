import React, { useState } from "react"
import addToMailchimp from 'gatsby-plugin-mailchimp'

const Newsletter = () => {
  const [email, setEmail] = useState("")

  const handleNewsletterSubmit = (e) => {
    e.preventDefault()
    const res = addToMailchimp(email)
  }

  return (
    <form onSubmit={handleNewsletterSubmit}>
      <input type="email" value={email} onChange={e => setEmail(e.target.value)} />
    </form>
  )
}

export default Newsletter