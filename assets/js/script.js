$(document).ready(function() {

  $("a").click(function(event){
    if (this.hash == "#sobre-mi") {

        event.preventDefault();
        var gato = this.hash;

        $("html, body").animate({
          scrollTop: $(gato).offset().top - 90
        }, 800, function(){
          window.location.hash = gato;
        });
    }
    else if (this.hash !== ""){
      event.preventDefault();
      var gato = this.hash;

      $("html, body").animate({
        scrollTop: $(gato).offset().top - 60
      }, 800, function(){
        window.location.hash = gato;
      });
    }
  });

  $('[data-toggle="tooltip"]').tooltip()

  $('.carousel').carousel({
    interval: false
});
});
