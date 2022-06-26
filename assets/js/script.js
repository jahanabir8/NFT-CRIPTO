// menubar
$(".mobile__bar").click(function()
{$(".mobile__menu").addClass("open")})

$(".cross__btn").click(function()
{$(".mobile__menu").removeClass("open")})


// owl carosel
$('.owl-carousel').owlCarousel({
    // loop:true,
    // margin:10,
    // responsiveClass:true,
    // autoplay:1000,
    // autoplayTimeout:1000,
    // autoplayHoverPause:false,

    loop:true,
    autoplay: {
      delay: 10,
      disableOnInteraction: false,
    },
    autoplayTimeout:3000,
    speed: 1000,
    autoplaySpeed : 2000,
    margin:10,
    autoplayHoverPause:true,


    responsive:{
        0:{
            items:1,
            // nav:true
        },
        600:{
            items:2,
            // nav:false
        },
        992:{
            items:3,
            // nav:true,
        }
    }
})

