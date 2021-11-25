<?php
  # Make sure the Errors gets displayed and not just refuse the connection
  error_reporting(E_ALL);
  ini_set("display_errors", 1);
?>

<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<meta name="viewport" content="width=device-width, initial-scale=1">
		
		<!-- Include all JQuery from the google API website -->
		<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>

		<!-- Include all Stylesheets -->
    <link rel="stylesheet" type="text/css" href="styles/navbar.css">
    <link rel="stylesheet" type="text/css" href="styles/image_slider.css">
    <link rel="stylesheet" type="text/css" href="styles/main.css">

		<!-- TODO: Insert google analytics link for profiling -->

		<!-- Set the Image and the Title of the  -->
		<link rel="icon" type="image/png" href="img/logo_small.png">
		<title>Hösl Hebetechnik</title>
	</head>

	<body>

    <!-- Contains the whole Navbar of the Website -->
    <header class="">

      <nav class="navbar">
        <a id="logo" href="index.php">
          <img src="img/logo.png" alt="This is the official logo of the Hösl Hebetechnik e.K.">
        </a>
        <ul class="nav-links">
          <li> <a class="nav-link" href="index.php">Home</a> </li>
          <li> <a class="nav-link" href="produkte.php">Produkte</a> </li>
          <li> <a class="nav-link" href="about.php">About</a> </li>
          <li> <a class="nav-link" href="contact.php"> <div id="nav-contact">Kontakt</div> </a> </li>
        </ul>
        <div class="nav-search"> 
          <img id="search-icon" src="icon/search.png">
          <input id="nav-search-form" type="text" name="search" id="search"> 
          <img id="search-stop" src="icon/x-markierung.png">
        </div>

        <div class="menu-btn">
          <div class="menu-btn__burger"></div>
        </div>
      </nav>
  
    </header>

    <div class="main-content">

      <h1>Das sind wir</h1>

      <div class="image-container">
        <!-- Buttons for getting around. TODO: implement swiping -->
        <button class="controlButtons" id="prevButton">Prev</button>
        <button class="controlButtons" id="nextButton">Next</button>
        <!-- The actual Image container -->
        <div class="slides">
          <img src="img/bg1.jpg" alt="">
          <img src="img/bg2.jpg" alt="">
          <img src="img/bg3.jpg" alt="">
          <img src="img/bg4.jpg" alt="">
          <img src="img/bg5.jpg" alt="">
        </div>
        
        <!-- All Text which is in front of all the pictures -->
        <div class="img-text" id="text-image-1">
          <h1>Innovation durch Technik 1</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        </div>
        <div class="img-text" id="text-image-2">
          <h1>Innovation durch Technik 2</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        </div>
        <div class="img-text" id="text-image-3">
          <h1>Innovation durch Technik 3</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        </div>
        <div class="img-text" id="text-image-4">
          <h1>Innovation durch Technik 4</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        </div>
        <div class="img-text" id="text-image-5">
          <h1>Innovation durch Technik 5</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        </div>


        <div class="button-slide">
          <button id="button1"></button>
          <button id="button2"></button>
          <button id="button3"></button>
          <button id="button4"></button>
          <button id="button5"></button>
        </div>
      </div>


      <h1>Beliebte Produkte</h1>
   </div>



  <div id="up-arrow">
    <img src="icon/up-arrow.png" alt="">
  </div>


	</body>
	<script src="scripts/navbar.js"></script>
  <script src="scripts/image_slider.js"></script>
</html>
