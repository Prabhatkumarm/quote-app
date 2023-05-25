import React from 'react'
import './qut.css'

function Qut(props) {
  return (
            <li className='qut'>
                <div>
                  <p className="quote">{props.quote}</p>
                  <p className="author">-{props.author}</p>
                </div>
                <button>View Fullscreen</button>
            </li>
  )
}

export default Qut;
