<!DOCTYPE HTML>
<html>
<head>
	<meta http-equiv="content-type" content="text/html" />
	<meta name="author" content="annrra" />

	<title>image grid</title>
    <link href="https://fonts.googleapis.com/css?family=Open+Sans" rel="stylesheet">
    <link rel="stylesheet" type="text/css" href="css/main.css" />
</head>

<body>
<div class="wrapMe">
<div class="wrapGrid">
    
    <div class="imgBlock" data-title="Image 1" data-desc="Lorem ipsum dolor sit amet.">
        <span><img class="imgGridItem" src="http://photocomma.com/wp-content/uploads/pavilion-500x333.jpg" /></span>
    </div>
    <div class="imgBlock" data-title="Image 2" data-desc="Lorem ipsum dolor sit amet.">
        <span><img class="imgGridItem" src="http://photocomma.com/wp-content/uploads/tv-500x333.jpg" /></span>
    </div>
    <div class="imgBlock" data-title="Image 3" data-desc="Lorem ipsum dolor sit amet.">
        <span><img class="imgGridItem" src="http://photocomma.com/wp-content/uploads/run-500x333.jpg" /></span>
    </div>
    <div class="imgBlock" data-title="Image 4" data-desc="Lorem ipsum dolor sit amet.">
        <span><img class="imgGridItem" src="http://photocomma.com/wp-content/uploads/crossroad-500x333.jpg" /></span>
    </div>
    <div class="imgBlock" data-title="Image 5" data-desc="Lorem ipsum dolor sit amet.">
        <span><img class="imgGridItem" src="http://photocomma.com/wp-content/uploads/hands1-500x333.jpg" /></span>
    </div>
    <div class="imgBlock" data-title="Image 6" data-desc="Lorem ipsum dolor sit amet.">
        <span><img class="imgGridItem" src="http://photocomma.com/wp-content/uploads/street-lamp-500x333.jpg" /></span>
    </div>
    <div class="imgBlock" data-title="Image 7" data-desc="Lorem ipsum dolor sit amet.">
        <span><img class="imgGridItem" src="http://photocomma.com/wp-content/uploads/magpie-500x333.jpg" /></span>
    </div>
    <div class="imgBlock" data-title="Image 8" data-desc="Lorem ipsum dolor sit amet.">
        <span><img class="imgGridItem" src="http://photocomma.com/wp-content/uploads/ap12-500x333.jpg" /></span>
    </div>
    <div class="imgBlock" data-title="Image 9" data-desc="Lorem ipsum dolor sit amet.">
        <span><img class="imgGridItem" src="http://photocomma.com/wp-content/uploads/slaveino-petkovo-500x333.jpg" /></span>
    </div>
    <div class="imgBlock" data-title="Image 10" data-desc="Lorem ipsum dolor sit amet.">
        <span><img class="imgGridItem" src="http://photocomma.com/wp-content/uploads/tilt1-500x333.jpg" /></span>
    </div>
    
</div>
</div>

<script src="http://ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js"></script>
<script src="js/jquery.expandgrid.js"></script>
<!-- <script src="js/animate.js"></script> -->
<script type="text/javascript">
    $(".wrapGrid").expandGrid({
      animationSpeedOpen: 300,
      animationSpeedClose: 200,
      imageGridMaxHeight: 200
  });
</script>
</body>
</html>