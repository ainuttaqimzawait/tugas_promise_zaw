//js menggunakan vanila javascript
function myFunction() {
  var input, filter, ul, li, a, i, txtValue;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  ul = document.getElementById('berita-container');
  li = document.querySelectorAll('.kolom');
  a = document.querySelectorAll('.cart');
  for (i = 0; i < li.length; i++) {
    a = li[i].querySelectorAll('.cart')[0];
    txtValue = a.textContent || a.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}


fetch('https://newsapi.org/v2/everything?q=apple&from=2023-06-26&to=2023-06-26&sortBy=popularity&apiKey=468dc73a648c440292da56bf25aceb95')
  .then(response => response.json())
  .then(result => {
    console.log(result);
    const articles = result.articles;
    let cards = '';
    articles.forEach(m => {
      cards += `<div class="col-md-4 kolom my-3">
        <div class="card cart" style="width: 18rem;">
  <img src="${m.urlToImage}" class="card-img-top">
  <div class="card-body">
    <h5 class="card-title">${m.title}</h5>
    <p class="card-text">${m.description}</p>
    <h6 class="card-subtitle mb-2 text-muted">${m.publishedAt}</h6>
  </div>
</div>
      </div>`
    });
    document.getElementById('berita-container').innerHTML = cards;
  })
  .finally(() => {
    document.querySelector('.loading').innerHTML = "";
  })