(function() {
	function Flickr() {
		this.init();
	}
	
	Flickr.prototype = {
		init: function() {
			this.user = "71034808@N00"; // Flickr user ID
			this.album = "72157629849504147"; // Album/set's ID
			paris.album = "72157671006832463";
			hongkong.album = "72157637497471754";
			folsom.album = "72157629849504147";
			boston.album = "72157627687797123";
			sanantonio.album = "72157625225423093";
			
			
			window.getPhotos = this.getPhotos; // Our method as a property of window, i.e. global
			
			this.getJSON();	
		},
		getJSON: function() {
			// Complete API URL, with parameters
			var src = "http://api.flickr.com/services/feeds/photoset.gne?nsid=" + this.user + "&set=" + this.album + "&format=json&jsoncallback=getPhotos";	
			var script = document.createElement( "script" );
				script.src = src;
				document.body.appendChild( script );
		},
		getPhotos: function( data ) {
			// data is the JSON object returned by Flickr
			var limit = 3;
			
			if( data && data.items ) {
				var title = data.title;
				var items = data.items;
				var albumTitle = title.replace( "Content from ", "" );
				var html = "<h3>" + albumTitle + "</h3>";
				    html += "<div class='images'>";
				
				for( var i = 0; i < items.length; ++i ) {
					var item = items[i];
					var n = i + 1;
					if( n <= limit ) {
						html += "<a href='" + item.link + "'><img src='" + item.media.m + "' alt='' /></a>";
					}	
				}
				
				html += "</div>";
				
				document.querySelector( "#gallery" ).innerHTML = html;
			}	
		}
	};
	
	document.addEventListener( "DOMContentLoaded", function() {
		var flickrFeed = new Flickr();
		
	});
	
})();