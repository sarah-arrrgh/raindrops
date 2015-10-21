$(window).load(function() {

  $('p').fadeIn(1500);
  var assembler = new Assembler();

  $(document).on('keyup', function(e) {
    if (e.keyCode === 13) {
      assembler.reset();
      assembler.startInterval();
    }
  });

});