

$(document).ready(function () {
  
  var sliderElements = $(".main-slider-element");
  var mainProducts = $(".main-product-site")

  // In order to get the right site when the user have clicked on a special link
  var status = getUrlParameter("fahrbar");
  
  if (status != "true") {
    slideStationaer(mainProducts, sliderElements);
  } else {
    slideFahrbar(mainProducts, sliderElements);
  }

  $(sliderElements[0]).click(function () {
    slideStationaer(mainProducts, sliderElements);    
  });


  $(sliderElements[1]).click(function () {
    slideFahrbar(mainProducts, sliderElements);
  });

});

function slideFahrbar(mainProducts, sliderElements) {
  $(mainProducts[0]).css({"display": "none"});
  $(mainProducts[1]).css({"display": "flex"});

  $(sliderElements[0]).css("background", "");
  $(sliderElements[1]).css("background", "var(--navbar-color)");
}

function slideStationaer(mainProducts, sliderElements) {
  $(mainProducts[0]).css({"display": "flex"});
  $(mainProducts[1]).css({"display": "none"});

  $(sliderElements[0]).css("background", "var(--navbar-color)");
  $(sliderElements[1]).css("background", "");
}


var getUrlParameter = function getUrlParameter(sParam) {
  var sPageURL = window.location.search.substring(1),
      sURLVariables = sPageURL.split('&'),
      sParameterName,
      i;

  for (i = 0; i < sURLVariables.length; i++) {
      sParameterName = sURLVariables[i].split('=');

      if (sParameterName[0] === sParam) {
          return typeof sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
      }
  }
  return false;
};