import React from "react";
import "rsuite/dist/rsuite.min.css";
import "./App.css";
import { FlexboxGrid, Header } from "rsuite";
function App() {
  return (
    <FlexboxGrid justify="center">
      <Header>
        <h1>InGamers</h1>
      </Header>
    </FlexboxGrid>
  );
}

export default App;
