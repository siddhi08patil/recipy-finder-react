import React, { useState } from "react";
import MealCard from "./MealCard";


const MainPage = () => {
  const [data, setdata] = useState();
  const [search, setsearch] = useState();
  const [msg, setmsg] = useState("");

  const inputHnadler = (event) => {
    setsearch(event.target.value);
  };

  const myfn = async () => {
    
      const get = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`
      );
      const jsdata = await get.json();
      setdata(jsdata.meals);
    
  };
  

  return (
    <>
    <h1>Recipy search app</h1>
      <div className="container .flex-row">
      <nav class="navbar navbar-light bg-light justify-content-between ">
      <div className="form-inline">
      <div className="searchBar ">
      <a class="navbar-brand">Recipy finder</a>
      
          <input className="form-control mr-sm-2"
            type="text"
            placeholder="search recipy"
            onChange={inputHnadler}
          />
          <button  className="btn btn-outline-success my-2 my-sm-0" onClick={myfn}>search</button>
          </div>
        </div>
        </nav>
  
        <div>
          <MealCard detail={data} />
        </div>
      </div>
    </>
  );
};

export default MainPage;
