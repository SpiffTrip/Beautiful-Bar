// super awesome javascript stuff here
function sportsNews() {
  fetch(
    "https://newsdata.io/api/1/news?apikey=pub_44236e488244270aebb37a53e72007f32a7a&country=us&category=sports&page=1"
  )
    .then((a) => a.json())
    .then((response) => {
      for (var i = 0; i < response.results.length; i++) {
        document.getElementById("sportsnews").innerhtml +=
          "<div style='padding-top: 10px;'><img style: 'float: right; width: 150px;' src='" +
          response.results[i].image_url +
          "'><h1>" +
          response.results[i].title +
          "</h1>" +
          response.results[i].source_id +
          "<br>" +
          response.results[i].description;
      }
    });
}
sportsNews();
//
