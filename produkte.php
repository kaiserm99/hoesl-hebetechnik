<?php
  # Make sure the Errors gets displayed and not just refuse the connection
  error_reporting(E_ALL);
  ini_set("display_errors", 1);
?>

<!DOCTYPE html>
<html>
	<head>
    <?php  include 'includes/header.php'; ?>
    <link rel="stylesheet" type="text/css" href="styles/products.css">

		<title>Hösl Hebetechnik - Produkte</title>
	</head>

	<body>

    <?php  include 'includes/navbar.php'; ?>

    <div class="main">

      <div class="main-content">
        <div class="main-element">
          <a class="main-element-picture" href="scherenhubtische.php"> <img src="img/scherenhubtische.jpeg"> </a>
          <div class="main-element-text">
            <a class="main-element-title" href="scherenhubtische.php"> <h1>Scherenhubtische</h1> </a>
            <h3 class="main-element-description">Diese Art von Produkt gibt es sowohl <a href="scherenhubtische.php">stationär</a> als auch <a href="scherenhubtische.php?fahrbar=true">fahrbar</a>.</h3>
          </div>
        </div>

        <div class="main-element">
          <a class="main-element-picture" href="hebegeräte.php"> <img src="img/hebegeraete.jpeg"> </a>
          <div class="main-element-text">
            <a class="main-element-title" href="hebegeräte.php"> <h1>Hebegeräte</h1> </a>
            <h3 class="main-element-description">Diese Art von Produkt gibt es sowohl <a href="hebegeräte.php">stationär</a> als auch <a href="hebegeräte.php?fahrbar=true">fahrbar</a>.</h3>
          </div>
        </div>

        <div class="main-element">
          <a class="main-element-picture" href=""> <img src="img/tischunterteile.jpeg"> </a>
          <div class="main-element-text">
            <a class="main-element-title" href=""> <h1>Tischunterteile</h1> </a>
            <h3 class="main-element-description">Das ist eine Beschreibung!</h3>
          </div>
        </div>

        <div class="main-element">
          <a class="main-element-picture" href=""> <img src="img/werkstatteinrichtungen.jpeg"> </a>
          <div class="main-element-text">
            <a class="main-element-title" href=""> <h1>Werkstatteinrichtungen</h1> </a>
            <h3 class="main-element-description">Das ist eine Beschreibung!</h3>
          </div>
        </div>
        
        <div class="main-element">
          <a class="main-element-picture" href=""> <img src="img/kippgeraete.png"> </a>
          <div class="main-element-text">
            <a class="main-element-title" href=""> <h1>Hebe- und Neigegeräte</h1> </a>
            <h3 class="main-element-description">Das ist eine Beschreibung!</h3>
          </div>
        </div>

        <div class="main-element">
          <a class="main-element-picture" href=""> <img src="img/sondergeraete.jpeg"> </a>
          <div class="main-element-text">
            <a class="main-element-title" href=""> <h1>Sondergeräte</h1> </a>
            <h3 class="main-element-description">Das ist eine Beschreibung!</h3>
          </div>
        </div>

        <div class="main-element">
          <a class="main-element-picture" href=""> <img src="img/bootausruestungen.jpeg"> </a>
          <div class="main-element-text">
            <a class="main-element-title" href=""> <h1>Boot Ausrüstung und Zubehör</h1> </a>
            <h3 class="main-element-description">Das ist eine Beschreibung!</h3>
          </div>
        </div>

        <div class="main-element">
          <a class="main-element-picture" href=""> <img src="img/montagegeraete.jpeg"> </a>
          <div class="main-element-text">
            <a class="main-element-title" href=""> <h1>Montagegeräte</h1> </a>
            <h3 class="main-element-description">Das ist eine Beschreibung!</h3>
          </div>
        </div>

      </div>

      <?php  include 'includes/footer.php'; ?>

    </div>

	</body>

  <!-- Button for navbar purposes. Include in every page! -->
  <div id="up-arrow">
    <img src="icon/up-arrow.png" alt="">
  </div>
  
	<script src="scripts/navbar.js"></script>
  <script src="scripts/products.js"></script>
</html>