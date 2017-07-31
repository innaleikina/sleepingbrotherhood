
$(document).ready(function(){
  $("a.dropdown-toggle").click(function(ev) {
            $("a.dropdown-toggle").dropdown("toggle");
            return false;
        });
        $("ul.dropdown-menu a").click(function(ev) {
            $("a.dropdown-toggle").dropdown("toggle");
            return false;
});

    $('.carousel').carousel()$("#caurousel-java").carousel();

// Enable Carousel Indicators
$(".item").click(function(){
    $("#caurousel-java").carousel(1);
});

// Enable Carousel Controls

  });
