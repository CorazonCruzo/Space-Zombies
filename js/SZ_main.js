//need to store the ratio
var ratio;
//need easy access to the width
var newWidth;

//function that gets called when game starts
$(window).load( function() {
    var div = $(window);
    ratio = (div.width() / 1024);
    newWidth = div.width();
    main_call_setupContent();
})