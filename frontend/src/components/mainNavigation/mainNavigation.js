import React from 'react'
import {Link} from 'react-router-dom'
import './mainNavigation.css'

export default function MainNavigation() {
  return (
    <nav className="nav">
      <h2>GREAT QUOTES</h2>
      <ul>
        <li><Link to="/">All quote</Link></li>
        <li><Link to="/new">Add new quote</Link></li>
        
      </ul>
    </nav>
  )
}
