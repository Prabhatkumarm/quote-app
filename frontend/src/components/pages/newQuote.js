import React, {useRef} from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
import './newQuote.css'

export default function NewQuote() {
  const authorRef = useRef();
  const quoteRef = useRef();
  const navigate = useNavigate();
  const redirectHelper =()=>{
    navigate('/');
  }
  const submitHandler=async (e)=>{
    e.preventDefault();
    const author=authorRef.current.value;
    const quote = quoteRef.current.value;
    await axios.post('http://localhost:5000/getQuotes',{author,quote});
    redirectHelper();
  }

  return (
    <div id="xyz">
      <h2>Create new quote</h2>
      <form action="" method='POST' onSubmit={submitHandler}>
        <label htmlFor="author">Author</label>
        <input type="text" id='author' placeholder='Author name' ref={authorRef}/>
        <label htmlFor="quote">Quote</label>
        <textarea id='quote' placeholder='Quote' ref={quoteRef}/>
        <button type="submit">SUBMIT</button>
      </form>
    </div>
  )
}
