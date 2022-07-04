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

// review section here
$('.your-class1').slick({
    slidesToShow: 1,
    centerMode:true,
    fade: true,
    slidesToScroll: 1,
    margin:0,
    arrows: false,
    asNavFor: '.your-class2',
    focusOnSelect: true,

  });
  $('.your-class2').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    asNavFor: '.your-class1',
    dots: false,
    focusOnSelect: true,
    arrows:false,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });


// FAQ accordion
// const FAQ__accordion = document.getElementsByClassName('content__box');
// for(var i = 0; i<FAQ__accordion.length; i++){
//     FAQ__accordion[i].addEventListener('click', function(){
//         $('.content__box').removeClass('active')
//         this.classList.addClass('active')
//     })
// }

$('.content__box').on('click',function(e){
    $('.content__box').removeClass('active')
    $(this).addClass('active')
})


// piechart
  // const labels = [
  //   'January',
  //   'February',
  //   'March',
  //   'April',
  //   'May',
  //   'June',
  // ];

//   const data = {
//     labels: labels,
//     datasets: [{
//       label: 'My First dataset',
//       backgroundColor: 'rgb(255, 99, 132)',
//       borderColor: 'rgb(255, 99, 132)',
//       data: [0, 10, 5, 2, 20, 30, 45],
//     }]
//   };

const data = {
    // labels: [
    //   '21.51% Team',
    //   '17.80% Investors',
    //   '0.69% Advisors',
    //   '60% Community'
    // ],
    datasets: [{
      label: 'My First Dataset',
    //   data: [300, 50, 100],
    data: [96.795, 70.1, 73.105, 210],
      backgroundColor: [
        'rgba(37, 85, 254, 1)',
        'rgba(108, 140, 252, 1)',
        'rgba(156, 177, 252, 1)',
        'rgba(0, 56, 255, 1)'
      ],
    //   hoverOffset: 2
    }]
  };

  const config = {
    type: 'doughnut',
    data: data,
    options: {}
  };


  const myChart = new Chart(
    document.getElementById('myChart'),
    config
  );