import React, { useState } from 'react'
import { useParams } from 'react-router-dom'

const MealInfo = () => {
  const {mealid}=useParams();
  console.log(mealid);
  const [info, setinfo] = useState()

  const getInfo=async()=>{
    const get = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealid}`);
    const jsondata = await get.json();
    console.log(jsondata.meals[0]);
    setinfo(jsondata.meals[0]);
  }
  if(info !=""){
    getInfo();
  }

  return (
   <div>
     {
      !info ? "data not found" :
      <div>
      <div class="card mb-3" style={{width: "1200px",height:"400px"}}>
  <div class="row no-gutters">
    <div class="col-md-4">
    <img src={info.strMealThumb} style={{height:"400px",width:"400px"}}/>
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">{info.strMeal  }</h5>
        <h5>Instructions</h5>
        <p class="card-text">{info.strInstructions}</p>
        <p class="card-text"><small class="text-muted">{info.strSource}</small></p>
      </div>
    </div>
  </div>
</div>
    </div>
    }
   </div>
    
  )
}

export default MealInfo
