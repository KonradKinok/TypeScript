import { capitalizeFirstLetter } from "../globalFunctions/f";
import React from "react";

function App() {
  const imie = "konrad";


  return (
    <>
      <h1>React Homework Template</h1>
      <h2>(Vite)</h2>
      <h3>{capitalizeFirstLetter(imie)}</h3>
    </>
  );
}

export default App;
