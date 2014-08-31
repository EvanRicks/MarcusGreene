<?php require_once( 'couch/cms.php' ); ?>
<!DOCTYPE html>
<html>
<head>
	<title>Marcus Greene - GALLERY</title>
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<link rel="icon" href="images/favicon.ico" type="images/x-icon">
	<script type="text/javascript" src="js/jquery-1.11.1.min.js"></script>
	<script type="text/javascript" src="js/script.js"></script>
	<link rel="stylesheet" type="text/css" href="css/styles.css">
	<link href='http://fonts.googleapis.com/css?family=Open+Sans:300' rel='stylesheet' type='text/css'>
</head>
<body>
	<div id="header">
		<h1>Marcus Greene</h1>
		<ul id="navbar">
			<li><a href="index.php">Home</a></li>
			<li><a href="gallery.php" id="current">Gallery</a></li>
			<li><a href="contact.php">Contact Me</a></li>
		</ul>
	</div>
	<hr>
	<div class="carousel">
		<img class="previous" src="images/arrow-left.png" alt="previous">
		<div class="dot">	
			<img src="images/dot.png">
			<img src="images/dot.png">
			<img src="images/dot.png">
		</div>
		<img class="next" src="images/arrow-right.png" alt="next">
	</div>
	<div id="wrapper">
		<ul id="gallery">
			<div class="page" id="pg1">
				<li><img src="images/thumbs/awakening.png" alt="awakening"></li>
				<li><img src="images/thumbs/beyond_the_wave.png" alt="beyond the wave"></li>
				<li><img src="images/thumbs/embryonic_journey.png" alt="embryonic journey"></li>
				<li><img src="images/thumbs/finisterre.png" alt="finisterre"></li>
				<li><img src="images/thumbs/gods_navel.png" alt="god's navel"></li>
				<li><img src="images/thumbs/the_call.png" alt="the call"></li>
				<li><img src="images/thumbs/the_path.png" alt="the path"></li>
				<li><img src="images/thumbs/wound_in_wave.png" alt="wound in wave"></li>
				<li><img src="images/thumbs/oneil_pass.png" alt="O'Neil Pass"></li>
				<li><img src="images/thumbs/night_sea_journey.png" alt="night sea journey"></li>
				<li><img src="images/thumbs/journey_1.png" alt="journey 1"></li>
				<li><img src="images/thumbs/wound_in_wave_triptych.png" alt="wound in wave (triptych)"></li>
				<li><img src="images/thumbs/between_mountains_and_sea.png" alt="between mountains and sea"></li>
				<li><img src="images/thumbs/the_philosophy_of_air.png" alt="the philosophy of air"></li>
				<li><img src="images/thumbs/the_architecture_of_fire.png" alt="the architecture of fire"></li>
				<li><img src="images/thumbs/the_music_in_water.png" alt="the music in water"></li>
				<li><img src="images/thumbs/the_evolution_of_soil.png" alt="the evolution of soil"></li>
				<li><img src="images/thumbs/in_the_garden.png" alt="in the garden"></li>
				<li><img src="images/thumbs/higgs_boson.png" alt="higgs-boson"></li>
				<li><img src="images/thumbs/tunguska_1908.png" alt="Tunguska 1908"></li>
				<li><img src="images/thumbs/un_chien_andalou.png" alt="un chien andalou"></li>
				<li><img src="images/thumbs/martyrs_dna.png" alt="martyrs' DNA"></li>
				<li><img src="images/thumbs/naiads.png" alt="naiads"></li>
				<!-- <li><img src="images/thumbs/beyond_the_purple_crayon.png" alt="beyond the purple crayon"></li>
				<li><img src="images/thumbs/worlds_collide.png" alt="worlds collide"></li>
				<li><img src="images/thumbs/cyclone_nightmare.png" alt="cyclone nightmare"></li> -->
				<li><img src="images/thumbs/time_machine_2.png" alt="time machine 2"></li>
				<!-- <li><img src="images/thumbs/primordial_conception.png" alt="primordial conception"></li> -->
			</div>
			<div class="page" id="pg2">
				<li><img src="images/thumbs/test_thumb.png" alt="2_1"></li>
				<li><img src="images/thumbs/test_thumb.png" alt="2_2"></li>
				<li><img src="images/thumbs/test_thumb.png" alt="2_3"></li>
				<li><img src="images/thumbs/test_thumb.png" alt="2_4"></li>
				<li><img src="images/thumbs/test_thumb.png" alt="2_5"></li>
				<li><img src="images/thumbs/test_thumb.png" alt="2_6"></li>
				<li><img src="images/thumbs/test_thumb.png" alt="2_7"></li>
				<li><img src="images/thumbs/test_thumb.png" alt="2_8"></li>
				<li><img src="images/thumbs/test_thumb.png" alt="2_9"></li>
				<li><img src="images/thumbs/test_thumb.png" alt="2_10"></li>
				<li><img src="images/thumbs/test_thumb.png" alt="2_11"></li>
				<li><img src="images/thumbs/test_thumb.png" alt="2_12"></li>
				<li><img src="images/thumbs/test_thumb.png" alt="2_13"></li>
				<li><img src="images/thumbs/test_thumb.png" alt="2_14"></li>
				<li><img src="images/thumbs/test_thumb.png" alt="2_15"></li>
				<li><img src="images/thumbs/test_thumb.png" alt="2_16"></li>
				<li><img src="images/thumbs/test_thumb.png" alt="2_17"></li>
				<li><img src="images/thumbs/test_thumb.png" alt="2_18"></li>
				<li><img src="images/thumbs/test_thumb.png" alt="2_19"></li>
				<li><img src="images/thumbs/test_thumb.png" alt="2_20"></li>
				<li><img src="images/thumbs/test_thumb.png" alt="2_21"></li>
				<li><img src="images/thumbs/test_thumb.png" alt="2_22"></li>
				<li><img src="images/thumbs/test_thumb.png" alt="2_23"></li>
				<li><img src="images/thumbs/test_thumb.png" alt="2_24"></li>
			</div>
			<div class="page" id="pg3">
				<li><img src="images/thumbs/test_thumb.png" alt="3_1"></li>
				<li><img src="images/thumbs/test_thumb.png" alt="3_2"></li>
				<li><img src="images/thumbs/test_thumb.png" alt="3_3"></li>
				<li><img src="images/thumbs/test_thumb.png" alt="3_4"></li>
				<li><img src="images/thumbs/test_thumb.png" alt="3_5"></li>
				<li><img src="images/thumbs/test_thumb.png" alt="3_6"></li>
				<li><img src="images/thumbs/test_thumb.png" alt="3_7"></li>
				<li><img src="images/thumbs/test_thumb.png" alt="3_8"></li>
				<li><img src="images/thumbs/test_thumb.png" alt="3_9"></li>
				<li><img src="images/thumbs/test_thumb.png" alt="3_10"></li>
				<li><img src="images/thumbs/test_thumb.png" alt="3_11"></li>
				<li><img src="images/thumbs/test_thumb.png" alt="3_12"></li>
				<li><img src="images/thumbs/test_thumb.png" alt="3_13"></li>
				<li><img src="images/thumbs/test_thumb.png" alt="3_14"></li>
				<li><img src="images/thumbs/test_thumb.png" alt="3_15"></li>
				<li><img src="images/thumbs/test_thumb.png" alt="3_16"></li>
				<li><img src="images/thumbs/test_thumb.png" alt="3_17"></li>
				<li><img src="images/thumbs/test_thumb.png" alt="3_18"></li>
				<li><img src="images/thumbs/test_thumb.png" alt="3_19"></li>
				<li><img src="images/thumbs/test_thumb.png" alt="3_20"></li>
				<li><img src="images/thumbs/test_thumb.png" alt="3_21"></li>
				<li><img src="images/thumbs/test_thumb.png" alt="3_22"></li>
				<li><img src="images/thumbs/test_thumb.png" alt="3_23"></li>
				<li><img src="images/thumbs/test_thumb.png" alt="3_24"></li>
			</div>	
		</ul>
	</div>
	<div class="carousel">
		<img class="previous" src="images/arrow-left.png" alt="previous">
		<div class="dot">	
			<img src="images/dot.png">
			<img src="images/dot.png">
			<img src="images/dot.png">
		</div>
		<img class="next" src="images/arrow-right.png" alt="next">
	</div>
	<footer>
		Site created by <a href="https://github.com/EvanRicks" target="_blank">Evan Ricks</a>
		<div id="copyright">
			Powered by <a href="http://www.couchcms.com/" title="CouchCMS - Simple Open-Source Content Management">CouchCMS</a>
		</div>
	</footer>
	<div id="overlay"></div>
	<div id="frameContainerFixed">
		<div id="frameContainer">
			<div id="frame"></div>
		</div>
	</div>
	<img src="images/arrow-left.png" alt="left" id="left">
	<img src="images/arrow-right.png" alt="right" id="right">
	<div id="caption"></div>
</body>
</html>
<?php COUCH::invoke(); ?>