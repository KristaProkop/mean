$(document).ready(function() {
    $('.button').hover(function() {
        $(this).toggleClass("green");
    });
    $('.button').click(function() {
        $(this).toggleClass("red blue");
    });
    $( function () {
        $(document).onEnter( function() {
            $('.original').clone([true]).appendTo("#div").removeClass("green").removeClass("original");     
        });
    });
});

(function($) {
    $.fn.onEnter = function(func) {
        this.bind('keypress', function(e) {
            if (e.keyCode == 13) func.apply(this, [e]);    
        });               
        return this; 
     };
})(jQuery);

