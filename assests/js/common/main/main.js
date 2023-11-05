/*
     +--------------------------------------+
     +                                      +
     +                main                  +
     +                                      +
     +--------------------------------------+
*/

// this part use to increase section height of section6(Vandana section)

var x = ($('#sec6-inner').height())+500;

$('#section6').css('height',x);

//end - this part use to increase section height of section6(Vandana section)




// this part use for owl pluging(Currently removed by developer)

// this part use to set
// $('.owl-carousel').owlCarousel({
//     items:3,
//     stagePadding: 50,
//     loop:true,
//     margin:10,
//     nav:true,
//     autoWidth:true,
//     responsive:{
//         0:{
//             items:1
//         },
//         600:{
//             items:2
//         },
//         1000:{
//             items:5
//         }
//     }
// });

//end - this part use for owl pluging(Currently removed by developer)





// this part use for gallary section to handle maginifier popup pluging

$(function () {
    $('#portfolio-wrapper').magnificPopup({
        delegate: 'a', // child items selector, by clicking on it popup will open
        type: 'image',
        // other options
        gallery: {
            enabled: true
        }
    });
});

//end - this part use for gallary section to handle maginifier popup pluging

//
$('body').scrollspy({ target: '#nav1' });
//
$('[data-spy="scroll"]').each(function () {
    var $spy = $(this).scrollspy('refresh')
});
// $('[data-spy="scroll"]').on('activate.bs.scrollspy', function () {
//     console.log('kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk');
// });


//back to top button
$(function () {

    showHideNav();

    $(window).scroll(function(){
        showHideNav();
    });
    function showHideNav() {
      if( $(window).scrollTop() > 50){
        $("#back-to-top").fadeIn();
      }
      else{
        $("#back-to-top").fadeOut();
      }
    }
});


//smooth scroll
$(function () {

  $("a.smooth-scroll").click(function(event){

    event.preventDefault();

    var section_id = $(this).attr("href");

    $("html,body").animate({
      scrollTop: $(section_id).offset().top
    }, 1250);
});

});
