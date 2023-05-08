import React from 'react'
import {Link} from 'react-router-dom'
import styles from './mainNavigation.css'

export default function mainNavigation() {
  return (
    <nav className="nav">
      <h2>Great Quotes</h2>
      <ul>
        <li><Link to="/">All quote</Link></li>
        <li><Link to="/new">Add new quote</Link></li>
        
      </ul>
    </nav>
  )
}
