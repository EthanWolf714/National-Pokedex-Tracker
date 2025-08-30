import React, {useEffect, useState} from 'react'
import Header  from './Header';
import './styles/Dashboard.css';


function Dashboard() {
  const [pokemon, setPokemon] = useState([]);
  const [page, setPage] = useState(0);
  const limit = 100;

  //fetching/api route
  useEffect(() => {
    fetch(`http://localhost:5000/api/pokedex?limit=${limit}&offset=${page * limit}`)
    .then(res => res.json())
    .then(data => setPokemon(data.results))
    .catch(err => console.error(err));
        
  }, [page]);

  return (
      
    <div className="mainContent">
      {/* <head>
          <title>Pokedex Tracker</title>
      </head> */}
      <div>
        <Header />
      </div>
      <div className="dashboard">
        <table className="dexTable">
          <caption>National Dex</caption>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
            </tr>
          </thead>
          <tbody>
            {pokemon.map((p, index) => (
              <tr key={index}>
                  <td>{page * limit + index + 1}</td>
                  <td>{p.name}</td>
                </tr>
            ))}
                
              
            
          </tbody>
        </table>
        <div style={{ marginTop: "1rem" }}>
          <button disabled={page === 0} onClick={() => setPage(page - 1)}>Prev</button>
          <button onClick={() => setPage(page + 1)}>Next</button>
        </div>
      </div>
        
    </div>
  )
}

export default Dashboard;