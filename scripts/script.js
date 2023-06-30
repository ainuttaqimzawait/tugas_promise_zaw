//js menggunakan filter javascript
// function myFunction() {
//   var input, filter, ul, li, a, i, txtValue;
//   input = document.getElementById("myInput");
//   filter = input.value.toUpperCase();
//   ul = document.getElementById('berita-container');
//   li = document.querySelectorAll('.kolom');
//   a = document.querySelectorAll('.cart');
//   for (i = 0; i < li.length; i++) {
//     a = li[i].querySelectorAll('.cart')[0];
//     txtValue = a.textContent || a.innerText;
//     if (txtValue.toUpperCase().indexOf(filter) > -1) {
//       li[i].style.display = "";
//     } else {
//       li[i].style.display = "none";
//     }
//   }
// }

//fetch

async function tampilanDefault() {
  let articles = await getArticles("indonesia");
  updateUi(articles);
};

tampilanDefault();


async function myFunction() {
  const inputKeyword = document.querySelector('.myInput');
  const articles = await getArticles(inputKeyword.value);
  updateUi(articles);
};

function getArticles(keyword) {
  return fetch('https://newsapi.org/v2/everything?q=' + keyword + '&from=2023-05-30&sortBy=publishedAt&apiKey=f5d1256f0bd24c3eb5ca73795f655e97')
    .then(response => response.json())
    .then(response => response.articles)
    .finally(() => document.querySelector('.loading').innerHTML = "");
}

function updateUi(articles) {
  let cards = '';
  articles.forEach(m => cards += showCards(m));
  document.getElementById('berita-container').innerHTML = cards;
}

function showCards(m) {
  return `<div class="col-md-4 kolom my-3">
        <div class="card cart" style="width: 18rem;">
  <img src="${m.urlToImage}" class="card-img-top">
  <div class="card-body">
    <h5 class="card-title">${m.title}</h5>
    <p class="card-text">${m.description}</p>
    <h6 class="card-subtitle mb-2 text-muted">${m.publishedAt}</h6>
  </div>
</div>
      </div>`
}