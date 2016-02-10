$(document).ready(function(){
  WebFontConfig = {
    google: { families: [
      'Montserrat:400,700:latin',
      'Open+Sans:400,300:latin',
      'Trade+Winds::latin',
      'Graduate::latin'
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

  (function Agenda(){     
    
      var shows = [
          {
            show: 'O Inimigo',
            day: '20',
            month: 'Fev',
            hour: '13:30',
            location: 'Igreja Templo das Águias',
            city: 'Curitiba-PR'
          },
          {
            show: 'Principados & Potestades',
            day: '01',
            month: 'Mar',
            hour: '13:30',
            location: 'Igreja Templo das Águias',
            city: 'Curitiba-PR'
          },
          {
            show: 'Mercador das Mascaras',
            day: '15',
            month: 'Abr',
            hour: '13:30',
            location: 'Igreja Templo das Águias',
            city: 'Curitiba-PR'
          }
      ];

        for (var i = 0; i < shows.length; i++) {
          var id = "#prod_"+[i],
          $article = $(
            '<article class="closed" id="prod_'+[i]+'">'+
              '<span class="day"></span>' +
              '<p class="month"></p>' +  
              '<p class="show"></p>' +
              '<div class="event">' +
              '<p class="hour"></p>'+
              '<p class="location"></p>'+
              '<p class="city-state"></p>'+
              '</div>'+
              '<button id="btn'+[i]+'">Ver mais</button>'+
            '</article>'
          ),
          $diary = $('#diary .wrapper');        
          $diary.append($article);

        var month     = $(id + ' .month'),
            day       = $(id + ' .day'),
            show      = $(id + ' .show'),
            hour      = $(id + ' .event .hour'),
            location  = $(id + ' .event .location'),
            city      = $(id + ' .event .city-state');
          
          month.html(shows[i].month);
          day.html(shows[i].day);
          show.html(shows[i].show);
          hour.html(shows[i].hour);
          location.html(shows[i].location);
          city.html(shows[i].city);

         var eachButton = $('#prod_'+[i]+' #btn'+[i]);
         continue

            eachButton.on('click', function(){
              var eachShow = $('#prod_'+[i]);
              if (eachShow.hasClass('closed')) {
                  eachShow.attr('class', 'open');
              }else{
                  eachShow.attr('class', 'closed');
              }


            });

        console.log(eachShow);
        console.log(eachButton);

        };

        


    
  })();

});
