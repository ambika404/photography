// alert("js")
let togglar=document.querySelector('#togglar')
let navlinks=document.querySelector('.navlinks')

togglar.addEventListener('click',linksdisplay)

function linksdisplay(){
    // alert()
    navlinks.classList.toggle('showlist')
}
// 
var swiper = new Swiper(".mySwiper", {
      pagination: {
        el: ".swiper-pagination",
        type: "fraction",
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
    // 
    $('.nameErr').hide()
    $('.emailErr').hide()
    // for name validation
    $('#name').on('input',function(){
      let data=$('#name').val();
      if(data.length<1)
      {
        $('.nameErr').show()
        $('.nameErr').html("required feild")
      }
       else if(data.length<10)
            {
                $('.nameErr').show()
                $('.nameErr').html("minimum 8 characters")
            }
            else{
                $('.nameErr').show()
                $('.nameErr').html("name is okay")
            }
    })
    // for email validation
    $('#email').on('input',function(){
      let data1=$('#email').val();
      if(data1.length<1)
      {
        $('.emailErr').show()
        $('emailErr').html("required feild")
      }
      else if(data1.length<10)
      {
        $('.emailErr').show()
        $('.emailErr').html("minimum 10 characters")
      }
      else{
        $('.emailErr').show()
        $('.emailErr').html("email is okay")
      }
    })
  
    