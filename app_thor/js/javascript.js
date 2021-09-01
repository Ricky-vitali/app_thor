var _c = console.log;
var d = document;

var aCarrito = []

var aProductos = [{

    id: '0',
    categoria: 1,
    nombre: "Auriculares Azules",
    precio: 6000,
    descripcion: "Unos auriculares azules con luces LED",
    imagen: ["imagenes/Auris1_.jpg", "imagenes/Auris1Blanco_.jpg", "imagenes/Auris1Azul_.jpg"]

}, {
    id: '1',
    categoria: 1,
    nombre: "Auriculares con LED",
    precio: 10000,
    descripcion: "Unos auriculares de excelente calidad con luces LED de muchos colores",
    imagen: ["imagenes/Auris2.jpg"]
}, {
    id: '2',
    categoria: 1,
    nombre: "Auriculares Verdes",
    precio: 6000,
    descripcion: "Unos comodos auriculares verdes",
    imagen: ["imagenes/Auris3.jpg"]
}, {
    id: '3',
    categoria: 1,
    nombre: "Auriculares Razer",
    precio: 10000,
    descripcion: "Unos auriculares Razer de la mejor calidad",
    imagen: ["imagenes/AurisRazer.jpg"]
}, {
    id: '4',
    categoria: 1,
    nombre: "Auriculares Neko",
    precio: 9000,
    descripcion: "Unos auriculares de buena calidad con orejas de gato con luces LED",
    imagen: ["imagenes/AurisGato.jpg", "imagenes/AurisGatoVioleta.jpg", "imagenes/AurisGatoRojo.jpg"]
}, {
    id: '5',
    categoria: 2,
    nombre: "Teclado Genius",
    precio: 500,
    descripcion: "Un sencillo teclado genius sin nada en especial",
    imagen: ["imagenes/tecladoGenius.jpg", "imagenes/tecladoGenius2.jpg"]

}, {
    id: '6',
    categoria: 2,
    nombre: "Teclado Led",
    precio: 5000,
    descripcion: "Un teclado mecanico con luces Led con el mayor rendimiento para largas horas de juego",
    imagen: ["imagenes/tecladoLed.png"]

}, {

    id: '7',
    categoria: 2,
    nombre: "Teclado Rojo",
    precio: 3500,
    descripcion: "Un teclado semi-mecanico con luces rojas y la opción de agregar macros personalizados",
    imagen: ["imagenes/tecladoRojo.png"]

}, {
    id: '8',
    categoria: 3,
    nombre: "Mouse con luces Verde",
    precio: 2500,
    descripcion: "Un mouse con luces Led verdes y dos macros a sus costados",
    imagen: ["imagenes/mouseVerde.png", "imagenes/mouseVerde2.png"]

}, {
    id: '9',
    categoria: 3,
    nombre: "Mouse Amarillo",
    precio: 3500,
    descripcion: "Un mouse inalambrico con luces Led amarillas y dos macros a sus costados",
    imagen: ["imagenes/mouseAmarillo.png"]


}, {
    id: '10',
    categoria: 3,
    nombre: "Mouse Genius",
    precio: 250,
    descripcion: "Un mouse Genius sin nada en particular",
    imagen: ["imagenes/mouseGenius.png", "imagenes/mouseGenius2.png"]

}, {

    id: '11',
    categoria: 3,
    nombre: "Mouse Naranja",
    precio: 3500,
    descripcion: "Un mouse inalambrico con luces anaranjadas con macros ",
    imagen: ["imagenes/mouseNaranja.png"]

}, {

    id: '12',
    categoria: 2,
    nombre: "Teclado X",
    precio: 4500,
    descripcion: "Un teclado con una amplia cantidad de macros a sus costados ",
    imagen: ["imagenes/tecladoX.jpeg", "imagenes/tecladoX2.jpeg"]

}];

var aCategorias = [{
    id: 1,
    nombre: 'Auriculares',
    imagen: 'imagenes/Aurisss.png'
}, {
    id: 2,
    nombre: 'Teclados',
    imagen: 'imagenes/Teclado.png'
}, {
    id: 3,
    nombre: 'Mouse',
    imagen: 'imagenes/Mouseeee.png'
}]

var contenido = d.querySelector('.contenido'),
    seccionCategoria = d.querySelector('.categoria'),
    ulCategorias = d.querySelector('ul.categorias'),
    botonCarrito = d.querySelector('#shop'),
    contador = d.querySelector('.carroNumero p'),
    totalItems = 0;

var navCategorias = d.querySelector('#navCategorias');
navCategorias.onclick = function () {
    d.querySelector('#navCategorias ul').classList.toggle('navcerrado');
}

botonCarrito.onclick = abrirCarrito;

var li, a, img, navulCategorias = d.querySelector('#navCategorias ul');
for (var i = 0; i < aCategorias.length; i++) {
    li = d.createElement('li');
    li.setAttribute('data-categoria', aCategorias[i].id);
    li.onclick = cambiarCategoria;
    a = d.createElement('a');
    a.href = '#';
    img = d.createElement('img');
    img.src = aCategorias[i].imagen;
    a.appendChild(img);
    a.innerHTML += aCategorias[i].nombre;
    li.appendChild(a);
    ulCategorias.appendChild(li);
    li = d.createElement('li');
    li.setAttribute('data-categoria', aCategorias[i].id);
    li.onclick = cambiarCategoria;
    a = d.createElement('a');
    a.href = '#';
    a.innerHTML = aCategorias[i].nombre;
    li.appendChild(a);
    navulCategorias.appendChild(li);
}

productosRandom();

function productosRandom() {
    var numero;
    var vendidos = d.querySelector('#vendidos');
    var divGrande, img, divChico, span;
    for (var i = 0; i < 2; i++) {
        numero = Math.round(Math.random() * (aProductos.length - 1));
        divGrande = d.createElement('div');
        img = d.createElement('img');
        img.src = aProductos[numero].imagen[0];
        img.setAttribute('data-idProducto', aProductos[numero].id);
        img.onclick = modalProductos;
        divGrande.appendChild(img);
        divChico = d.createElement('div');
        span = d.createElement('span');
        span.innerHTML = 'Precio: $' + aProductos[numero].precio;
        divChico.appendChild(span);
        divGrande.appendChild(divChico);
        vendidos.appendChild(divGrande);
    }
}

function modalProductos() {
    var id = this.getAttribute('data-idProducto');
    var producto;
    for (var i = 0; i < aProductos.length; i++) {
        if (aProductos[i].id == id) {
            producto = aProductos[i];
        }
    }
    var divModal, divGeneral, spanCerrar, divImagenes, divImagen, imagenGrande, img, divPrevia, divImg, h3, descripcion, precio, divBoton, button;
    divModal = d.createElement('div');
    divModal.classList.add('modal');
    divGeneral = d.createElement('div');
    spanCerrar = d.createElement('span');
    spanCerrar.classList.add('cerrar');
    spanCerrar.innerHTML = 'X';
    spanCerrar.onclick = function () {
        var aModal = d.querySelectorAll('.modal'),
            posicion = aModal.length - 1;
        d.body.removeChild(aModal[posicion]);
    }
    divGeneral.appendChild(spanCerrar);
    divImagenes = d.createElement('div');
    divImagen = d.createElement('div');
    imagenGrande = d.createElement('img');
    imagenGrande.classList.add('imagenGrande');
    imagenGrande.src = producto.imagen[0];
    divImagen.appendChild(imagenGrande);
    divImagenes.appendChild(divImagen);
    divPrevia = d.createElement('div');
    divPrevia.classList.add('vistaPrevia');
    for (var i = 0; i < producto.imagen.length; i++) {
        divImg = d.createElement('div');
        divImg.setAttribute('data-imagen', i);
        divImg.setAttribute('data-idProducto', producto.id);
        divImg.onclick = function () {
            var aVistaPrevia = d.querySelectorAll('.vistaPrevia div'),
                prodId = this.getAttribute('data-idProducto'),
                imgId = this.getAttribute('data-imagen'),
                posicion;
            for (var i = 0; i < aProductos.length; i++) {
                if (aProductos[i].id == prodId) {
                    posicion = i;
                }
            }
            for (var i = 0; i < aVistaPrevia.length; i++) {
                aVistaPrevia[i].classList.remove('elegido');
            }
            this.classList.add('elegido');
            var imagenGrande = d.querySelector('.imagenGrande');
            imagenGrande.src = aProductos[posicion].imagen[imgId];
        }
        if (i == 0) {
            divImg.classList.add('elegido');
        }
        img = d.createElement('img');
        img.src = producto.imagen[i];
        divImg.appendChild(img);
        divPrevia.appendChild(divImg);
    }
    divImagenes.appendChild(divPrevia);
    divGeneral.appendChild(divImagenes);
    h3 = d.createElement('h3');
    h3.innerHTML = producto.nombre;
    divGeneral.appendChild(h3);
    descripcion = d.createElement('p');
    descripcion.innerHTML = producto.descripcion;
    divGeneral.appendChild(descripcion);
    precio = d.createElement('p');
    precio.innerHTML = 'Precio: $' + producto.precio;
    divGeneral.appendChild(precio);
    divBoton = d.createElement('div');
    button = d.createElement('button');
    button.setAttribute('data-idProducto', producto.id);
    button.onclick = agregarAlCarrito;
    button.innerHTML = 'Agregar al carrito';
    divBoton.appendChild(button);
    divGeneral.appendChild(divBoton);
    divModal.appendChild(divGeneral);
    d.body.appendChild(divModal);
}

function abrirCarrito() {
    var divCarrito, divGeneral, spanCerrar, spanH3, h3, productosCarrito, divProducto, spanBorrar, divImagen, img, divInformacion, h4, pDesc, pPrecio, divCantidad, spanMenos, spanNumero, spanMas;
    divCarrito = d.createElement('div');
    divCarrito.classList.add('modalCarrito');
    divGeneral = d.createElement('div');
    spanCerrar = d.createElement('span');
    spanCerrar.classList.add('cerrar');
    spanCerrar.innerHTML = 'X';
    spanCerrar.onclick = function () {
        var aModal = d.querySelectorAll('.modalCarrito'),
            posicion = aModal.length - 1;
        d.body.removeChild(aModal[posicion]);
    };
    divGeneral.appendChild(spanCerrar);
    h3 = d.createElement('h3');
    spanH3 = d.createElement('span');
    spanH3.classList.add('icon-local_grocery_storeshopping_cart');
    h3.appendChild(spanH3);
    h3.innerHTML += 'Mi carrito';
    divGeneral.appendChild(h3);
    productosCarrito = d.createElement('div');
    productosCarrito.classList.add('productosCarrito');
    if (aCarrito.length) {
        for (var i = 0; i < aCarrito.length; i++) {
            divProducto = d.createElement('div');
            spanBorrar = d.createElement('span');
            spanBorrar.innerHTML = 'X';
            spanBorrar.classList.add('borrar');
            spanBorrar.setAttribute('data-idProducto', aCarrito[i].id);
            spanBorrar.onclick = function () {
                var idProducto = this.getAttribute('data-idProducto'),
                    productosCarrito = d.querySelector('.productosCarrito'),
                    p, cantidad;
                for (var i = 0; i < aCarrito.length; i++) {
                    if (aCarrito[i].id == idProducto) {
                        cantidad = aCarrito[i].cantidad;
                        aCarrito.splice(aCarrito[i], 1);
                        this.parentElement.parentElement.removeChild(this.parentElement);
                        if (!aCarrito.length) {
                            p = d.createElement('p');
                            p.innerHTML = 'El carrito se encuentra actualmente vacío.';
                            productosCarrito.appendChild(p);
                        }
                    }
                }
                totalItems = totalItems - cantidad;
                contador.innerHTML = totalItems;
            }
            divProducto.appendChild(spanBorrar);
            divImagen = d.createElement('div');
            divImagen.classList.add('imagen');
            img = d.createElement('img');
            img.src = aCarrito[i].imagen[0];
            divImagen.appendChild(img);
            divProducto.appendChild(divImagen);
            divInformacion = d.createElement('div');
            divInformacion.classList.add('informacion');
            h4 = d.createElement('h4');
            h4.innerHTML = aCarrito[i].nombre;
            divInformacion.appendChild(h4);
            pDesc = d.createElement('p');
            pDesc.innerHTML = aCarrito[i].descripcion;
            divInformacion.appendChild(pDesc);
            pPrecio = d.createElement('p');
            pPrecio.innerHTML = 'Precio: $' + aCarrito[i].precio;
            divInformacion.appendChild(pPrecio);
            divCantidad = d.createElement('div');
            spanMenos = d.createElement('span');
            spanMenos.classList.add('icon-minus-circle')
            spanMenos.setAttribute('data-idProducto', aCarrito[i].id);
            spanMenos.onclick = function () {
                var idProducto = this.getAttribute('data-idProducto'),
                    productosCarrito = d.querySelector('.productosCarrito'),
                    p;
                for (var i = 0; i < aCarrito.length; i++) {
                    if (aCarrito[i].id == idProducto) {
                        this.parentElement.querySelectorAll('span')[1].innerHTML = aCarrito[i].cantidad - 1;
                        aCarrito[i].cantidad--;
                        if (aCarrito[i].cantidad == 0) {
                            aCarrito.splice(aCarrito[i], 1);
                            this.parentElement.parentElement.parentElement.parentElement.removeChild(this.parentElement.parentElement.parentElement);
                        }
                        if (!aCarrito.length) {
                            p = d.createElement('p');
                            p.innerHTML = 'El carrito se encuentra actualmente vacío.';
                            productosCarrito.appendChild(p);
                        }
                    }
                }
                totalItems--;
                contador.innerHTML = totalItems;
            }
            divCantidad.appendChild(spanMenos);
            spanNumero = d.createElement('span');
            spanNumero.innerHTML = aCarrito[i].cantidad;
            divCantidad.appendChild(spanNumero);
            spanMas = d.createElement('span');
            spanMas.classList.add('icon-plus-circle');
            spanMas.setAttribute('data-idProducto', aCarrito[i].id);
            spanMas.onclick = function () {
                var idProducto = this.getAttribute('data-idProducto');
                for (var i = 0; i < aCarrito.length; i++) {
                    if (aCarrito[i].id == idProducto) {
                        aCarrito[i].cantidad++;
                        this.parentElement.querySelectorAll('span')[1].innerHTML = aCarrito[i].cantidad;
                    }
                }
                totalItems++;
                contador.innerHTML = totalItems;
            }
            divCantidad.appendChild(spanMas);
            divInformacion.appendChild(divCantidad);
            divProducto.appendChild(divInformacion);
            productosCarrito.appendChild(divProducto);
        }
        divGeneral.appendChild(productosCarrito);
    } else {
        var parrafo;
        parrafo = d.createElement('p');
        parrafo.innerHTML = 'El carrito se encuentra actualmente vacío';
        productosCarrito.appendChild(parrafo);
    }

    if (aCarrito.length) {
        var divBotones, boton;
        divBotones = d.createElement('div');
        divBotones.classList.add('botonComprar');
        boton = d.createElement('button');
        boton.innerHTML = 'Comprar';
        boton.onclick = finalizarCompra;
        divBotones.appendChild(boton);
        boton = d.createElement('button');
        boton.innerHTML = 'Cerrar';
        boton.onclick = function () {
            var aModal = d.querySelectorAll('.modalCarrito'),
                posicion = aModal.length - 1;
            d.body.removeChild(aModal[posicion]);
        }
        divBotones.appendChild(boton);
        divGeneral.appendChild(divBotones);
    }

    divCarrito.appendChild(divGeneral);
    d.body.appendChild(divCarrito);
}

function cambiarCategoria() {
    var idCategoria = this.getAttribute('data-categoria'),
        categoria;
    d.querySelector('#check').checked = false;
    seccionCategoria.innerHTML = '';
    crearPublicidad();
    contenido.style.display = 'none';
    seccionCategoria.classList.add('abierto');
    var botonVolver;
    botonVolver = d.createElement('button');
    botonVolver.innerHTML = '<';
    botonVolver.classList.add('botonVolver');
    botonVolver.onclick = function () {
        contenido.style.display = '';
        seccionCategoria.classList.remove('abierto');
    }
    seccionCategoria.appendChild(botonVolver);
    for (var i = 0; i < aCategorias.length; i++) {
        if (aCategorias[i].id == idCategoria) {
            categoria = aCategorias[i];
        }
    }
    var h3, divProducto, divImagen, img, h4, divInformacion, pDesc, pPrecio, spanAñadir;
    h3 = d.createElement('h3');
    h3.innerHTML = categoria.nombre;
    seccionCategoria.appendChild(h3);
    for (var i = 0; i < aProductos.length; i++) {
        if (aProductos[i].categoria == idCategoria) {
            divProducto = d.createElement('div');
            divImagen = d.createElement('div');
            img = d.createElement('img');
            img.src = aProductos[i].imagen[0];
            img.setAttribute('data-idProducto', aProductos[i].id);
            img.onclick = modalProductos;
            divImagen.appendChild(img);
            divProducto.appendChild(divImagen);
            divInformacion = d.createElement('div');
            divInformacion.classList.add('informacion');
            h4 = d.createElement('h4');
            h4.innerHTML = aProductos[i].nombre;
            divInformacion.appendChild(h4);
            pDesc = d.createElement('p');
            pDesc.innerHTML = aProductos[i].descripcion;
            divInformacion.appendChild(pDesc);
            pPrecio = d.createElement('p');
            pPrecio.innerHTML = 'Precio: $' + aProductos[i].precio;
            divInformacion.appendChild(pPrecio);
            spanAñadir = d.createElement('span');
            spanAñadir.classList.add('icon-plus-circle');
            spanAñadir.setAttribute('data-idProducto', aProductos[i].id);
            spanAñadir.onclick = agregarAlCarrito;
            divInformacion.appendChild(spanAñadir);
            divProducto.appendChild(divInformacion);
            seccionCategoria.appendChild(divProducto);
        }
    }
    return false;
}

var tiempo;

function crearPublicidad() {
    clearTimeout(tiempo);
    var divPublicidad, span, img;
    divPublicidad = d.createElement('div');
    divPublicidad.classList.add('publicidad');
    span = d.createElement('span');
    span.classList.add('cerrar');
    span.onclick = function () {
        var publicidad = d.querySelector('.publicidad');
        d.body.removeChild(publicidad);
    }
    span.innerHTML = 'X';
    divPublicidad.appendChild(span);
    img = d.createElement('img');
    img.src = 'imagenes/bannerPublicidad.jpg';
    divPublicidad.appendChild(img);
    tiempo = setTimeout(() => {
        var aPublicidades = d.querySelectorAll('.publicidad');
        if (aPublicidades.length > 0) {
            for (var i = 0; i < aPublicidades.length; i++) {
                d.body.removeChild(aPublicidades[i]);
            }
        }
    }, 4000);
    d.body.appendChild(divPublicidad);
}

function agregarAlCarrito() {
    var idProducto = this.getAttribute('data-idProducto'),
        posicion;
    var yaAgregado = false;
    _c(idProducto);
    for (var i = 0; i < aCarrito.length; i++) {
        if (aCarrito[i].id == idProducto) {
            yaAgregado = true;
            break;
        }
        _c(i);
    }
    for (var i = 0; i < aProductos.length; i++) {
        if (aProductos[i].id == idProducto && !yaAgregado) {
            aCarrito.push(aProductos[i]);
            posicion = aCarrito.length - 1;
            aCarrito[posicion].cantidad = 1;
            alerta();
        } else if (aProductos[i].id == idProducto && yaAgregado) {
            posicion = aCarrito.indexOf(aProductos[i]);
            aCarrito[posicion].cantidad++;
            alerta();
        }
    }
    totalItems++;
    contador.innerHTML = totalItems;
}

function finalizarCompra() {
    var modalFormulario, divGeneral, spanCerrar, divTitulo, h3, divFormulario, divInput, label, input, boton;
    modalFormulario = d.createElement('div');
    modalFormulario.classList.add('modalFormulario');
    divGeneral = d.createElement('div');
    spanCerrar = d.createElement('span');
    spanCerrar.innerHTML = 'X';
    spanCerrar.classList.add('cerrar');
    spanCerrar.onclick = function () {
        d.body.removeChild(this.parentElement.parentElement);
    }
    divGeneral.appendChild(spanCerrar);
    divTitulo = d.createElement('div');
    divTitulo.classList.add('modalTitulo');
    h3 = d.createElement('h3');
    h3.innerHTML = 'Finalizar la compra';
    divTitulo.appendChild(h3);
    divGeneral.appendChild(divTitulo);
    divFormulario = d.createElement('div');
    divFormulario.classList.add('formulario');
    divInput = d.createElement('div');
    label = d.createElement('label');
    label.innerHTML = 'Nombre completo';
    label.htmlFor = 'nombre';
    divInput.appendChild(label);
    input = d.createElement('input');
    input.type = 'text';
    input.id = 'nombre';
    input.placeholder = 'Ricardo Juan Vitali';
    divInput.appendChild(input);
    divFormulario.appendChild(divInput);
    divInput = d.createElement('div');
    label = d.createElement('label');
    label.innerHTML = 'Correo electrónico';
    label.htmlFor = 'mail';
    divInput.appendChild(label);
    input = d.createElement('input');
    input.type = 'email';
    input.id = 'mail';
    input.placeholder = 'ricardo.vitali@davinci.edu.ar';
    divInput.appendChild(input);
    divFormulario.appendChild(divInput);

    divInput = d.createElement('div');
    label = d.createElement('label');
    label.innerHTML = 'Número de documento';
    label.htmlFor = 'dni';
    divInput.appendChild(label);
    input = d.createElement('input');
    input.type = 'number';
    input.id = 'dni';
    input.placeholder = '69696969';
    divInput.appendChild(input);
    divFormulario.appendChild(divInput);

    divInput = d.createElement('div');
    label = d.createElement('label');
    label.innerHTML = 'Número de tarjeta';
    label.htmlFor = 'tarjeta';
    divInput.appendChild(label);
    input = d.createElement('input');
    input.type = 'number';
    input.id = 'tarjeta';
    input.placeholder = '1234567890123456';
    divInput.appendChild(input);
    divFormulario.appendChild(divInput);

    divInput = d.createElement('div');
    label = d.createElement('label');
    label.innerHTML = 'Domicilio';
    label.htmlFor = 'domicilio';
    divInput.appendChild(label);
    input = d.createElement('input');
    input.type = 'text';
    input.id = 'domicilio';
    input.placeholder = 'Calle Falsa 123';
    divInput.appendChild(input);
    divFormulario.appendChild(divInput);

    boton = d.createElement('button');
    boton.innerHTML = 'Finalizar compra';
    boton.onclick = verificarDatos;
    divFormulario.appendChild(boton);

    divGeneral.appendChild(divFormulario);
    modalFormulario.appendChild(divGeneral);
    d.body.appendChild(modalFormulario);
}

function verificarDatos() {
    var aCampos = d.querySelectorAll('.formulario input'),
        finalizarCheckout = true;
    for (var i = 0; i < aCampos.length; i++) {
        if (aCampos[i].value == '') {
            aCampos[i].classList.add('error');
            finalizarCheckout = false;
        } else {
            aCampos[i].classList.remove('error');
        }
    }

    if (finalizarCheckout) {
        var divCompraFinalizada, div, img, p, a;
        divCompraFinalizada = d.createElement('div');
        divCompraFinalizada.classList.add('compraFinalizada');
        div = d.createElement('div');
        img = d.createElement('img');
        img.src = 'imagenes/Tic.png';
        div.appendChild(img);
        p = d.createElement('p');
        p.innerHTML = 'Su compra ha sido realizada con éxito.';
        div.appendChild(p);
        a = d.createElement('a');
        a.innerHTML = 'Volver al carrito';
        a.href = '#';
        a.onclick = function () {
            var compraFinalizada = d.querySelector('.compraFinalizada');
            d.body.removeChild(compraFinalizada);
            var aModalCarrito = d.querySelector('.modalCarrito'),
                aModalFormulario = d.querySelector('.modalFormulario');
            if (aModalCarrito) {
                d.body.removeChild(aModalCarrito);
            }
            if (aModalFormulario) {
                d.body.removeChild(aModalFormulario);
            }
            return false;
        }
        div.appendChild(a);
        divCompraFinalizada.appendChild(div);
        d.body.appendChild(divCompraFinalizada);
        aCarrito = [];
        totalItems = 0;
        var pNumero = d.querySelector('.carroNumero p');
        pNumero.innerHTML = totalItems;
    }
}

var sobreMi = d.querySelector('#sobreMi');
sobreMi.onclick = verPerfil;
var modalPerfil = d.querySelector('.modalPerfil');
d.querySelector('.modalPerfil span.cerrar').onclick = function () {
    modalPerfil.classList.add('cerrado');
}

function verPerfil() {

    modalPerfil.classList.remove('cerrado');
    d.querySelector('#check').checked = false;

}

var timer = null;

function alerta() {
    var divAlerta, p, span;
    if (!timer) {
        clearTimeout(timer);
        timer = null;
    }
    divAlerta = d.createElement('div');
    divAlerta.classList.add('alerta');
    divAlerta.onclick = function () {
        var alerta = d.querySelector('.alerta');
        d.body.removeChild(alerta);
    }
    span = d.createElement('span');
    span.innerHTML = 'Producto añadido';
    divAlerta.appendChild(span);
    p = d.createElement('p');
    p.innerHTML = 'El producto se ha añadido con éxito.';
    divAlerta.appendChild(p);
    d.body.appendChild(divAlerta);
    timer = setTimeout(() => {
        var aAlertas = d.querySelectorAll('.alerta');
        for (var i = 0; i < aAlertas.length; i++) {
            d.body.removeChild(aAlertas[i]);
            clearTimeout(timer);
            timer = null;
        }
    }, 3000);
}


var navHome = d.querySelector('#home');
navHome.onclick = function () {
    d.querySelector('.contenido').style.display = '';
    d.querySelector('.categoria').classList.remove('abierto');

}


