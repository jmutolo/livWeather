

// JavaScript
document.addEventListener('DOMContentLoaded', function() {
var carousel = new Splide('#servicios', {
type: 'loop',
perMove: 1,
easing: 'ease',
pagination: false,
fixedWidth: '23.21vw',
fixedHeight: '36.54vw',
gap: '1vw',
perPage: 3,
width: '71.63vw',
start: 1,
focus: 'center',
drag: false,
clone: false,
});

carousel.mount();

  carousel.on('active', function() {
    var activeIndex = carousel.index;

    // Update text content
    var textContentElement = document.getElementById('text-content');
    if (textContentElement) {
			switch(activeIndex) {
      	case 0:
        	textContentElement.textContent = 'Livanto Salud provee en su hogar recursos materiales de primera calidad.';
          break;
        case 1:
        	textContentElement.textContent = 'Brindamos un servicio de internación domiciliaria con atención médica y enfermería las 24 horas.';
          break;
        case 2:
        textContentElement.textContent = 'Contamos con un equipo de profesionales altamente capacitados.';
        break;
      }
    }

    // Update link URL
    var linkElement = document.getElementById('link');
    if (linkElement) {
      linkElement.href = 'https://livantosalud.com/py/servicios#servicio' + (activeIndex + 1);
    }
  });
  
  
    carousel.on('moved', function() {
      var slides = carousel.Components.Elements.slides;
      var activeIndex = carousel.index;
  
      // Apply effects to inactive slides
      slides.forEach(function(slide, index) {
        if (index < activeIndex) {
          // Apply your desired effects to inactive slides
          slide.style.transform = 'scale(0.9)';
        	slide.style.opacity = 0.5;
        	slide.style.transition = 'transform 0.3s ease-in-out, opacity 0.3s ease-in-out';
          // Add any other styles or animations
        } else if (index === activeIndex) {
          // Reset effects for the active slide
         slide.style.transform = 'scale(1)';
        	slide.style.opacity = 1;
        	slide.style.transition = 'transform 0.3s ease-in-out, opacity 0.3s ease-in-out';
          // Reset any other styles or animations
        } else {
        	slide.style.transform = 'scale(0.9)';
        	slide.style.opacity = 0.5;
        	slide.style.transition = 'transform 0.3s ease-in-out, opacity 0.3s ease-in-out';
        }
      });
    });

    var prevSlide = carousel.index - 1;
    var nextSlide = carousel.index + 1;
    var actualSlide = carousel.index;

 

    carousel.on('moved', function() {

        var prevSlide = carousel.Components.Slides.getSlide(carousel.index - 1);
        var nextSlide = carousel.Components.Slides.getSlide(carousel.index + 1);
        var actualSlide = carousel.Components.Slides.getSlide(carousel.index);

        prevSlide.style.transform = 'scale(0.9)';
        prevSlide.style.opacity = 0.5;
        prevSlide.style.transition = 'transform 0.3s ease-in-out, opacity 0.3s ease-in-out';

        actualSlide.style.transform = 'scale(1)';
        actualSlide.style.opacity = 1;
        actualSlide.style.transition = 'transform 0.3s ease-in-out, opacity 0.3s ease-in-out';

        nextSlide.style.transform = 'scale(0.9)';
        nextSlide.style.opacity = 0.5;
        nextSlide.style.transition = 'transform 0.3s ease-in-out, opacity 0.3s ease-in-out';

    })

  
});

let aparatologiaPrev = document.getElementById('arrowPrev');

aparatologiaPrev.addEventListener("click", function(){
    var btn = document.getElementById('customArrowP');
    btn.click();
});

let aparatologiaNext = document.getElementById('arrowForward');

aparatologiaNext.addEventListener("click", function () {
  var btnN = document.getElementById('customArrowN');
  btnN.click();
});

let serviciosPrev = document.getElementById('arrowServPrev');

serviciosPrev.addEventListener("click", function() {
  var btnP = document.getElementById('customArrowPrev');
  btnP.click();
});

let serviciosNext = document.getElementById('arrowServNext');

serviciosNext.addEventListener("click", function() {
  var btnNext = document.getElementById('customArrowNext');
  btnNext.click();
});

window.onload = function() {
  document.getElementById('arrowServNext').click();
}


let equipoPrev = document.getElementById('equipoPrev');

equipoPrev.addEventListener("click", function(){
    var btnPrev = document.getElementById('splidePrev');
    btnPrev.click();
});

let equipoNext = document.getElementById('equipoNext');

equipoNext.addEventListener("click", function () {
  var btnNext = document.getElementById('splideNext');
  btnNext.click();
});
