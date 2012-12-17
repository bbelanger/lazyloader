// adapted from https://gist.github.com/4157402
(function($, window, document){
    "use strict";
    
    var
    win =   $(window);
    
    window.watchResize = function(callback)
    {
        var resizing;
        callback.size = 0;
        function done()
        {
            var curr_size = window.innerWidth;
            clearTimeout( resizing );
            resizing = null;
            // only run on a true resize
            if ( callback.size !== curr_size )
            {
                callback();
                callback.size = curr_size;
            }
        }
        win.bind('resize', function(){
            if ( resizing )
            {
                clearTimeout( resizing );
                resizing = null;
            }
            resizing = setTimeout( done, 50 );
        });
        // init
        callback();
    };
    
    window.watchScroll  =   function(callback) {
        var
        scrolling;
        callback.scroll =   0;
        function done() {
            var
            curr_scroll =   win.scrollTop();
            clearTimeout( scrolling );
            scrolling   =   null;
            if( callback.scroll !== curr_scroll ) {
                callback();
                callback.scroll =   curr_scroll;
            }
        }
        win.bind('scroll', function() {
            if(scrolling) {
                clearTimeout(scrolling);
                scrolling   =   null;
            }
            scrolling   =   setTimeout( done, 50 );
        });
        callback();
    };
}(jQuery, window, document));

(function($, win, SRC, DLL) {
    "use strict";
    
    var
    body        =   $('body'),
    wdw         =   $(win),
    top,
    bottom,
    media,
    thing,
    thingTop,
    thingBottom,
    windowHeight,
    i,
    blankImage  =   $('script[src$="lazyloader.js"],script[src$="lazyloader.min.js"]').data('blank-image') || '/img/blank.gif';

    function swapMedia() {
        media       =   $('[' + DLL + '="0"]');
        top         =   body.scrollTop();
        windowHeight=   wdw.height();
        bottom      =   top + (windowHeight * 1.25);
        i           =   media.length;
        while(i--) {
            thing       =   media.eq(i);
            thingTop    =   thing.offset().top;
            thingBottom =   thingTop + (windowHeight / 2);
            win.console.log(thing, thingTop, thingBottom);
            if(thingTop >= top && thingBottom <= bottom) {
                thing.attr(DLL, '1').attr(SRC, thing.data(SRC));
            }
        }
    }
    
    $.fn.lazy   =   function() {
        i       =   this.length;
        while(i--) {
            thing   =   this.eq(i);
            thing.data(SRC, thing.attr(SRC)).attr(SRC, blankImage).attr(DLL, '0');
        }
        swapMedia();
    };
    
    win.watchResize(swapMedia);
    win.watchScroll(swapMedia);
})(jQuery, window, 'src', 'data-lazy-loaded');