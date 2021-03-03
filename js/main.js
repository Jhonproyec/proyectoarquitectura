// FUNCION CAMBIAR DE COLOR EL MENU
window.addEventListener('scroll', function(){
    const menu = document.querySelector('header');
    menu.classList.toggle('cambioColor', window.scrollY > 0);
});

// ANIMACION DE TEXTO E IMAGENES
let animado = document.querySelectorAll(".animado")

window.addEventListener("scroll", function(){
	let desplazamiento = document.documentElement.scrollTop;
	for(i = 0; i < animado.length; i++){
		let distancia = animado[i].offsetTop;
		if(distancia - 500 < desplazamiento){
			animado[i].style.opacity = 1
			animado[i].classList.add("mostrarArriba")
		}
	}
})

// EVENTO APAREVER MENU
let boton = document.querySelector('.botonMenu');
let menu = document.querySelector('.menu');
boton.addEventListener('click', function(){
    this.classList.toggle('cerrar');
    menu.classList.toggle('menuMostrar');
})