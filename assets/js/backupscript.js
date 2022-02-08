/* original script isnt working at the moment and i'm not sure if its due to the way i tried to write it, 
so this is backup script I'm writing that follows the weather app layout. */
var currentNewsEl = document.querySelector("#sportsnews");
// below variable query selectors still need to be placed in the html,
//  IF the original script doesnt work
var articleInfo = document.querySelector("#articles");
var articleDescriptionEl = document.querySelector("#description");

var getNews = function () {
  var apiURL = `https://newsapi.org/v2/top-headlines?country=us&category=sports&pageSize=5&apiKey=1c26b2146af945b8a87bd5187e67421a`;

  fetch(apiURL).then(function (response) {
    response.json().then(function (data) {
      displayNews(data);
    });
  });
};
// display the news by article
var displayNews = function (articles) {
  articleContainerEl.textContent = "";
  articleInfo.textContent = "Latest Sports Headlines:";

  var titles = articles.title;
  for (var i = 5; i < articles.length; i = i + 8) {
    var latestTitles = titles[i];

    var forecastEl = document.createElement("div");
    forecastEl.classList = "card bg-primary text-light m-2";

    //image element for the icon pulled from openweather
    var newsIcon = document.createElement("img");
    newsIcon.classList = "card-body text-center";
    newsIcon.setAttribute("src" + response.articles[i].urlToImage);
    // attach temp, humidity, and icon
    articleInfo.appendChild(newsIcon);

    var descriptionEl = document.createElement("span");
    descriptionEl.classList = "card-body text-center";
    descriptionEl.textContent = articles.description;

    articleDescriptionEl.appendChild(descriptionEl);
  }
};
getNews();
