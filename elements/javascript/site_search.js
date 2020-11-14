function siteSearch() {
  // Declare variables
  var input, filter, ul, article, filterwords, i;
  input = document.getElementById("site_search");
  filter = input.value.toUpperCase();
  ul = document.getElementById("article-list");
  article = ul.getElementsByTagName("article");

  // Loop through all articlest items, and hide those who don't match the search query
  for (i = 0; i < article.length; i++) {
    filterwords = article[i].className;
    if (filterwords.toUpperCase().indexOf(filter) > -1) {
      article[i].style.display = "";
    } else {
      article[i].style.display = "none";
    }
  }
}