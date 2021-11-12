<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
	<title>Nur zum Testen!</title>
</head>
<body>
<p>Dies ist ein Test Paragraph!</p>

<button id="button">Guten Tag</button>

<script type="application/javascript">
	$(document).ready(function () {
		
	});

	$("#button").click(function () {
		$("p").slideToggle("slow", () => {

		});
	});
</script>
<br>
<?php echo 'Die aktuelle PHP Version ist ' . phpversion(); ?>
<br>
</body>
</html>
