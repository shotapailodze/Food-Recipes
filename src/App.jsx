import Recipe from './Recipe';
import { useEffect, useState } from 'react';
import './App.css'

function App() {
  
  const APP_ID = 'b86d2934';
  const APP_KEY = '3d729a06667611358fa22af72d837a43';

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('chicken');

  useEffect(() => {
    getRecipes();
}, [query]);

  const getRecipes = async() => {
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`)
    const data = await response.json();
    setRecipes(data.hits)
  }

  const updateSearch = e => {
    setSearch(e.target.value);
  };

  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch('');
  }


  return (
      <div className='App'>
        <form onSubmit={getSearch} className='search-form'>
          <input value={search} onChange={updateSearch} type='text' className='search-bar' />
          <button type='submit' className='search-button'>Search</button>
        </form>
        <div className='recipes'>
          {recipes.map((recipe) => (
            <Recipe
            key={recipe.recipe.label}
            title={recipe.recipe.label}
            calories={recipe.recipe.calories}
            image={recipe.recipe.image}
            ingredients={recipe.recipe.ingredients}
            />
          ))}
        </div>
      </div>
  )
}

export default App
