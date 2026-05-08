import React, { useEffect, useState } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage({ plants, setPlants ,handleUpdatePlant} ){
  const [error, setError] = useState(null);
  const [search, setSearch] = useState(""); // ✅ search state

  useEffect(() => {
    fetch("http://localhost:6001/plants")
      .then((res) => res.json())

      .then((data) => setPlants(data))
      .catch((err) => setError("Failed to load plants. Is the server running?"));
  }, []);

  if (error) return <p>{error}</p>;

  const handleAddPlant = (newPlant) => {
  setPlants((prevPlants) => [...prevPlants, newPlant]); // ✅ adds to array
};

  const filteredPlants = plants.filter((plant) =>
    plant.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <main>
      <NewPlantForm handleAddPlant={handleAddPlant} />
      <Search search={search} setSearch={setSearch} />
      <PlantList plants={filteredPlants}   handleUpdatePlant={handleUpdatePlant}/>
    </main>
  );
}

export default PlantPage;