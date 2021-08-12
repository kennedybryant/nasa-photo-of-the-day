import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
import { ThemeProvider } from 'styled-components';
import theme from './theme';

ReactDOM.render(
    <ThemeProvider theme={theme}>
        <App />
    </ThemeProvider>, 
    document.getElementById("root")
);
