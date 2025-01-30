// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];
function agregarAmigo() {
    // se crea una variable para el texto ingresado por el input 
    let textoIngresado = document.getElementById('amigo').value.trim();
    // validar caracteres especiales
    if(textoIngresado.match(/[!@#$%^&*(),.?":{}|<>]/)){
        alert('El nombre no puede contener carracteres especiales');
        LimpiarNombre();
        return(false);
    }   
    if(textoIngresado.match(/\d/)){
        alert('El nombre no puede contener Numeros');
        LimpiarNombre();
        return(false);
    } 
    if(textoIngresado === ''){
        //el usuario dejo vacio el input
        alert('Por favor, inserte un nombre.');
        return;
    }else{
        //si el nombre ingresado existe debemos indicar ingrese un nombre nuevo de lo contrario cree el li y guarde el dato en esa etiqueta
        if (amigos.includes(textoIngresado)){
            alert('el nombre ingresado ya existe, por favor ingrese un nuevo Nombre');
        }else{         
            amigos.push(textoIngresado);
            CrearLi(textoIngresado);
            //console.log(amigos);
        }
    }
    LimpiarNombre();
}
function LimpiarNombre(){
    let valorInput = nombreEscrito = document.querySelector('#amigo');
    valorInput.value = '';
}
// funcion para crear un li en el ul
function CrearLi(nombre){
    let nuevoLi = document.createElement('li');
    // asigno el nombre al li
    for(i = 0; i < amigos.length; i++){
        nuevoLi.textContent = nombre;
        document.querySelector('#listaAmigos').appendChild(nuevoLi);
    }
}
// funcion para realizar el sorteo
function sortearAmigo(){
    let amigoAleatorio = Math.floor(Math.random()*amigos.length);
    let amigoSeleccionado = amigos[amigoAleatorio];
    let resultado = document.getElementById('resultado');
    if (amigos == 0 ){
        alert('No hay Nombres ingresado, no se puede realizar el sorteo');
        return(false);
    }else{
        resultado.innerHTML = `<li>El amigo secreto es : ${amigoSeleccionado}</li>`;
        //document.querySelector('.button-draw').setAttribute('disabled','true');
    }
    
   

    //console.log(amigoSeleccionado);
    //console.log(amigoAleatorio);
}
