let searchForm = document.querySelector('form');
let searchResultDiv = document.querySelector('.search-result');
let container = document.querySelector('.container');
let searchQuery = 'pasta';
let API_KEY ='c9fbd55104db4d3a901694eda6081a80';


searchForm.addEventListener('submit', (e)=>{
    e.preventDefault();
    searchQuery=e.target.querySelector('input').value;
    console.log(searchQuery);
    
})

fetch('https://api.spoonacular.com/recipes/complexSearch?apiKey=API_KEY&query=pasta').then(function (response){
     //return response.json();
    console.log(response, 'response')
   /* document.getElementsByClassName('search-result')[0].innerHTML;
      document.getElementsByClassName('search-result')[1].innerHTML;
      document.getElementsByClassName('search-result')[3].innerHTML;
      document.getElementsByClassName('search-result')[4].innerHTML;
      document.getElementsByClassName('search-result')[5].innerHTML;*/
  }).then (function (form){
      
      console.log(form);
     
  }).catch(function (error){
      console.log('something went wrong');
      console.error(error);
  });
  