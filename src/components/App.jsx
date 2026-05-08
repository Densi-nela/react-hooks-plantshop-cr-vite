import React, { useState } from "react";
import Header from "./Header";
import PlantPage from "./PlantPage";

function App() {

  const [plants,setPlants]=useState([])

  const handleUpdatePlant = (updatedPlant) => {
    setPlants((prevPlants) =>
      prevPlants.map((plant) =>
        plant.id === updatedPlant.id ? updatedPlant : plant
      )
    );
  };
  return (
    <div className="app">
      <Header />
      <PlantPage plants={plants} setPlants={setPlants}  handleUpdatePlant={handleUpdatePlant}/>
    </div>
  );
}

export default App;
