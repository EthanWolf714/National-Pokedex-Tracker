import React, {useEffect, useState} from 'react'
import Header  from './Header';
import './Dashboard.css';


function Dashboard() {
  const [backendData, setBackendData] = useState([]);

  //fetching/api route
  useEffect (() => {
    fetch("/api")
    //gets a response from the api
    .then(response => response.json())
     //data from json will be set to backEnd data
    .then(data => {
        setBackendData(data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);
    return (
      
      <div class="mainContent">
        <div>
          <Header></Header>
        </div>
        <div class="dashBoard"></div>
        <table class="dexTable">
          <caption>National Dex</caption>
          <thead>

          </thead>
          <tbody>
            {backendData.length > 0 ? (
              backendData.map((item, index) => (
                <tr key={index}>
                  {/* Render table cells with item data */}
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="3">Loading... or No data available.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    )
}

export default Dashboard;