lazyloader
==========

JavaScript library for lazy loading images, embedded videos and social media widgets

Currently supports images and iframes.

## Usage

1. Change the `src` attribute of your images and iframes to `data-src`
2. Add the plugin script file (and jQuery) to your page
3. Set the `data-blank-image` attribute of the plugin script tag to the path of a 1x1 transparent GIF
4. Initialize the elements you want to be lazy loaded like `$('[data-src]').lazy();`

<small>You can optionally include the CSS to style unloaded elements or customize the styling yourself.</small>

Each element needs a `width` and `height` attribute to work properly.


```html
<html>
	<body>
		<p><img data-src="/img/flower.jpg" width="640" height="400" alt="Flower"></p>
		<p><img data-src="/img/flower2.jpg" width="903" height="1024" alt="Flowers"></p>
		<p><iframe allowfullscreen frameborder="0" width="560" height="350" id="yt-pBK2rfZt32g" data-src="//www.youtube.com/embed/pBK2rfZt32g/?enablejsapi=1&amp;playerapiid=pBK2rfZt32g&amp;wmode=transparent&amp;autohide=0&amp;autoplay=0&amp;fs=1&amp;hd=1&amp;rel=0&amp;showinfo=0&amp;start=&amp;theme=light&amp;cc_load_policy=0"></iframe></p>
		<script src="//ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js"></script>
		<script src="/js/lazyloader.js" data-blank-image="/img/blank.gif"></script>
		<script charset="utf-8">
			(function($) {
				"use strict";
				
				$(function() {
					$('[data-src]').lazy();
				});
			})(jQuery);
		</script>
	</body>
</html>
```