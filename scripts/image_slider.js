
var imageCounter = 0;
const imageMaxCount = 5;

$(document).ready(function () {

  colorButton(imageCounter);

  $(".image-container").hover(function () {
    $(".controlButtons").addClass("active");
  }, function () {
    $(".controlButtons").removeClass("active");
  });

  $("#nextButton").click(function () {
    switchRight();
  });

  $("#prevButton").click(function () {
    switchLeft();
  });
  

  var allButtons = $(".button-slide button");

  $.each(allButtons, function (index, div) {
    $(this).click(function () {
      colorButton(index);
      switchExact(index);
    });
  });

});




function switchRight() {

  if (imageCounter == imageMaxCount - 1) {
    imageCounter = 0;
  } else {
    imageCounter++;
  }

  colorButton(imageCounter);

  var imageWidth = $(".slides img")[imageCounter].width;

  $(".slides").css("transform", `translateX(${-imageWidth * imageCounter}px)`);
}


function switchLeft() {

  

  if (imageCounter == 0) {
    imageCounter = imageMaxCount - 1;
  } else {
    imageCounter--;
  }

  colorButton(imageCounter);

  var imageWidth = $(".slides img")[imageCounter].width;

  $(".slides").css("transform", `translateX(${-imageWidth * imageCounter}px)`);
}

function switchExact(imageNumber) {
  var imageWidth = $(".slides img")[imageCounter].width;

  $(".slides").css("transform", `translateX(${-imageWidth * imageNumber}px)`);
}


function colorButton(buttonNumber) {

  var allButtons = $(".button-slide button");

  $.each(allButtons, function (index, div) {
    if (index == buttonNumber) {
      $(this).css("background", "white");
    } else {
      $(this).css("background", "");
    }

  });
}


$(window).on("resize", function(event){
  var imageWidth = $(".slides img")[imageCounter].width;

  $(".slides").css("transform", `translateX(${-imageWidth * imageCounter}px)`);
});



var imageContainer = document.querySelector(".image-container");

// Implement the Swiping mechanism
imageContainer.addEventListener('touchstart', handleTouchStart, { passive: true} );
imageContainer.addEventListener('touchmove', handleTouchMove, { passive: true} );

var xDown = null;
var yDown = null;

function handleTouchStart(evt) {
    const firstTouch = evt.touches[0];
    xDown = firstTouch.clientX;
    yDown = firstTouch.clientY;
};

function handleTouchMove(evt) {
    if ( ! xDown || ! yDown ) {
        return;
    }

    var xUp = evt.touches[0].clientX;
    var yUp = evt.touches[0].clientY;

    var xDiff = xDown - xUp;
    var yDiff = yDown - yUp;

    if ( Math.abs( xDiff ) > Math.abs( yDiff ) ) {
        if ( xDiff > 0 ) {
          switchRight();
        } else {
          switchLeft();
        }
    } else {
      if ( yDiff > 0 ) {
        console.log("Up");
      } else {
        console.log("Down");
      }
    }
    /* reset values */
    xDown = null;
    yDown = null;
};



/*

// Slect the needed parts from the slider
const imageContainer = document.querySelector(".image-container");
const imageSlide = document.querySelector(".slide");
const allImages = document.querySelectorAll(".slide img");

// Select all the Buttons
const prevButton = document.querySelector(".prevButton");
const nextButton = document.querySelector(".nextButton");

// Select all the displayed Buttons
const displayedButton = document.querySelectorAll(".button-slide button");
// Select all text which are in front of pictures
const imageText = document.querySelectorAll(".img-text");



// Implement the needed variables
let imageCounter = 1;
const imageMaxCount = 5;
let imageSize = allImages[0].clientWidth;
// Make sure the first picture gets displayed at the start and not the duplicate one
imageSlide.style.transform = `translateX(${-imageSize * imageCounter}px)`;




// Eventlistener
nextButton.addEventListener('click', () => {
  switchRight();
});

prevButton.addEventListener('click', () => {
  switchLeft();
});

// Functions to switch the current picutre in the intended way
function switchRight() {
  if (imageCounter >= (imageMaxCount + 1)) return;

  colorNextButton(imageCounter);
  imageSlide.style.transition = "transform 0.5s ease-in-out";
  imageCounter++;
  imageSlide.style.transform = `translateX(${-imageSize * imageCounter}px)`;

  // Make sure the opacity of all Text are set back to 0
  imageText.forEach((text, i) => {
    text.style.animation = "";
  });

  imageText[(imageCounter - 2) % imageMaxCount].style.animation = "text-out-right 1s ease-in";
  imageText[(imageCounter - 1) % imageMaxCount].style.animation = "text-in-right 1s ease-in forwards 0.5s";
}

function switchLeft() {
  if (imageCounter <= 0) return;

  colorPrevButton(imageCounter);
  imageSlide.style.transition = "transform 0.5s ease-in-out";
  imageCounter--;
  imageSlide.style.transform = `translateX(${-imageSize * imageCounter}px)`;

  // Make sure the opacity of all Text are set back to 0
  imageText.forEach((text, i) => {
    text.style.animation = "";
  });

  // Make sure to move the text in the right direction
  if (imageCounter == 0) {
    imageText[imageMaxCount - 1].style.animation = "text-in-left 1s ease-in forwards 0.5s";
    imageText[(imageCounter) % imageMaxCount].style.animation = "text-out-left 1s ease-in";
  } else {
    imageText[(imageCounter - 1) % imageMaxCount].style.animation = "text-in-left 1s ease-in forwards 0.5s";
    imageText[(imageCounter) % imageMaxCount].style.animation = "text-out-left 1s ease-in";
  }
}

// Add the transition, if the loop is over and we have to jump back to the start btw end
imageSlide.addEventListener("transitionend", () => {
  if (imageCounter == 0)
  {
    imageSlide.style.transition = "";
    imageCounter = allImages.length - 2;
    imageSlide.style.transform = `translateX(${-imageSize * imageCounter}px)`;
  }
  else if (imageCounter == (imageMaxCount + 1)) {
    imageSlide.style.transition = "";
    imageCounter = 1;
    imageSlide.style.transform = `translateX(${-imageSize * imageCounter}px)`;
  }
});


function colorPrevButton(index) {
  displayedButton.forEach((button, i) => {
    button.style.backgroundColor = "transparent";
    if (index - 2 === i)
    {
      button.style.backgroundColor = "#0001a1";
    }
    else if (index === 1 && i === displayedButton.length - 1)
    {
      button.style.backgroundColor = "#0001a1";
    }
  });
}


function colorNextButton(index) {
  displayedButton.forEach((button, i) => {
    button.style.backgroundColor = "transparent";
    if (index === i)
    {
      button.style.backgroundColor = "#0001a1";
    }
    else if (index === 5 && i === 0)
    {
      button.style.backgroundColor = "#0001a1";
    }
  });
}


// Loop trough every Button and check if it gets pressed
displayedButton.forEach((button, i) => {
  button.addEventListener('click', () => {
    displayedButton.forEach((b, i) => {
      b.style.backgroundColor = "transparent";
    });
    // Make sure there is a transition effect when pressing the button
    imageSlide.style.transition = "transform 0.5s ease-in-out";
    button.style.backgroundColor = "#0001a1";
    // Make sure the right text gets displayed
    imageText[imageCounter - 1].style.animation = "text-out 0.5s ease-out";
    imageText[(i) % imageMaxCount].style.animation = "text-in 1s ease-in forwards 0.5s";
    // Count up the imagecounter and translate the images
    imageCounter = i + 1;
    imageSlide.style.transform = `translateX(${-imageSize * imageCounter}px)`;
  });
});


// Make sure the Buttons are vissible when the mouse hovers over it
imageContainer.addEventListener('mouseover', () => {
  prevButton.classList.add("hovering");
  nextButton.classList.add("hovering");
});

imageContainer.addEventListener('mouseout', () => {
  prevButton.classList.remove("hovering");
  nextButton.classList.remove("hovering");
});


// Implement the Swiping mechanism
imageContainer.addEventListener('touchstart', handleTouchStart, { passive: true} );
imageContainer.addEventListener('touchmove', handleTouchMove, { passive: true} );

var xDown = null;
var yDown = null;

function handleTouchStart(evt) {
    const firstTouch = evt.touches[0];
    xDown = firstTouch.clientX;
    yDown = firstTouch.clientY;
};

function handleTouchMove(evt) {
    if ( ! xDown || ! yDown ) {
        return;
    }

    var xUp = evt.touches[0].clientX;
    var yUp = evt.touches[0].clientY;

    var xDiff = xDown - xUp;
    var yDiff = yDown - yUp;

    if ( Math.abs( xDiff ) > Math.abs( yDiff ) ) {
        if ( xDiff > 0 ) {
          switchRight();
        } else {
          switchLeft();
        }
    } else {
      if ( yDiff > 0 ) {
        console.log("Up");
      } else {
        console.log("Down");
      }
    }
    xDown = null;
    yDown = null;
};



// Make sure when the Window is resized than the current Frame gets updated and stays in the right place
function updateImageSize() {
  imageSize = allImages[0].clientWidth;
  imageSlide.style.transform = `translateX(${-imageSize * imageCounter}px)`;
}

window.onresize = updateImageSize;

/*
setInterval(() => {
  imageSlide.style.transition = "transform 1.0s ease-in-out";
  imageCounter++;
  imageSlide.style.transform = `translateX(${-imageSize * imageCounter}px)`;
}, 10000);


let a = true;
setInterval(() => {
  if (a) {
    imageSize = allImages[0].clientWidth;
    imageSlide.style.transform = `translateX(${-imageSize * imageCounter}px)`;
    a = false;
  }
}, 100);

*/