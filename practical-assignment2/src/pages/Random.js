import React from 'react'
import { useState, useEffect } from 'react';

const URL = 'https://www.thecocktaildb.com/api/json/v1/1/random.php';

export default function Random() {

  const [name, setName] = useState('');
  const [category, setCategory] = useState('');
  const [glass, setGlass] = useState('');
  const [instructions, setInstructions] = useState('');
  const [ingredients, setIngredients] = useState('');

  const [image, setImage] = useState("")

  const ingredientList = [];

  useEffect(() => {
    async function getDrink() {
      try {
        const response = await fetch(URL);
        if (response.ok) {
          const json = await response.json();
          const drinks = json.drinks[0];
          setName(drinks.strDrink);
          setCategory(drinks.strCategory);
          setGlass(drinks.strGlass);
          setInstructions(drinks.strInstructions);
          setImage(drinks.strDrinkThumb);

          ingredientList.push(drinks.strIngredient1,
            drinks.strIngredient2,
            drinks.strIngredient4,
            drinks.strIngredient5,
            drinks.strIngredient6,
            drinks.strIngredient7,
            drinks.strIngredient8,
            drinks.strIngredient9,
            drinks.strIngredient10,
            drinks.strIngredient11,
            drinks.strIngredient12,
            drinks.strIngredient13,
            drinks.strIngredient14,
            drinks.strIngredient15);

          const renderList = ingredientList.map((item, index) =>
            <div key={index}>{item}</div>);
          setIngredients(renderList);

        } else {
          alert('Error retrieving recipes!');
        }

      } catch (err) {
        alert(err);
      }
    }
    getDrink();
  }, [])

  return (
    <div className='px-4 py-5 my-5'>
      <div className='text-center'>
        <h1 className='display-5 fw-bold'>Random recipe</h1>
        <p>(refresh page for a new random recipe)</p>
      </div>
      <div className='col-lg-8 mx-auto'>

        <div className='cus-container'>
          <div className='cus-grid'>
            <div>
              <h3>{name}</h3>
              <p><strong>Type of glass:</strong> {glass}</p>
              <p><strong>Category: </strong> {category}</p>

              <h4><u>Ingredients</u></h4>
              <p>{ingredients}</p>

              <h4><u>Instructions</u></h4>
              <p>{instructions}</p>
            </div>
            <img src={image} alt="of a drink"></img>

          </div>

        </div>
      </div>
    </div>
  );
}