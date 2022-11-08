const pizzas = [
{
    id: 1,
    nombre: "Fugazzeta",
    precio: 550,
    ingredientes: ["Queso","Cebolla", "Orégano"],
    },

{
    id: 2,
    nombre: "Especial",
    precio: 1000,
    ingredientes: ["Queso","Cebolla", "Orégano", "Salchichas", "Palmitos", "Jamón Crudo", "Huevo", "Aceitunas", "Pimentón"],
    },

{
    id: 3,
    nombre: "Hawaiana",
    precio: 850,
    ingredientes: ["Queso","Ananá", "Salsa Golf", "Orégano"],
    },

{
    id:4,
    nombre: "Muzzarella",
    precio: 450,
    ingredientes: ["Queso","Cebolla", "Orégano", "Aceitunas", "Pimentón"],
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

const input = document.getElementById("input");
const form = document.getElementById("formulario");
const contenedor = document.getElementById("contenedor");

const idPizza = (value) => pizzas.find((pizza)=>pizza.id === value);

const ingreseId = ()=>{
    contenedor.innerHTML =  `<h2>Ingrese un número del 1 al 6.</h2>`
}

const renderizarInfoPizza = (pizza) => {
    if (!pizza){
        contenedor.innerHTML = `<h2>No pudimos encontrar ninguna pizza correspondiente a dicho número.</h2>`
    } else {
        contenedor.innerHTML = `<h2>${pizza.nombre}</h2><h3>Su valor es de: $${pizza.precio}</h3>`
    }
}

  const mostrarInfoPizza = (e) => {
    e.preventDefault();
    const pizzaId = input.value;
    if(!pizzaId){
        ingreseId (pizzaId);
        return;
    }
    const infoPizza = idPizza(Number(pizzaId));
    renderizarInfoPizza(infoPizza)
  }

  const init =() => {
    formulario.addEventListener("submit", mostrarInfoPizza)
  }

init()