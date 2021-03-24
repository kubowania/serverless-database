import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'


function App() {
  const [message, setMessage] = useState(null)

  const fetchData = async () => {
    const results = await axios.get('/.netlify/functions/getData')
    setMessage(Object.values(results.data)[0].text)
  }

  // Don't really need this to be in a useEffect
//   useEffect(() => {
    fetchData()
//   },[])

  return (
    <div className="App">
      <header className="App-header">
        <p>{message}</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  )
}

export default App
