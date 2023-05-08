import React ,{Fragment} from 'react'
import {Routes, Route} from 'react-router-dom'
import Navbar from './components/mainNavigation/mainNavigation'
import AllQuotes from './components/pages/allQuotes'
import NewQuote from './components/pages/newQuote'


function App() {
  return (
    <Fragment>
      <Navbar/>
      <main>
        <Routes>
          <Route path="/" element={<AllQuotes/>}/>
          <Route path="/new" element={<NewQuote/>}/>
        </Routes>
      </main>
    </Fragment>
  );
}

export default App;
