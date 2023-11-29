import React, { useEffect, useState } from "react";
import "./FilterComponent.css";
const FilterComponent = ({ onFilter }) => {
  const [searchString, setSearchString] = useState ("")
  const [tasks, setTasks] = useState()
  const [currentTasks, setCuerrentTasks] = useState([])
  const handleInputChange = (event) => {
    const term = event.target.value;
    setSearchTerm(term);
  };

  const handleChangeFilter = (e) =>{
    setSearchString (e.target.value)
  }

 


  return (
    <div className="filter-container">
      <label htmlFor="searchInput">Buscar Tarea:</label>
      <input
        type="text"
        name="text"
        class="input"
        value={searchString} 
        onChange={handleChangeFilter}
        placeholder="Buscar Tarea..."
      />
    </div>
  );
};

export default FilterComponent;