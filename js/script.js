let screenWidth =  $(window).width();
const iframe = $("#ai2html");
const url = "ai2html/altmetric-";

console.log(screenWidth);

function changeIframeSrc (screenWidth) {

    if (screenWidth > 1470) {

        iframe.attr('src',url + "retina.html");   
    
    } else if ((screenWidth > 1286) && (screenWidth < 1471)) {
    
        iframe.attr('src',url + "desktop.html");   

    } else if ((screenWidth > 570) && (screenWidth < 1287)) {
    
        iframe.attr('src',url + "laptop.html");   

    
    } else {

        iframe.attr('src',url + "tablet.html");   

    }

}

changeIframeSrc(screenWidth);

window.addEventListener('resize', function() {

    screenWidth =  $(window).width();

    changeIframeSrc(screenWidth);

});

