import React from "react"
import { Link } from "gatsby"
import logo from "../../static/apple-touch-icon.png"

const NotFound = () => {
  return (
    <div className="application-not-found">
      <img src={logo} alt="" />

      <div>
        <Link to="/">you are tired, go back home</Link>
      </div>
    </div>
  )
}

export default NotFound