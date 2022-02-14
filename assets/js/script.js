
var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];
var submit = document.getElementsByClassName("submit")[0];



btn.onclick = function() {
  modal.style.display = "block";
}
span.onclick = function() {
  modal.style.display = "none";
}




submit.onclick = function() {
let favFood = document.getElementById("fav-food").favFood;
localStorage.setItem("textareaValue", favFood);

}

submit.onclick = function () {
    let favFood = document.getElementById("fav-food").favFood;
    localStorage.setItem("textareaValue", favFood);
  
  }
  const get_meal_btn = document.getElementById("get_meal");
  const meal_container = document.getElementById("meal");
  
  /**Fetch the Api when cliking the button. */
  get_meal_btn.addEventListener("click", () => {
    fetch("https://www.themealdb.com/api/json/v1/1/random.php")
      .then(res => res.json())
      .then(res => {
        createMeal(res.meals[0]);
      })
      .catch(e => console.error(e));
  });
  
  //Create createMeal
  const createMeal = meal => {
  
  
    const newInnerHtml = `
      <div class="row">
        <div class="columns">
          <img src="${meal.strMealThumb}" alt="MealImage">
          
          
          
          <ul>
            
          </ul>
        </div>
        <div class="columns seven">
          <h4>${meal.strMeal}</h4>
          
        </div>
      </div>
      
    `;
    meal_container.innerHTML = newInnerHtml;
  };