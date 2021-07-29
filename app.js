let searchForm = document.querySelector('form');
let searchResultDiv = document.querySelector('.search-result');
let container = document.querySelector('.container');
let searchQuery = '';
let Api_key ='c9fbd55104db4d3a901694eda6081a80';


searchForm.addEventListener('submit', (e)=>{
    e.preventDefault();
    searchQuery=e.target.querySelector('input').value;
    console.log(searchQuery);
})

async function fetchAPI(){
    const baseURL = 'https://api.spoonacular.com/recipes/complexSearch?apiKey=API_KEY&query=pasta'
    const response = await fetch(baseURL);
    console.log(response);

}