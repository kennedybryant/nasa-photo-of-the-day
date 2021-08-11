import React, { useState, useEffect } from "react";
import axios from 'axios';
import { BASE_URL, API_KEY } from "../constants/index.js";
import "../App.css";
import  Date from './Date';
import  Title from './Title';
import  Credit from './Credit';
import  Image from './Image';
import  Explanation from './Explanation';





function App() {

  const [nasaData, setNasaData] = useState([])

  useEffect(() => {
    axios.get(`${BASE_URL}?api_key=${API_KEY}`)
      .then(res => {
        console.log(res.data)
        setNasaData(res.data)
      })
      .catch(err => {
        console.error(err);
      })
  }, [])

  return (
    <div className="App">
      <p>
        Nasa Daily Photograph <span role="img" aria-label='go!'>🚀</span>!
      </p>
      < Date date={nasaData.date} />
      < Title title={nasaData.title} />
      < Credit copyright={nasaData.copyright} />
      < Image image={nasaData.url} />
      < Explanation explanation={nasaData.explanation} />
    </div>
  );
}

export default App;
