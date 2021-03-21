$(document).ready(function(){
  // alert('Todo funciona perfecto, capo!');

  // <<<<<<<<<< Header >>>>>>>>>>
  $('nav a').each(function(index, element){
    $(this).css({
      'top': '-200px'
    });
    $(this).animate({
      top: '0px'
    },1500 + (index * 500));
  });

  if ($(window).width() > 800){
    $('header .texto').css({
      'top': '350px',
      'opacity': '0'
    });
    $('header .texto').animate({
      top: '300px',
      opacity: '1'
    },1500);
  }


  // <<<<<<<<<< Anclas >>>>>>>>>>  
  var acercaDe = $('#acerca-de').offset().top,
      menu = $('#menu').offset().top,
      galeria = $('#galeria').offset().top,
      informacion = $('#informacion').offset().top;

  $('#boton-acerca-de').on('click', function(e){
    e.preventDefault();
    $('html, body').animate({
      scrollTop: acercaDe
    }, 1000);
  });

  $('#boton-menu').on('click', function(e){
    e.preventDefault();
    $('html, body').animate({
      scrollTop: menu - -520
    }, 1000);
  });

  $('#boton-galeria').on('click', function(e){
    e.preventDefault();
    $('html, body').animate({
      scrollTop: galeria - -12
    }, 1000);
  });

  $('#boton-informacion').on('click', function(e){
    e.preventDefault();
    $('html, body').animate({
      scrollTop: informacion - -13
    }, 1000);
  });


});


