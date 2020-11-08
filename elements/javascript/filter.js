// https://stackoverflow.com/a/45146800


var getFilter = function(category) {
  var filter = $("#filters ." + category + ":checked").map(function() {
    return '[data-filter*="' + this.id + '"]';
  }).get().join(",");
  filter = (filter.length > 0) ? filter : "*";
  return filter;
}

$("#filters :checkbox").click(function() {
  var all = $("article");
  var tgts = all.filter(getFilter("spurweite")).filter(getFilter("fahrzeuge")).filter(getFilter("bahn"));
  all.not(tgts).hide();
  tgts.show();
});