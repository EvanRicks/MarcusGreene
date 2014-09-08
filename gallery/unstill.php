<?php require_once( '../couch/cms.php' ); ?>
<!DOCTYPE html>
<html>
<head>
	<title>GALLERY - unstill life</title>
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<link rel="icon" href="../image/favicon.ico" type="image/x-icon">
	<script type="text/javascript" src="../js/jquery-1.11.1.min.js"></script>
	<script type="text/javascript" src="../js/script.js"></script>
	<link rel="stylesheet" type="text/css" href="../css/styles.css">
	<link href='http://fonts.googleapis.com/css?family=Open+Sans:300' rel='stylesheet' type='text/css'>
	<cms:repeatable name='page1' >
    	<cms:editable name='thumb' label='Thumbnail' desc='Upload .png of the image here' type='image' width='180' height='135' crop='1' quality='100' show_preview='1' hidden='1' />
		<cms:editable name='image' label='Image' desc='Upload .png of the image here' type='image' width='1800' height='900' quality='100' hidden='1' />
    	<cms:editable type='nicedit' label='Caption' name='caption' desc='Enter caption here' buttons='bold, italic, underline' hidden='1' />
	</cms:repeatable>
	<cms:repeatable name='page2' >
    	<cms:editable name='thumb' label='Thumbnail' desc='Upload .png of the image here' type='image' width='180' height='135' crop='1' quality='100' show_preview='1' hidden='1' />
		<cms:editable name='image' label='Image' desc='Upload .png of the image here' type='image' width='1800' height='900' quality='100' hidden='1' />
    	<cms:editable type='nicedit' label='Caption' name='caption' desc='Enter caption here' buttons='bold, italic, underline' hidden='1' />
	</cms:repeatable>
	<cms:repeatable name='page3' >
    	<cms:editable name='thumb' label='Thumbnail' desc='Upload .png of the image here' type='image' width='180' height='135' crop='1' quality='100' show_preview='1' hidden='1' />
		<cms:editable name='image' label='Image' desc='Upload .png of the image here' type='image' width='1800' height='900' quality='100' hidden='1' />
    	<cms:editable type='nicedit' label='Caption' name='caption' desc='Enter caption here' buttons='bold, italic, underline' hidden='1' />
	</cms:repeatable>
	<cms:repeatable name='page4' >
    	<cms:editable name='thumb' label='Thumbnail' desc='Upload .png of the image here' type='image' width='180' height='135' crop='1' quality='100' show_preview='1' hidden='1' />
		<cms:editable name='image' label='Image' desc='Upload .png of the image here' type='image' width='1800' height='900' quality='100' hidden='1' />
    	<cms:editable type='nicedit' label='Caption' name='caption' desc='Enter caption here' buttons='bold, italic, underline' hidden='1' />
	</cms:repeatable>
	<cms:repeatable name='page5' >
    	<cms:editable name='thumb' label='Thumbnail' desc='Upload .png of the image here' type='image' width='180' height='135' crop='1' quality='100' show_preview='1' hidden='1' />
		<cms:editable name='image' label='Image' desc='Upload .png of the image here' type='image' width='1800' height='900' quality='100' hidden='1' />
    	<cms:editable type='nicedit' label='Caption' name='caption' desc='Enter caption here' buttons='bold, italic, underline' hidden='1' />
	</cms:repeatable>
</head>
<body>
	<div id="header">
		<h1>Marcus Greene</h1>
		<ul class="navbar">
			<li><a href="../index.php">Home</a></li>
			<li><a href="basic.php" class="current">Gallery</a></li>
			<li><a href="../contact.php">Contact Me</a></li>
		</ul>
	</div>
	<hr>
	<div id="gallery_nav">
		<ul class="navbar" style="
    padding-bottom: 4px;
    padding-top: 20px;">
			<li><a href="basic.php">basic</a></li>
			<li><a href="figure.php">figure drawing</a></li>
			<li><a href="landscape.php">landscape</a></li>
			<li><a href="older.php">older work</a></li>
			<li><a href="unstill.php" class="current">unstill life</a></li>
		</ul>
	</div>
	<div class="carousel">
		<img class="previous" src="../image/arrow-left.png" alt="previous">
		<div class="dot">	
			<img src="../image/dot.png">
			<img src="../image/dot.png">
			<img src="../image/dot.png">
			<img src="../image/dot.png">
			<img src="../image/dot.png">
		</div>
		<img class="next" src="../image/arrow-right.png" alt="next">
	</div>
	<div id="wrapper">
		<ul id="gallery">
			<div class="page" id="pg1">
				<cms:show_repeatable 'page1' >
   					<li><img src="<cms:show thumb />" alt="<cms:show caption />"></li>
				</cms:show_repeatable>
			</div>
			<div class="page" id="pg2">
				<cms:show_repeatable 'page2' >
   					<li><img src="<cms:show thumb />" alt="<cms:show caption />"></li>
				</cms:show_repeatable>
			</div>
			<div class="page" id="pg3">
				<cms:show_repeatable 'page3' >
   					<li><img src="<cms:show thumb />" alt="<cms:show caption />"></li>
				</cms:show_repeatable>
			</div>
			<div class="page" id="pg4">
				<cms:show_repeatable 'page2' >
   					<li><img src="<cms:show thumb />" alt="<cms:show caption />"></li>
				</cms:show_repeatable>
			</div>
			<div class="page" id="pg5">
				<cms:show_repeatable 'page3' >
   					<li><img src="<cms:show thumb />" alt="<cms:show caption />"></li>
				</cms:show_repeatable>
			</div>	
		</ul>
	</div>
	<div class="carousel">
		<img class="previous" src="../image/arrow-left.png" alt="previous">
		<div class="dot">	
			<img src="../image/dot.png">
			<img src="../image/dot.png">
			<img src="../image/dot.png">
			<img src="../image/dot.png">
			<img src="../image/dot.png">
		</div>
		<img class="next" src="../image/arrow-right.png" alt="next">
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
	<img src="../image/arrow-left.png" alt="left" id="left">
	<img src="../image/arrow-right.png" alt="right" id="right">
	<div id="caption"></div>
</body>
</html>
<?php COUCH::invoke(); ?>