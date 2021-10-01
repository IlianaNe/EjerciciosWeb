var loader = setInterval(function() {
    if (document.readyState !== "complete") {
        clearInterval(loader);
        var a = document.querySelectorAll('.menuNav a');
        a.forEach(function(element, index) {
            element.animate({
                top: ['-200px', '0px']
            }, {
                duration: 2000 + (index * 500)
            });
        });
    }
});