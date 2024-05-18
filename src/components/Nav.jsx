import React from 'react'
import { FaMoon } from 'react-icons/fa'

const Nav = () => {
  return (
    <nav>
        <div className="nav-container">
            <h1>Where in the world?</h1>
            <button>
            <FaMoon />
            Dark Mode
            </button>
        </div>
    </nav>
  )
}

export default Nav
