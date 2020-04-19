import React, { useState, useEffect } from "react"
import "./navbar.scss"
import { Link } from "gatsby"
import UserIcon from "./icons/user"
import ContactIcon from "./icons/contact"
import BlogIcon from "./icons/blog"

const Navbar: React.FC = (props) => {
  const [visMobileMenu, setVisMobileMenu] = useState(false)

  const as = {
    color: "#d68f2c"
  }

  const handleBlur = () => {
    setTimeout(() => {
      setVisMobileMenu(false)
    }, 100)
  }

  return (
    <>
      <nav className="nav desktop">
        <div className="nav__items">

          <Link to="/" className="nav__items__item" activeStyle={as}>
            <UserIcon />
            <span>about</span>
          </Link>

          <Link to="blog" className="nav__items__item" activeStyle={as}>
            <BlogIcon />
            <span>blog</span>
          </Link>

          <Link to="contact" className="nav__items__item" activeStyle={as}>
            <ContactIcon />
            <span>contact</span>
          </Link>

        </div>
      </nav>
      <nav className="mobile">
        <div className="dropdown">
          <div className="dropdown-button" onClick={() => setVisMobileMenu(!visMobileMenu)} onBlur={handleBlur} tabIndex={0}>
            <div></div>
            <div></div>
            <div></div>
          </div>
          {visMobileMenu && (
            <div className="dropdown-content">
              <Link to="/">about</Link>
              <Link to="blog">blog</Link>
              <Link to="contact">contact</Link>
            </div>
          )}
        </div>
      </nav>
      <main>
        <div className="pages-container">
          {props.children}
        </div>
      </main>
    </>
  )
}

export default Navbar