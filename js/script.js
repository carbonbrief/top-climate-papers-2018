let screenWidth =  $(window).width();
const iframe = $("#ai2html");
const url = "ai2html/altmetric-";

console.log(screenWidth);

function changeIframeSrc (screenWidth) {

    if (screenWidth > 1470) {

        iframe.attr('src',url + "desktop.html");   
    
        console.log('Desktop');
    
    } else if ((screenWidth > 1195) && (screenWidth < 1471)) {
    
        iframe.attr('src',url + "laptop.html");   
    
        console.log('Laptop');
    
    } else {
        // do nothing for now
    }

}

changeIframeSrc();

window.addEventListener('resize', function() {

    screenWidth =  $(window).width();

    changeIframeSrc(screenWidth);

});

