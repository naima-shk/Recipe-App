let searchForm = document.querySelector('form');
let searchResultDiv = document.querySelector('.search-result');
let container = document.querySelector('.container');
let searchQuery = '';
let API_KEY ='c9fbd55104db4d3a901694eda6081a80';


searchForm.addEventListener('submit', (e)=>{
    e.preventDefault();
    searchQuery=e.target.querySelector('input').value;
    console.log(searchQuery);
    fetchAPI();
})

async function fetchAPI(){
    const baseURL = 'https://api.spoonacular.com/recipes/complexSearch?apiKey=API_KEY&query=pasta'
    const response = await fetch(baseURL);
    const data = await response.json();
    console.log(data);

}