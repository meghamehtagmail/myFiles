var optumPixel = '';
if(_satellite.settings.isStaging==true)
{optumPixel='optumtrax.optum.com'}else{optumPixel='ometrics.optum.com'}

s.registerPostTrackCallback(function(requestURL){
  	pixelTrack(requestURL,optumPixel)
});

/* Below Code will be minimized after testing */
function pixelTrack(requestURL,hostName) {
  try {
    var h_name = requestURL.match(/:\/\/(www[0-9]?\.)?(.[^/:]+)/i);
    if (h_name != null && h_name.length > 2 && typeof h_name[2] === 'string' && h_name[2].length > 0) {
      var r_url = requestURL.replace(h_name[2], hostName);
      var img_tag = document.createElement("IMG");
      img_tag.setAttribute("src", r_url);
      img_tag.setAttribute("width", "1");
      img_tag.setAttribute("height", "1");
      img_tag.setAttribute("id", "optumrx_pixel_id");
      img_tag.setAttribute("style", "display:none");
      document.body.appendChild(img_tag);
      console.log("Optum pixel sent post track callback");
      console.dir(img_tag); // Request URL
      var element = document.getElementById("optumrx_pixel_id");
    	element.parentNode.removeChild(element);
    }
  }
  catch(err) {
  }
}
return false;
