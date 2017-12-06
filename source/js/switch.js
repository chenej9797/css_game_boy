
$(document).ready(function() {
   var switcher = false;
  $('.switch').click(function() {
    if (switcher === false) {
      $('.switch').addClass('switch-on');
      $('.monitor .light').addClass('light-on');
      $('.monitor .center').addClass('center-on');
      $('.nintendoPixel').addClass('nintendoPixel-on');
      setTimeout(function(){
    $('.sound').trigger('play');
  },2500);
      switcher = true;
    } else {
      $('.switch').removeClass('switch-on');
      $('.monitor .light').removeClass('light-on');
      $('.monitor .center').removeClass('center-on');
      $('.nintendoPixel').removeClass('nintendoPixel-on');
      $('.sound').trigger('pause');
      switcher = false;
    }
  });
});