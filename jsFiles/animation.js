
$(document).ready(function(){
  AOS.init();


  // playing iphone animation
  $('.iphone-animation').addClass("play");



  // homepage h1 text custom animation
   inputString = '.heading'
   animateText(inputString);




});



function animateText(inputString){
// Wrap every letter in a span

  $(inputString).each(function(){
    $(this).html($(this).text().replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>"));
  });

  targetString = inputString + ' .letter';
 
  
  anime.timeline({loop: false})
    .add({
      targets: targetString,
      translateX: [40,0],
      translateZ: 0,
      opacity: [0,1],
      easing: "easeOutExpo",
      duration: 1200,
      delay: function(el, i) {
        return 300 + 100 * i;
      }
    });

}