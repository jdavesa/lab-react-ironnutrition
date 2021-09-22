import "./App.css";
import foods from "./foods.json";
import { Card, Col, Divider, Button } from "antd";
import React, { useState } from "react";
import FoodBox from "./components/FoodBox.js";
import AddFoodForm from "./components/AddFoodForm";
import Search from "./components/Search.js"

function App() {
  const [foodListMemory, setFoodListMemory] = useState(foods)
  const [foodList, setFoodList] = useState(foodListMemory);
  
  const [isShow, setIsShow] = useState(true)

  const addNewFood = (newFood) =>{

    const updateFoods = [...foodListMemory, newFood]

    setFoodListMemory(updateFoods)
    setFoodList(updateFoods)

  }

  const deleteFood = (deletedFood) =>{
    console.log(deletedFood)

    const updateFood = [...foodList]

    let newList = updateFood.filter((food)=>{return food.name !== deletedFood})

    setFoodListMemory(newList)
    setFoodList(newList)
  }

  const searchFood = (str) =>{
    let filteredFood
    console.log(str)

    if(str === ''){

      filteredFood = foodListMemory

    } else {
      filteredFood = foodListMemory.filter((food)=> {
        return food.name.toLowerCase().substr(0,str.length) === str.toLowerCase()
      })
    }
    setFoodList(filteredFood)
  }

  const toggleShowForm = () =>{
    setIsShow(!isShow)

    

  }

  return (
    <div className="App">
      <h1>Food List</h1>
      {isShow && <AddFoodForm addFoodForm={addNewFood}/>}
      <Button onClick={toggleShowForm}>{isShow?'Hide Form':'Add New Food'}</Button>
      <Search searchFood={searchFood}/>
      <div className="cards-container">
        {foodList.map((food) => {
          return (
            <FoodBox
              name={food.name}
              image={food.image}
              calories={food.calories}
              servings={food.servings}
              delete={deleteFood}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
