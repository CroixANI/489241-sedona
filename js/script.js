function showOrHideSearchForm() {
  var form = document.getElementById("searchForm");
  form.hidden = !form.hidden;
}

function setupPriceRangeSlider() {
  $( "#rangeSlider" ).slider({
    range: true,
    min: 0,
    max: 5000,
    values: [ 0, 4000 ],
    slide: function( event, ui ) {
      $( "#minPrice" ).html("ОТ " + ui.values[ 0 ]);
      $( "#maxPrice" ).html("ДО " + ui.values[ 1 ]);
    }
  });
  
  $( "#minPrice" ).html("ОТ " + $( "#rangeSlider" ).slider( "values", 0 ));
  $( "#maxPrice" ).html("ДО " + $( "#rangeSlider" ).slider( "values", 1 ));
}
