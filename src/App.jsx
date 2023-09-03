import './App.css'
import Recipe from './Recipe';
import { useEffect, useState } from 'react';

function App() {
  
  const APP_ID = 'b86d2934';
  const APP_KEY = '3d729a06667611358fa22af72d837a43';
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    // getRecipes();
}, []);

  const getRecipes = async() => {
    const response = await fetch(`https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`)
    const data = await response.json();
    setRecipes(data.hits)
  }


  return (
      <div className='App'>
        <form className='search-form'>
          <input type='text' className='search-bar' />
          <button type='submit' className='search-button'>Search</button>
        </form>
        {recipes.map((recipe) => (
          <Recipe />
        ))}
      </div>
  )
}

export default App
