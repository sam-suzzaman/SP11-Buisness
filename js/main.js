$(".owl-carousel").owlCarousel({
  loop: true,
  margin: 10,
  nav: true,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 3,
    },
    1000: {
      items: 5,
    },
  },
});


// FORM
// ============================

function formShow() {
  var x = document.getElementById("myform");
  var y = x.classList;
  y.toggle("form-class");
}