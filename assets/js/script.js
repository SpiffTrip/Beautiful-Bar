// super awesome javascript stuff here
function sportsNews() {
  fetch(
    "https://newsapi.org/v2/top-headlines?country=us&category=sports&pageSize=5&apiKey=1c26b2146af945b8a87bd5187e67421a"
  )
    .then((a) => a.json())
    .then((response) => {
      for (var i = 0; i < response.articles.length; i++) {
        document.getElementById("sportsnews").innerhtml +=
          "<div style='padding-top: 10px;'><img style: 'float: right; width: 150px;' src='" +
          response.articles[i].urlToImage +
          "'><h1>" +
          response.articles[i].title +
          "</h1>" +
          response.articles[i].source.name +
          "<br>" +
          response.articles[i].description +
          " <a href='" +
          response.articles[i].url +
          "'target='_blank'>" +
          response.articles[i].url +
          "</a></div>";
      }
    });
}
onload = sportsNews();
//
