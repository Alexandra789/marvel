$('.carousel').owlCarousel({
  loop:true,
  margin:10,
  nav:false,
  dots:false,
  responsive:{
      0:{
          items:1
      },
  }
})

$('#contactForm').submit(e => {
    e.preventDefault();
    $('.contact-form-init').hide();
    $('.contact-form-success').show();
});
