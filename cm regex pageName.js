 var pageName = _satellite.getVar('CM PageName');
var cmPageName = pageName.match(/(?<=\.).*/);
var extractedPageName = cmPageName[0].replace(/([A-Z&])/g, ' $1')
  .replace(/^./, function(str){ return str.toLowerCase(); });
 var extractedPageName = extractedPageName.replace(/\./g, ' -');
