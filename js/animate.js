(function( $ ) {
	
$(window).on('load resize', function () {
    
    var $block = $('.wrapper .imgBlock');
    $block.removeClass('firstBlock lastBlock');
    $block.first().addClass('firstElement');
    $block.last().addClass('lastElement');
                
    $block.each(function () {
                      
        var currentOffset = $(this).offset().top;
        if($(this).next().length) {
            var nextOffset = $(this).next().offset().top;
        }
        if($(this).prev().length) {
            var prevOffset = $(this).prev().offset().top;
        }
             
        if (currentOffset < nextOffset) {
            $(this).addClass('lastElement');
        }
        if (currentOffset > prevOffset) {
            $(this).addClass('firstElement');
        }  
         
    }); 
    
    function collapse() {
        $('.wrapper .expandContainer').remove();
    }
    
    function pulldata(el) {
        var dataTitle = el.data('title');
        var dataDesc = el.data('desc');
        var dataImg = el.find('img').attr('src');
        var dataInfo =  '<div class="expTab">' +
                        '<div class="expFigure"><img src="' + dataImg + '" /></div>' +
                        '<div class="expContent"><h3 class="expTitle">' + dataTitle + '</h3><div class="expDesc">' + dataDesc + '</div></div>' +
                        '</div>';
        return dataInfo;
    }
    
    $($block).click(function(){
        collapse();
        if ($(this).hasClass('lastElement')) {
            $(this).after('<div class="expandContainer"><div>' + pulldata($(this)) + '</div></div>');
        } else {
            //$(this).nextAll('.lastElement').first().after('<div class="expandContainer">' + $(this).data('title') + '</div>');
            $(this).nextAll('.lastElement').first().after('<div class="expandContainer">' + pulldata($(this)) + '</div>');
        } 
    });                         
                                
    
});  


	
})( jQuery );
