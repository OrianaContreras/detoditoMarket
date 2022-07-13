
$(document).ready(function() {

    //Set or remove a transparent header class 
    $(window).on('scroll', function() {
        let posicion = $('#pr').offset();
        if ($(window).scrollTop() >= posicion.top) {
            $('header').removeClass('transparente');   
        } else {
            $('header').addClass('transparente');  
        }
    })

    // Burger Menu
    $('#burger').click(function() {
        $('#burger').toggleClass('abierto');
        $('.menu').toggleClass('abierto');
    })

    //Smooth Scroll
    $('a').on('click', function(){
        if (this.hash !== ''){
            let hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800)
        }
    })
})

function confirmacionRegistro() {
    alert("El registro se ha realizado satisfactoriamente");
}


