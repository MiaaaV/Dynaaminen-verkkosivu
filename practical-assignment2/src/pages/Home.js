import React from 'react';
import { useState } from 'react';
import '../components/home.css';

const URL = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';

var hide = 0;

export default function Home() {

  const [searchState, setSearchState] = useState("")
  const [recipeData, setRecipeData] = useState([]);

  const [isActive, setIsActive] = useState(true);

  // hides and displays search results
  const handleClick = event => {
    if (hide === 0) {
      setIsActive(current => !current);
      hide = 1;
    }
  }

  var s_result = '';

  const handleChange = event => {
    s_result = event.target.value;
    setSearchState(s_result)
  };

  const handleSearch = event => {

    async function getDrink() {
      if (searchState === '' || searchState === ' ') {
        alert("Please input name of a drink")
        return
      }
      try {
        const response = await fetch(URL + searchState);

        if (response.ok) {
          const json = await response.json();
          if (json.drinks === undefined || json.drinks === null || json.drinks === '' || json.drinks === 0 || !json.drinks) {
            alert("Can't find drinks")
            return
          }

          const drinks = json.drinks;
          setRecipeData(drinks);

        } else {
          alert('Error retrieving recipes!');
        }

      } catch (err) {
        alert(err);
      }
    }
    getDrink();
  }

  const recipe = recipeData.map((data, id) => {

    const ingredientList2 = [];

    ingredientList2.push(data.strIngredient1,
      data.strIngredient2,
      data.strIngredient4,
      data.strIngredient5,
      data.strIngredient6,
      data.strIngredient7,
      data.strIngredient8,
      data.strIngredient9,
      data.strIngredient10,
      data.strIngredient11,
      data.strIngredient12,
      data.strIngredient13,
      data.strIngredient14,
      data.strIngredient15);

    const ingredientList2Formatted = ingredientList2.map((item, index) =>
      <div key={index}>{item}</div>);

    return (
      <div className='cus-grid'>
        <div key={id}>
          <h3>{data.strDrink}</h3>
          <p><strong>Type of glass:</strong> {data.strGlass}</p>
          <p><strong>Category: </strong> {data.strCategory}</p>
          <h4><u>Ingredients</u></h4>
          <p>{ingredientList2Formatted}</p>
          <h4><u>Instructions</u></h4>
          <p>{data.strInstructions}</p>
        </div>
        <img src={data.strDrinkThumb} alt="of a drink"></img>

      </div>
    )

  })
  return (

    <div className="px-4 py-5 my-5">

      <h1 className="display-5 fw-bold header text-center">Cocktail recipes</h1>
      <div className="col-lg mx-auto">
        <p className="mb-4 text-center">No clue what cocktails to make? Either click the button to find a random recipe or search for specific common one!</p>

        <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
          <button type="button" className="btn btn-lg px-4 gap-3">
            <a className='btn-link' href='./random'>Random recipe</a>
          </button>
          <input type="search" className="px-4 gap-3" onChange={handleChange}></input>
          <button type='button' className='btn btn2 btn-lg gap-3'
            onClick={() => { handleSearch(); handleClick(); }}>Search</button>
        </div>

        <div className={isActive ? 'active' : 'cus-container cus-grid'}>
          {recipe}
        </div>
      </div>
    </div >
  );
}