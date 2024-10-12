import React from "react";
import { NavLink } from "react-router-dom";

const MealCard = ({ detail }) => {
  console.log(detail);
  return (
    <div style={{display: "grid ", gridTemplateColumns: "repeat(3, 1fr)" , gridAutoRows: "auto" , gridGap: "1rem"}}>
      {!detail
        ? ""
        : detail.map((curItem) => {
            return (
              <div className="card" style={{width: "250px"}}>
                <img className="card-img-top" style={{height:"250px" , width:"250px"}} src={curItem.strMealThumb} alt="Card image cap" />
                <div className="card-body">
                  <h5 className="card-title">{curItem.strMeal}</h5>
                  <NavLink to={`/${curItem.idMeal}`}><button className="btn btn-primary">search</button></NavLink>
                  
                </div>
              </div>
            );
          })}
    </div>
  );
};

export default MealCard;
