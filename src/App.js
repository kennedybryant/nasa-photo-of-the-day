import React, { useState, useEffect } from "react";
import axios from 'axios';
import { BASE_URL, API_KEY } from "../constants/index.js";
import "./App.css";
import  Date from './components/Date';
import  Title from './components/Title';
import  Credit from './components/Credit';
import  Image from './components/Image';
import  Explanation from './components/Explanation';

import styled from 'styled-components';

const StyledApp = styled.div`
  background-color: ${pr => pr.theme.prussianBlue};
  padding: 10px 25px;

  h1 {
    color: ${pr => pr.theme.blueGreen};
    margin-top: 50px;
    padding: 25px 0;
    border: dotted 10px ${pr => pr.theme.honeyYellow};
  }

`


function App() {

  const [nasaData, setNasaData] = useState([])

  useEffect(() => {
    axios.get(`${BASE_URL}?api_key=${API_KEY}`)
      .then(res => {
        setNasaData(res.data)
      })
      .catch(err => {
        console.error(err);
      })
  }, [])

  return (
    <StyledApp className="App">
      <h1>
        Nasa Daily Photograph <span role="img" aria-label='go!'>🚀</span>!
      </h1>
      < Date date={nasaData.date} />
      < Title title={nasaData.title} />
      < Credit copyright={nasaData.copyright} />
      < Image image={nasaData.url} />
      < Explanation explanation={nasaData.explanation} />
    </StyledApp>
  );
}

export default App;
