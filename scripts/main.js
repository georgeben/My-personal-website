var navbrand = $(".navbar-brand");
var navlink = $(".nav-link");
var toggler = $(".toggler");


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