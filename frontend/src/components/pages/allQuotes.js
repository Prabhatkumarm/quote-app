import React,{useState,useEffect} from 'react'
import Qut from './qut'
import './allQuotes.css'
import axios from 'axios'

export default function AllQuotes() {
  // const Dummy =[
  //   {
  //       author:'Mahatma gandhi',
  //       quote:'Be the change that you wish to see in the world.'
  //   },{
  //       author:'APJ Abdul Kalam',
  //       quote:'Dream is not that which you see while sleeping it is something that does not let you sleep'
  //   },{
  //       author:'Swami Vivekanand',
  //       quote:'Arise, Awake and stop not till the goal is reached'
  //   },{
  //       author:'Anonymos',
  //       quote:'Everyone goes through pain of discipline or pain of regret'
  //   }
  // ];

    const [qu,setqu]=useState([]);
    


  async function getAllQuotes(){
    const res= await axios.get('http://localhost:5000/getQuotes')
   
    setqu(res.data);
    
  };

  useEffect(()=>{
    getAllQuotes();
  },[]);
  return (
    
    <div className='aqs'>
      <h2>All quotes</h2>
      <ul >
        {
          qu.map((q)=>{
            return (
              <Qut author={q.author} quote={q.quote}/>
            )
              
            
          })
        }
      </ul>
    </div>
  )
}
