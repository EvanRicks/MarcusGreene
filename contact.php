<?php require_once( 'couch/cms.php' ); ?>
<html>
<head>
	<title>Marcus Greene - CONTACT ME</title>
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<link rel="icon" href="images/favicon.ico" type="images/x-icon">
	<link rel="stylesheet" type="text/css" href="css/styles.css">
	<link href='http://fonts.googleapis.com/css?family=Open+Sans:300' rel='stylesheet' type='text/css'>
</head>
<body>
	<div id="header">
		<h1>Marcus Greene</h1>
		<ul id="navbar">
			<li><a href="index.html">Home</a></li>
			<li><a href="gallery.html">Gallery</a></li>
			<li><a href="contact.html" id="current">Contact Me</a></li>
		</ul>
	</div>
	<hr>
	<div id="wrapper" style="width: 60%;">
		<cms:editable name="contact" label="Contact Info" type="richtext">
	</div>
	<footer>
		Site created by <a href="https://github.com/EvanRicks" target="_blank">Evan Ricks</a>
	</footer>
</body>
</html>
<?php COUCH::invoke(); ?>