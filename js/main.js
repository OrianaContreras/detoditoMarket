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

const templateCarrito = document.getElementById('template-carrito').content
let carrito = [];
const mostrarCarrito = () => {
        
    items.innerHTML ='';
    Object.values(carrito).forEach(productoSeleccionado => {
    templateCarrito.querySelector('th').textContent = productoSeleccionado.index;
    templateCarrito.querySelectorAll('td')[0].textContent = productoSeleccionado.title;
    templateCarrito.querySelectorAll('td')[1].textContent = productoSeleccionado.cantidad;
    templateCarrito.querySelector('.btn-info').dataset.index = productoSeleccionado.index;
    templateCarrito.querySelector('.btn-danger').dataset.index = productoSeleccionado.index;
    console.log(templateCarrito.querySelector('.btn-info').dataset.index = productoSeleccionado.index)


        const clone = templateCarrito.cloneNode(true);
        fragment.appendChild(clone);
    })

    items.appendChild(fragment)

    footerTabla()
}
    const footerTabla = () =>{
        footer.innerHTML = '';
        if(Object.keys(carrito).length === 0){
            footer.innerHTML=`
            <th scope="row" colspan="5">Carrito vacío</th>
            `
        return 
        }
        const cantidadDeProductosAgregados = Object.values(carrito).reduce((acc,{cantidad}) => acc + cantidad,0)
        templateFooter.querySelectorAll('td')[0].textContent = cantidadDeProductosAgregados
        const clone = templateFooter.cloneNode(true) 
        fragment.appendChild(clone)
        footer.appendChild(fragment)

        const btnVaciarCarrito = document.getElementById('vaciar-carrito')
        btnVaciarCarrito.addEventListener('click',() => {
            carrito = {}
        mostrarCarrito()

        })   
    }

items.addEventListener('click', element => { btnAumentarDisminuir(element) })

let btnAumentarDisminuir = element => {
   
    if(element.target.className == 'btn-info'){
        console.log('estoy dentro del if')
    let producto = carrito[element.target.dataset.index]
    producto.cantidad = producto.cantidad + 1
    console.log(producto)
    carrito[element.target.dataset.index] = {...producto}
    mostrarCarrito()
    }

    if (element.target.className == 'btn-danger'){
        
        let producto = carrito[element.target.dataset.index]
        producto.cantidad = producto.cantidad - 1
        if (producto.cantidad === 0) {
            delete carrito[element.target.dataset.index]
        } else {
            carrito[element.target.dataset.index] = {...producto}
        }
        mostrarCarrito()
    }

}