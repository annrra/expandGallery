/*
* expandGallery
*
* author: Andrey Raychev
* credits: http://bettermonday.org 
* latest version and README available on Github:
* https://github.com/annrra/expandGallery
*
* License: GPL2
*/

(function( $ ) {   
    
    $.expandGrid = function(element, options) { 
        
        var defaults = {
            animationSpeedOpen: 300,
            animationSpeedClose: 200,
            imageGridMaxHeight: 200,
        }
        
        var plugin = this;
        
        // this will hold the merged default, and user-provided options
        // plugin's properties will be available through this object like:
        // plugin.settings.propertyName from inside the plugin or
        // element.data('pluginName').settings.propertyName from outside the plugin, 
        // where "element" is the element the plugin is attached to;
        plugin.settings = {}
        
        var $element = $(element), // reference to the jQuery version of DOM element
             element = element;    // reference to the actual DOM element

        
        var $block = $('.wrapGrid .imgBlock'),
            $imgGrid = $('.imgGridItem'),
            $body = $( 'html, body' );
        
        $block.removeClass('firstElement lastElement');
        $block.first().addClass('firstElement');
        $block.last().addClass('lastElement');
        
        
        //set first and last items in the grid on load and resize 
        $(document).ready(function() {
            firstLast();
            $(window).resize(firstLast);
            $imgGrid.css({'maxHeight': plugin.settings.imageGridMaxHeight + 'px'});
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
        
        plugin.init = function(){
            
            plugin.settings = $.extend({}, defaults, options);
            
            $block.click(function(){
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
        };
          
          
        /**********/       
         
        
        function collapse() {
            $('.wrapGrid .expandContainer').slideUp(plugin.settings.animationSpeedClose, function () {
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
                $('.expandContainer').slideDown(plugin.settings.animationSpeedOpen);
            } else {
                el.nextAll('.lastElement').first().after( expand(el) );
                $('.expandContainer').slideDown(plugin.settings.animationSpeedOpen);
            }
        }
        
        function expand(el) {
            var expandContainer = '<div class="expandContainer">' + loaddata(el) + '</div>';
            return expandContainer;
        }
        
        function closeBtn() {
            $('.expClose').click(function(event){
                event.preventDefault();
                $block.removeClass('itemExpanded');
                collapse();
            });
        }
        
        
        // fire up the plugin!
        // call the "constructor" method
        plugin.init();
        
    };    
    // add the plugin to the jQuery.fn object
    $.fn.expandGrid = function(options) {

        // iterate through the DOM elements we are attaching the plugin to
        return this.each(function() {

            // if plugin has not already been attached to the element
            if (undefined == $(this).data('expandGrid')) {

                // create a new instance of the plugin
                // pass the DOM element and the user-provided options as arguments
                var plugin = new $.expandGrid(this, options);

                // in the jQuery version of the element
                // store a reference to the plugin object
                // you can later access the plugin and its methods and properties like
                // element.data('pluginName').publicMethod(arg1, arg2, ... argn) or
                // element.data('pluginName').settings.propertyName
                $(this).data('expandGrid', plugin);

            }

        });

    }
    
})( jQuery );
