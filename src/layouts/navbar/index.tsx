import React, { useState, useEffect } from 'react'
import './navbar.scss'
import userLogo from './icons/user'
import { Link } from 'gatsby'
import UserIcon from './icons/user'
import ContactIcon from './icons/contact'
import BlogIcon from './icons/blog'

const Navbar: React.FC = (props) => {
  const as = {
    color: '#e0f0fc'
  }

  return (
    <>
      <nav className="nav">
        <div className="nav__items">
          
          <Link to="about" className="nav__items__item" activeStyle={as}>
            <UserIcon isFilled={false} />
            <span>about</span>
          </Link>

          <Link to="blog" className="nav__items__item" activeStyle={as}>
            <BlogIcon isFilled={false} />
            <span>blog</span>
          </Link>

          <Link to="contact" className="nav__items__item" activeStyle={as}>
            <ContactIcon isFilled={false} />
            <span>contact</span>
          </Link>

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