<?php require_once( 'couch/cms.php' ); ?>
<!DOCTYPE html>
<html>
<head>
	<title>Marcus Greene - HOME</title>
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<link rel="icon" href="images/favicon.ico" type="images/x-icon">
	<link rel="stylesheet" type="text/css" href="css/styles.css">
	<link href='http://fonts.googleapis.com/css?family=Open+Sans:300' rel='stylesheet' type='text/css'>
</head>
<body>
	<div id="header">
		<h1>Marcus Greene</h1>
		<ul id="navbar">
			<li><a href="index.php" id="current">Home</a></li>
			<li><a href="gallery.php">Gallery</a></li>
			<li><a href="contact.php">Contact Me</a></li>
		</ul>
	</div>
	<hr>
	<div id="wrapperClear">
		<div id="col1">
			<img src="images/about.png" alt="sixth day">
		</div>
		<div id="col2">
			<h2>About</h2>
			<cms:editable name="about" label="About" type="richtext">
				<p>
					&nbsp;&nbsp;&nbsp;&nbsp;Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
					tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
					quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
					consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
					cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
					proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
				</p>
				<p>
					&nbsp;&nbsp;&nbsp;&nbsp;Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
					tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
					quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
					consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
					cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
					proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
				</p>
			</cms:editable>
		</div>
	</div>
	<footer>
		Site created by <a href="https://github.com/EvanRicks" target="_blank">Evan Ricks</a>
		<div id="copyright">
			Powered by <a href="http://www.couchcms.com/" title="CouchCMS - Simple Open-Source Content Management">CouchCMS</a>
		</div>
	</footer>
</body>
</html>
<?php COUCH::invoke(); ?>