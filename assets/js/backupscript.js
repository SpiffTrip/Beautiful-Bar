/* original script isnt working at the moment and i'm not sure if its due to the way i tried to write it, 
so this is backup script I'm writing that follows the weather app layout i had made for challenge6. */
var currentNewsEl = document.querySelector("#sportsnews");
// below variable query selectors still need to be placed in the html,
//  IF the original script doesnt work
var articleContainerEl = document.querySelector("#articlecontainer");
var articleInfo = document.querySelector("#articles");
var articleDescriptionEl = document.querySelector("#description");

var getNews = function () {
  var apiURL = `https://newsdata.io/api/1/news?apikey=pub_44236e488244270aebb37a53e72007f32a7a&country=us&category=sports&page=1`;

  fetch(apiURL).then(function (response) {
    response.json().then(function (data) {
      displayNews(data);
    });
  });
};
// display the news by article
var displayNews = function (results) {
  articleContainerEl.textContent = "";
  articleInfo.textContent = "Latest Sports Headlines:";

  var titles = results.title;
  for (var i = 5; i < results.length; i = i + 8) {
    var latestTitles = titles[i];

    //image element
    var newsIcon = document.createElement("img");
    newsIcon.classList = "card-body text-center";
    newsIcon.setAttribute("src" + response.results[i].image_url);

    articleInfo.appendChild(newsIcon);

    var descriptionEl = document.createElement("span");
    descriptionEl.classList = "card-body text-center";
    descriptionEl.textContent = results.description;

    articleDescriptionEl.appendChild(descriptionEl);
  }
};
getNews();
