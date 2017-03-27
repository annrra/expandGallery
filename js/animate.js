(function( $ ) {

    
    var $block = $('.wrapper .imgBlock');
    $block.removeClass('firstElement lastElement');
    $block.first().addClass('firstElement');
    $block.last().addClass('lastElement');
    
    
    
    //set first and last items in the grid on load and resize 
    
    $(document).ready(function() {
        firstLast();
        $(window).resize(firstLast);
    });
    var timeout;
    function firstLast() {
        if (timeout) {
            window.clearTimeout(timeout);
        }
        timeout = setTimeout(function () {
            $block.each(function() {
                          
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
        }, 100);
    } 
           
     
    
    function collapse() {
        $('.wrapper .expandContainer').slideUp(200, function () {
            $(this).remove();
        });
    }
    
    //prepare data for expandable area
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
                                

	
})( jQuery );
