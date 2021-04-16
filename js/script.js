// paralex

$(window).scroll(function() {
    var wScroll = $(this).scrollTop();

    if(wScroll > $('.card-deck').offset().top - 250){

        $('.card-deck .paket').each(function(i){
            setTimeout(function(){
                $('.card-deck .paket').eq(i).addClass('muncul animate__animated animate__fadeInUp')
            }, 300 * (i+1));
        });
        
    }
});

/*  modal */
  $('.klik').click(function(){
    $('#mymodal').modal();
    var detail = $(this).attr('data-detail');
    var harga = $(this).attr('data-harga');
    var gambar = $(this).attr('data-gambar');

    $('#detail').text(detail);
    $('#harga').text(harga);
    $('#gambar').attr("src","assets/paket/" +gambar);
  })
/*  end modal */

// syarat booking
$(document).ready(function(){
    $('.klik').click(function(){
      $('#show').click(function(){
        if($(this).is(':checked')){
          $('#tombol').removeAttr('disabled');
        } else {
          $('#tombol').attr('disabled','disabled');
        }
      })
    })
});

$(window).resize(function(){
  var vWidth = $(window).width()
  if(vWidth<=575){
    $('.card-deck').addClass('owl-carousel');
    newSlider();      
  } else{
    stopSlider();
  }
})

function newSlider(){
  $('.owl-carousel').owlCarousel({
    loop:true,
    dots:true,
    margin:10,
    nav:false,
    responsive:{
      0:{
        items:1
      },
      600:{
        items:3
      },
      1000:{
        items:5
      }
    }
  });
}

function stopSlider() {
  var owl = $('.owl-carousel');
  owl.trigger('destroy.owl.carousel');
  owl.removeClass('owl-carousel');
}

  