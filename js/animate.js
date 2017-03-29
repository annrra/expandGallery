/*
* expandGallery
*
* author: Andrey Raychev
* credits: http://bettermonday.org 
* latest version and README available on Github:
* https://github.com/jprifio/expandGallery
*
* License: GPL2
*/

(function( $ ) {
     
    
    var $block = $('.wrapGrid .imgBlock'),
        $href = $('.wrapGrid .imgBlock > a'),
        $body = $( 'html, body' );
        
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
        $('.wrapGrid .expandContainer').slideUp(200, function () {
            $(this).remove();
        });
    }
    
    //prepare data for expandable area
    function loaddata(el) {
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
    
    //find the last block on a row and add the info after it
    function expandFindLast(el) {
        if (el.hasClass('lastElement')) {
            el.after( expand(el) );
            $('.expandContainer').slideDown(300);
        } else {
            el.nextAll('.lastElement').first().after( expand(el) );
            $('.expandContainer').slideDown(300);
        }
    }
    
    function expand(el) {
        var expandContainer = '<div class="expandContainer">' + loaddata(el) + '</div>';
        return expandContainer;
    }
    
    function initExpand() {
        $($block).click(function(){
            collapse();
            $block.not(this).removeClass('itemExpanded');
            
            $(this).toggleClass('itemExpanded');
            if (!$(this).hasClass('itemExpanded')) {
                collapse();
            } else {
                expandFindLast($(this));                       
            }
            
            $body.animate( { scrollTop : $(this).offset().top }, 400 );
            closeBtn();
        });
    }
    
    function closeBtn() {
        $('.expClose').click(function(){
            $block.removeClass('itemExpanded');
            collapse();
        });
    }
    
    function hrefCancelClick() {
        $href.click(function(event) {
           event.preventDefault();
        });
    }
    
    $(document).ready(function() {
        hrefCancelClick();
        initExpand();
    });
                                
	
})( jQuery );
