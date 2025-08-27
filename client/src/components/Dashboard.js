import React, {useEffect, useState} from 'react'


function App() {
  

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
      <div class="mainCont">
        <header>
            <nav class="navBar">
                <a></a>
                <a></a>
                <a></a>
                <a></a>
                <a></a>
                <a></a>
                <a></a>
                <a></a>
                <a></a>
            </nav>
        </header>
        <div class="dashBoard"></div>
      </div>
    )
}

export default App