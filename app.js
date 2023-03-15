//------------- handle search button-----------
const searchFood = () => {
  const searchField = document.getElementById("mealInput");
  const searchData = searchField.value;
  const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchData}`;
  if (searchField.value) {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        displayMealInfo(data.meals);
      });
  } else {
    alert("Please search something");
  }
};

const displayMealInfo = (mealData) => {
  const mealContainer = document.getElementById("mealCard");
  console.log(mealData);
  mealData.forEach((item) => {
    const foodItemName = document.createElement("div");
    foodItemName.className = "meal-items";
    itemPosition = item.idMeal;
    const mealInformation = `
        <img src ="${item.strMealThumb}">
        <h3>${item.strMeal}</h3>
        `;
    foodItemName.innerHTML = mealInformation;
    foodItemName.addEventListener("click", function () {
      console.log("clicked");
      mealIngredientsInfo(item.idMeal);
    });
    mealContainer.appendChild(foodItemName);
  });
};

//API Call by fetch for meal ingredients

const mealIngredientsInfo = (mealItemName) => {
  const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealItemName}`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      displayDetails(data.meals[0]);
    });
};

//meal ingredients details information

const displayDetails = (mealItemDetails) => {
  const mealCard = document.getElementById("mealItemsInfo");
  mealCard.textContent = "";
  const { strMeal, strMealThumb } = mealItemDetails;
  mealCard.classList.add("ingredients-info");

  //   const mealItemsInformations = document.innerHTML("div");
  //   mealItemsInformations.className = "ingredients-info";
  console.log(strMeal);
  const mealName = document.createElement("h1");
  mealName.innerText = strMeal;

  const ingredients = document.createElement("h5");
  ingredients.innerText = "Ingredients";

  const imgUrl = document.createElement("img");
  imgUrl.src = strMealThumb;

  /*  const ul = document.createElement("ul");
  const li = `
  
  <li>${items.strIngredient1}</li>
         <li>${items.strIngredient2}</li>
         <li>${items.strIngredient3}</li>
         <li>${items.strIngredient4}</li>
         <li>${items.strIngredient5}</li>
         <li>${items.strIngredient6}</li>
         <li>${items.strIngredient7}</li>
         <li>${items.strIngredient8}</li>
         <li>${items.strIngredient9}</li>
         <li>${items.strIngredient10}</li>
         <li>${items.strIngredient11}</li>
         <li>${items.strIngredient12}</li>
         <li>${items.strIngredient13}</li>
        `;
  ul.innerHTML = li; */

  mealCard.appendChild(imgUrl);
  mealCard.appendChild(mealName);
  mealCard.appendChild(ingredients);
  mealCard.appendChild(ul);
  //   mealCard.appendChild(mealItemsInformations);
};
