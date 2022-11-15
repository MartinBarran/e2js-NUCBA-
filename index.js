const pizzas = [
{
    id: 1,
    nombre: "Fugazzeta",
    precio: 550,
    ingredientes: ["Muzzarella","Cebolla", "Orégano"],
    
    },

{
    id: 2,
    nombre: "Napolitana",
    precio: 1000,
    ingredientes: ["Muzzarella","Tomate", "Orégano", "Albahaca", "Aceituna Negra", "Pimentón"],
    
    },

{
    id: 3,
    nombre: "Hawaiana",
    precio: 850,
    ingredientes: ["Muzzarella","Ananá", "Salsa Golf", "Jamón Cocido"],
    
    },

{
    id:4,
    nombre: "Muzzarella",
    precio: 450,
    ingredientes: ["Muzzarella", "Albahaca", "Cebolla", "Orégano", "Aceitunas", "Pimentón"],
    
    },

{
    id: 5,
    nombre: "Calabresa",
    precio: 950,
    ingredientes: ["Queso","Salame", "Orégano", "Aceitunas", "Pimentón"],
    
    },

{
    id: 6,
    nombre: "Cuatro Quesos",
    precio: 800,
    ingredientes: ["Muzzarella","Roquefort", "Brie", "Fontina", "Orégano", "Aceitunas", "Pimentón"],
    
    },
    
]

//Traigo elementos de HTML y los alojo en constantes.
const input = document.getElementById("input");
const form = document.getElementById("formulario");
const contenedor = document.getElementById("contenedor");


//Fc que recibe un valor (ID de pizza) y 
//encuentra la pizza en el Array PIZZAS
//Una vez que encuentra el objeto con dicho ID, lo devuelve
const idPizza = (value) => pizzas.find((pizza)=>pizza.id === value);

//Fc que envía mensaje de error en caso de que no se haya ingresado ningún número.
const ingreseId = ()=>{
    contenedor.innerHTML =  `<div><h2>Ingrese un número del 1 al 6.</h2></div>`
}

//Fc que evalúa, dado un input numérico, si dicho n° 
//corresponde con alguna pizza. Si no lo hace, devuelve 
//msj de error. Si encuentra, devuelve NOMBRE + PRECIO.
const renderizarInfoPizza = (pizza) => {
    if (!pizza){
        contenedor.innerHTML = `<div><h2>No pudimos encontrar ninguna pizza correspondiente a dicho número.</h2></div>`
    } else {
        contenedor.innerHTML = `<div><h2 class="titulo-pizza">${pizza.nombre}</h2><h3>Precio: $${pizza.precio}</h3></div>`
    }
}
//Defino Fc que recibe algo del evento (e)...
//Recibo un parámetro. Si es undefined (!pizzaID), se ejecuta el If.
//De otro modo, continúa y evalúa si el núm ingresado es válido
  const mostrarInfoPizza = (e) => {
    e.preventDefault();
    const pizzaId = input.value;
    if(!pizzaId){
        ingreseId ();
        return;
    }
    const infoPizza = idPizza(Number(pizzaId));
    renderizarInfoPizza(infoPizza);
    form.reset();    
  }




    //FUNCIÓN INICIALIZADORA: cuando suceda el evento SUBMIT, 
  //se ejecuta mostrarInfoPizzza 
  const init =() => {
    formulario.addEventListener("submit", mostrarInfoPizza);
  }

init()

