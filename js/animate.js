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
        $('.wrapper .expandContainer').slideUp(200, function () {
            $(this).remove();
        });
    }
    
    //prepare the data shown in the expandable area
    function pulldata(el) {
        var dataTitle = el.data('title');
        var dataDesc = el.data('desc');
        var dataImg = el.find('img').attr('src');
        var dataInfo =  '<div class="expTab">' +
                        '<a href="#" class="expClose"></a>' +
                        '<div class="expFigure"><img src="' + dataImg + '" /></div>' +
                        '<div class="expContent"><h3 class="expTitle">' + dataTitle + '</h3><div class="expDesc">' + dataDesc + '</div></div>' +
                        '</div>';
        return dataInfo;
    }
    
    $($block).click(function(){
        collapse();
        
        $block.not(this).removeClass('itemExpanded');
        $(this).toggleClass('itemExpanded');
        if (!$(this).hasClass('itemExpanded')) {
            collapse();
        } else {
            if ($(this).hasClass('lastElement')) {
                $(this).after('<div class="expandContainer">' + pulldata($(this)) + '</div>');
                $('.expandContainer').slideDown(300);
            } else {
                $(this).nextAll('.lastElement').first().after('<div class="expandContainer">' + pulldata($(this)) + '</div>');
                $('.expandContainer').slideDown(300);
            }
        }
        
        $('.expClose').click(function(){
            $block.removeClass('itemExpanded');
            collapse();
        });
    }); 
    
     
                                
    
});  


	
})( jQuery );
