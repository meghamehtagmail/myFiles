
  (function() {
    var el = document.createElement('script');
	el.src = 'https://code.jquery.com/jquery-3.2.1.js';
	el.async = 'true';
	el.addEventListener('load', function() {
	  window.dataLayer.push({
	    event: 'jQueryLoaded'
	  });
    });
    document.head.appendChild(el);
  })();
