import React from 'react';
import { ThemeProvider } from "styled-components";
import { Button, buttonStyles } from 'tb-awesome-ui';
import './App.css';

import MyButton from "./Button";

function App(props) {
  return (
    <ThemeProvider theme={{ mode: "dark" }}>
      <div className="App">
        <MyButton>Hey!</MyButton>
        <Button theme={{ mode: "dark" }}>Hey!</Button>
      </div>
    </ThemeProvider>
  );
}

export default App;
