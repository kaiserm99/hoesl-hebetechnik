// This script handles the functionality of the navbar

var searchWidth = "100%";
var searchCollapsedWidth = "2.8em";

var searchRadius = "0.4em";
var searchCollapsedRadius = "3em";

var searchTransformation = "translateX(0)";

var exclusive = false;


$(document).ready(function () {

  // Function for handling the open and closing of the collapsed navbar
  $(".menu-btn").click(function() {
    $(this).toggleClass('open');
    $(".nav-links").toggleClass('active');
  });

  // Function for handling the functionality of the up arrow
  $("#up-arrow").click(function() {
    $("html, body").animate({ scrollTop: "0" });
  });


  $("#nav-search-form").keyup( function() {
    var value = $( this ).val();

    if (value.length > 0) {
      $("#search-stop").css( { "transform": "translateX(0)" } );
    } else {
      $("#search-stop").css( { "transform": "translateX(10em)" } );
    }
  });

  // Handle if the user is focusing the form
  $("#nav-search-form").focus( function() {
    expandSearch();
    exclusive = true;
  });

  $("#nav-search-form").focusout( function() {
    var value = $( this ).val();

    if (value.length == 0) {
      collapseSearch();
      exclusive = false;
    }
  });


  // Handle both hover objects
  $("#search-icon").hover( function() {
    expandSearch()
  }, function () {
    if (!exclusive) {
      collapseSearch()
    }
  });

  $("#nav-search-form").hover( function() {
    expandSearch()
  }, function () {
    if (!exclusive) {
      collapseSearch()
    }
  });
  
  
  $("#search-stop").click( function() {
    $("#nav-search-form").val("");

    $( this ).css( { "transform": "translateX(10em)" } );
    exclusive = false;
  });
});


// Sticky navbar when scrolling the page
$(document).scroll( function() { 

  var scroll = $(document).scrollTop();

  if (scroll > 50) {
    $(".navbar").addClass("sticky");
    $("#nav-contact").addClass("sticky");
    $("#up-arrow img").addClass("active");
  } else {
    $(".navbar").removeClass("sticky");
    $("#nav-contact").removeClass("sticky");
    $("#up-arrow img").removeClass("active");
  }

  /*
  var top_of_element = $("footer").offset().top;
  var bottom_of_element = $("footer").offset().top + $("footer").outerHeight();
  var bottom_of_screen = $(window).scrollTop() + $(window).innerHeight();
  var top_of_screen = $(window).scrollTop();

  if ((bottom_of_screen > top_of_element + 50) && (top_of_screen < bottom_of_element)) {
    $("#up-arrow").css("bottom", "calc(var(--footer-height) + 1em)");
  } else {
    $("#up-arrow").css("bottom", "");
  }
  */
});


function expandSearch() {
  $("#search-icon").css({ "opacity": "0", "z-index": "-1" });
  $("#nav-search-form").css({ "width": searchWidth, "border-radius": searchRadius });
  $(".nav-links").css("transform", "translateX(0)");
}



function collapseSearch() {
  $("#search-icon").css({ "opacity": "1", "z-index": "1"});
  $("#nav-search-form").css({ "width": searchCollapsedWidth, "border-radius": searchCollapsedRadius });
  $(".nav-links").css("transform", searchTransformation);
}




// Apply the certain size for the search bar when the window gets resized
$(window).on("resize", function(event){
  
  changeSize();

});


function changeSize() {

  var width = $(window).width();
  

  if (width > 1600) {
    searchCollapsedWidth = "2.8em";
    searchTransformation = "translateX(0)";
  }

  else if (1600 >= width && width > 1300) {
    searchCollapsedWidth = "2.8em";
    searchTransformation = "translateX(7%)";
  }

  else if (1300 >= width && width > 1100) {
    searchCollapsedWidth = "2.5em";
    searchTransformation = "translateX(18%)";
  }

  else if (1100 >= width && width > 1000) {
    searchCollapsedWidth = "2.2em";
    searchTransformation = "translateX(18%)";
  }
  
  $("#nav-search-form").css("width", searchCollapsedWidth);
  $(".nav-links").css("transform", searchTransformation);
}



// To make sure to properly assemble the right size at the start
changeSize()