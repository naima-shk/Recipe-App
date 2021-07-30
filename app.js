
let API_KEY ='c9fbd55104db4d3a901694eda6081a80';

//  then fetch API from that particular website..

fetch('https://api.spoonacular.com/recipes/complexSearch?apiKey=c9fbd55104db4d3a901694eda6081a80&query=pasta')
.then(response => {
return response.json();/*here the data of recipes we are getting in form of json*/

}).then(recipeArray)

.catch(function (err) {
  console.log(err);
});

// introducing function and giving the objects of data in arguments
function recipeArray(obj){

  let recepies = obj.results;

  console.log(recepies);

  console.log(typeof recepies);

  // here using the map() function for printing the array of recipes
  document.getElementById("main-container").innerHTML =(recepies.map(recipe => 
    `
    <div class="main">
      <div class="content">
        <img  src="${recipe.image}" />
        <div class="title">${recipe.title}</div>
        <button type="button" class="btn">View Recipe</button>
     </div> 
    </div>`
).join(''));
}