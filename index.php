<?php
  # Make sure the Errors gets displayed and not just refuse the connection
  error_reporting(E_ALL);
  ini_set("display_errors", 1);
?>

<!DOCTYPE html>
<html>
	<head>
    <?php  include 'includes/header.php'; ?>

    <!-- Include all Stylesheets -->
    <link rel="stylesheet" type="text/css" href="styles/image_slider.css">
    <link rel="stylesheet" type="text/css" href="styles/main.css">

		<title>Hösl Hebetechnik - Home</title>
	</head>

	<body>

  <?php  include 'includes/navbar.php'; ?>

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

  <?php  include 'includes/footer.php'; ?>

	</body>
	<script src="scripts/navbar.js"></script>
  <script src="scripts/image_slider.js"></script>
</html>
