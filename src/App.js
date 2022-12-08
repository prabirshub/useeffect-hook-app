import React, { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [toggle, setToggle] = useState(false)
  const clickHandler = () => {
    setToggle(!toggle)
  }

  useEffect(() => {
    document.title = toggle
      ? 'Welcome to My Github account'
      : 'Using the useEfect hook'
  }, [toggle])
  return (
    <div className='App'>
      <h1>Using the useEffect hook</h1>
      <button onClick={clickHandler}>
        Toggle message
        {toggle && <h2>Welcome to My Github account</h2>}
      </button>
    </div>
  )
}

export default App
