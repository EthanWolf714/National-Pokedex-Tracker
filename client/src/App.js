import React, {useEffect, useState} from 'react'
import Dashboard from './components/Dashboard'

function App() {
  //const [backendData, setBackendData] = useState([{}])

  /**  //fetching /api route
  useEffect (() => {
    fetch("/api").then(
      //gets a response from the api
      response => response.json()

    ).then(
      //data from json will be set to backEnd data
      data => {
        setBackendData(data)
      }
    )
  }, [])*/
    return (
      <div>
        <Dashboard></Dashboard>
      </div>
    )
}

export default App