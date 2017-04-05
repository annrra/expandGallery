# expandGallery
A responsive gallery grid layout with drop-down expandable content

## How to use it
1 Requires jQuery  
2 Include js/jquery.expandgrid.js
3 Include CSS - css/main.css  
4 Create compatible markup  
5 Initialize at the bottom of the page  


### Example markup
    <div class="wrapGrid">
		<div class="imgBlock" data-title="Image Title" data-desc="Description text ...">
			<span><img class="imgGridItem" src="..." /></span>
		</div>
	</div
	
	
### Call the plugin on 'wrapGrid' element.

	$(".wrapGrid").expandGrid();

	// custom settings
	$(".wrapGrid").expandGrid({
		animationSpeedOpen: 300, // Set animation slideDown speed 
		animationSpeedClose: 200, // Set animation slideUp speed
		imageGridMaxHeight: 200 // Set max-height for thumbnail images
	});