import './App.css';
import React from "react";
import { Grommet} from "grommet";

function App() {

  const theme = {
    global: {
      font:{
        family: "Roboto",
        size:"18px"
      },
    },
  }

  return (
  <Grommet theme={theme}>
   <customchat-bot></customchat-bot>
  </Grommet>

  );
}

export default App;
