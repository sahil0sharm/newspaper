let filter = document.querySelectorAll(".newstochoose")
var newshtml = "";
var king = document.querySelector("#newshere");
document.querySelector("#india").addEventListener("click", function (e) {
    fetch("https://newsapi.org/v2/top-headlines?country=in&apiKey=dc61cf5d1b6e4d6e9042a01d34868313")
        .then(responses => responses.json())
        .then((news) => {
            for (let i = 0; i < news.articles.length - 1; i++) {
                newshtml += `<div class="ambani">
            <img src="${(news.articles[i].urlToImage != null) ? news.articles[i].urlToImage : ""}" width="100%" height="225"/ >
            <h2>${news.articles[i].title}</h2>
            <p>${(news.articles[i].description != null) ? news.articles[i].description : ""}</p>
            <p class="read"><a href="${news.articles[i].url}" target="_blank">READ MORE <i class="fa fa-long-arrow-right" aria-hidden="true"></a></i></p>
        </div>`;
            }
            // console.log(newshtml)
            king.innerHTML = newshtml;
        })
})


document.querySelector("#international").addEventListener("click", function (e) {
    console.log(e.target.getAttribute("id"))
})


document.querySelector("#sports").addEventListener("click", function (e) {
    console.log(e.target.getAttribute("id"))
})


document.querySelector("#hp").addEventListener("click", function (e) {
    console.log(e.target.getAttribute("id"))
})

