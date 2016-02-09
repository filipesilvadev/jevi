$(document).ready(function(){
  WebFontConfig = {
    google: { families: [
      'Montserrat:400,700:latin',
      'Open+Sans:400,300,300italic,400italic:latin',
      'Trade+Winds::latin'
      ]}
  };
  (function() {
    var wf = document.createElement('script');
    wf.src = ('https:' == document.location.protocol ? 'https' : 'http') +
      '://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js';
    wf.type = 'text/javascript';
    wf.async = 'true';
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(wf, s);
  })();

  (function sliderJevi(){
    var $overview = $('#slide .overview'),
      $viewport = $('#slide .viewPort'),
      $prevBtn = $('#slideController .prev'),
      $nextBtn = $('#slideController .next');

      var min = 1;
      var max = $viewport.length;

    $nextBtn.click(function(){
        if (min+1 > max) return;
        min++;
        $($overview).animate({left: "-=100.3%"},1000);
    });

    $prevBtn.click(function(){
        if (min-1 < 1) return;
        min--; 
        $($overview).animate({left: "+=100.3%"},1000);
    });
  })();

});
