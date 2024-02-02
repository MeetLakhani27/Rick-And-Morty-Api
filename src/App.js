import { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {

  const [data, setdata] = useState([]);

  useEffect(() => {
    axios.get('https://rickandmortyapi.com/api/character')
      .then(function (response) {

        setdata(response.data.results);
      })
      .catch(function (error) {
        console.log(error);
      })
  })


  return (
    <>
      <div className="head"><h1>Rick And Morty Api</h1></div>
      <div className="row">
        {
          data.map((ele) => {
            return (
              <div className="section">
                <div className="box">
                  <div className="img">
                    <img src={ele.image}></img>
                  </div>
                  <div className="details">
                    <div className="line1">
                      <h1>{ele.name}</h1>
                    </div>
                    <div className="line2">
                      <span>Last known location:</span>
                      <h3>{ele.location.name}</h3>
                    </div>
                    <div className="line3">
                      <span>First seen in:</span>
                      <h3>{ele.origin.name}</h3>
                    </div>
                  </div>
                </div>
              </div>
            )
          })
        }
      </div>
    </>
  );
}

export default App;
