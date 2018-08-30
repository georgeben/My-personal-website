//Variables
var navbrand = $(".navbar-brand");
var navlink = $(".nav-link");
var toggler = $(".toggler");

var submitBtn = $("#submit-btn");
var form = $("#contact-form");
var formMessage = $("#form-message");

//Navbar Transition
$(window).on('scroll', function(){
            if($(window).scrollTop()){
                $('nav').addClass('navbar-white');
                navbrand.addClass('navbrand-dark');
                navlink.addClass("navlink-dark");
                toggler.addClass("toggler-dark");
            }else{
                $('nav').removeClass('navbar-white');
                navbrand.removeClass('navbrand-dark');
                navlink.removeClass("navlink-dark");
                toggler.removeClass("toggler-dark");

            }
        })

//Form Submission


$(form).submit(function(event){
    event.preventDefault();
    
    var name = $('#name').val().trim();
    var email = $('#email').val().trim();
    var message = $('#message').val().trim();
    
    if(name === "" || email === "" || message === ""){
        $('#form-message').html("None of the fields can be empty");
        $('#form-message').addClass("form-error");
    }else{
        console.log("Legal form");
        
        $.ajax({
          method:"POST",
          url:'mailer.php',
          data:{email:email,name:name,message:message},
          dataType: "json",
          success:function(result){
          if(result.status==="success"){
            $('#name').val('')
            $('#email').val('')
            $('#message').val('')
            $("#form-message").html("Your message has been sent!");
              $("#form-message").removeClass("form-error");
            $("#form-message").addClass("form-success");
          }else{
            alert(result.status)
          }
          },
          error: function(xhr){
           $("#error").html("An error occured: " + xhr.status + " " + xhr.statusText)
          }
        });
        }
    
});


//Scroll Reveal
window.sr = ScrollReveal({ reset: true });
sr.reveal('.about', { duration: 1000 });
sr.reveal('.service', { duration: 2000, distance: '50px', }, 50);
sr.reveal('.skill-item', { duration: 2000, distance: '50px', }, 50);


//Intro text animation
var options = {
  strings: ["Hi! I'm Ben.^500", "Nice to meet you."],
  typeSpeed: 40
}

var typed = new Typed(".caption", options);
