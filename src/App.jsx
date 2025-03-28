import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <h1>Welcome to the Book App</h1>
        <a href="http://localhost:5000/login">
          <button id='loginBtn'>Log In</button>
        </a>
        <a href="http://localhost:5000/register" target="_blank">
          <button id="signupBtn">Sign Up</button>
        </a>
      </div>
    
    </>
  )
}

export default App
