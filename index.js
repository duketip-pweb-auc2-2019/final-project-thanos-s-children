$(document).ready(function() {
// Background
  var apiKey = "fcf23960d4c44ea1bf11d95479b6b990";
  $.get("https://api.openweathermap.org/data/2.5/weather?zip=75090,us&units=imperial&appid="  + apiKey, function(data){
    console.log(data);
    console.log(data.weather[0].main);
    var background = $('body#eventsbackground');
    if(data.weather[0].main == "Rain"){
    $(background).classList=" ";
    $(background).addClass("eventrainy");
    }
    else if(data.weather[0].main == "Clear"){
    $(background).classList=" ";
    $(background).addClass("eventsunny");
    }
    else{
      $(background).classList=" ";
      $(background).addClass("eventcloudy");
    }
    console.log("ready!");
    $("li.list-group-item").click(hi); 
    $(".days span").click(calendar)
  })
  $("div.math").css("display","none");
  $("div.math").removeClass("class1");
  $("div.math").removeClass("class2");
  $(window).scroll(function(){
    var scroll=$(window).scrollTop();
    if(scroll>= 500){  //1232
        $("div.math").css("display","block");
        $("div.math:even").addClass("class2");
        $("div.math:odd").addClass("class1");
    }
    else{
        $("div.math").removeClass("class2");
        $("div.math").removeClass("class1");
        $("div.math").css("display","none");
    }
  });
  
});

function hi() {
    $("li.list-group-item").removeClass("active");
    $(this).addClass("active");
}
function calendar() {
  $(".days span").removeClass("active");
  $(this).addClass("active");
}

$(window).on("load",function() {
    $(window).scroll(function() {
      var windowBottom = $(this).scrollTop() + $(this).innerHeight();
      $(".fade").each(function() {
    
        var objectBottom = $(this).offset().top + $(this).outerHeight();
        
    });
    })
});

$(window).on("load",function() {
    $(window).scroll(function() {
      var windowBottom = $(this).scrollTop() + $(this).innerHeight();
      $(".fade").each(function() {
        /* Check the location of each desired element */
        var objectBottom = $(this).offset().top + $(this).outerHeight();
        
        /* If the element is completely within bounds of the window, fade it in */
        if (objectBottom < windowBottom) { //object comes into view (scrolling down)
          if ($(this).css("opacity")==0) {$(this).fadeTo(500,1);}
        } else { //object goes out of view (scrolling up)
          if ($(this).css("opacity")==1) {$(this).fadeTo(500,0);}
        }
      });
    }).scroll(); //invoke scroll-handler on page-load
  });

// window.onload = function(){
  
  //   var labels = document.querySelectorAll('label');
  //   var checked = false;
  //   var last_id = '';
  //   for(var i = 0; i<labels.length; i++){
  //     labels[i].addEventListener('mouseup', function(e){
  //      if(last_id.length > 0){
         
  //        if(e.currentTarget.getAttribute('for') === last_id){
  //          last_id = '';
  //        } else {
  //          last_id = e.currentTarget.getAttribute('for');
  //        }
         
  //      } else {
  //        last_id = e.currentTarget.getAttribute('for');
  //      }
  //       if(last_id.length > 0){
  //         document.getElementById('calendar').className = 'active';
  //         var index = last_id.split('-')[1];
  //         var elm_width = window.getComputedStyle(document.querySelector('label[for="'+last_id+'"]')).width;
  //        if(last_id.match(/0/)){
  //          document.documentElement.style.setProperty('--margin-left', elm_width);   
  //        } else if (last_id.match(/1/)){
  //           document.documentElement.style.setProperty('--margin-left', '0px');
  //        } else {
  //          document.documentElement.style.setProperty('--margin-left', '-'+(parseInt(elm_width)*(index-1))+'px');
  //        }
  //       } else {
  //         document.getElementById('calendar').className = '';
  //         document.documentElement.style.setProperty('--margin-left', '0px');   
  //       }
  //     });
  //   }
  // }
  