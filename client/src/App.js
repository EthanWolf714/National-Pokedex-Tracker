import React, {useEffect, useState} from 'react'


function App() {
  const [backendData, setBackendData] = useState([{}])

  //fetching /api route
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
  }, [])
    return (
      <div>
        {(typeof backendData.users === 'undefined') ? (
          <p>Loading...</p>
        ): (
          backendData.users.map((user, i) => (
            <p key={i}>{user}</p>
          ))
        )}
      </div>
    )
}

export default App