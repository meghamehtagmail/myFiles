var isInViewport = function (elem) {
    var bounding = elem.getBoundingClientRect();
    return (
        bounding.top >= 0 &&
        bounding.left >= 0 &&
        bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        bounding.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
};

  var viewport = true
	window.addEventListener('scroll', function(e) {

    var claim_id  = document.querySelector('[translate-value-claim-number]').getAttribute("translate-value-claim-number")
    var element_selector = document.querySelector('['+ "translate-value-claim-number="+'"'+claim_id+'"'+']')
		if (viewport == true){
			if (isInViewport(element_selector)) {
   				console.log('banner in view port' )
				viewport = false;
			}
		}
	});

  document.querySelector('[track="claim-video"]')
  parentElement.firstElementChild.textContent.trim()
   var claimNumber = document.querySelector('[translate-value-claim-number]').text


var claim_id  = document.querySelector('[translate-value-claim-number]').getAttribute("translate-value-claim-number")
var view_claim= document.querySelector('['+ "translate-value-claim-number="+'"'+claim_id+'"'+']')
document.querySelector("[translate-value-claim-number='+claim_id+']")

document.querySelector('[translate-value-claim-number="7442458852"]')

	window.addEventListener('scroll', function(e) {
    $(".icon-video-play").each(function(){
            var top_of_element = $(this).offset().top;
            var bottom_of_element = $(this).offset().top + $(this).outerHeight();
            var bottom_of_screen = $(window).scrollTop() + window.innerHeight;
            var top_of_screen = $(window).scrollTop();

            if((bottom_of_screen > top_of_element) && (top_of_screen < bottom_of_element)){
                console.log('testtttttt')
            }
        });
  });
