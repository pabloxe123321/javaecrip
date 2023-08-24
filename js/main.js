const cervezas=[
   {nombre:"Budweiser", precio: 2100},
   {nombre:"Cusqueña", precio: 2300},
   {nombre:"Royal guard", precio: 1800}]
const piscos=[
   {nombre:"Lapostolle", precio: 14000},
   {nombre:"Mistral", precio: 6700}]
const vinos=[
   {nombre:"Misioneros", precio: 8600},
   {nombre:"Gato", precio: 5000}];
const bebidas=[
   {nombre:"Coca cola", precio: 3000},
   {nombre:"Fanta", precio: 3100},
   {nombre:"Pap", precio: 2900}]

const carrito= [];

const producto= [
   {nombre:"cerveza", productos: cervezas},
   {nombre:"pisco", productos: piscos},
   {nombre:"vino", productos: vinos},
   {nombre:"bebida", productos: bebidas},

];

while (true) {
   const seleccion = parseInt(prompt("Ingrese el numero de lo que desea comprar:"+"\n 1. Cervezas"+"\n 2. Piscos"+"\n 3. Vinos"+"\n 4. Bebidas"+ "\n Para ver Total carrito, ingresa 0"))
   
   if (seleccion === 0){
      break;
   }

   if(!isNaN(seleccion)){
      const eleccion = producto[seleccion - 1]
      
      if (eleccion){
         let lista = "";
         eleccion.productos.forEach((element, index) => {
            const contador = index + 1;
            lista += contador + ". "+ element.nombre + " $" + element.precio + "\n";
         });
            
         const opcion = parseInt(prompt("Selecciona tu producto"+ "\n" +  lista));

         if (opcion >= 1 && opcion <= eleccion.productos.length){
            carrito.push(eleccion.productos[opcion -1]);
         } else{
            alert("El numero ingresado es invalido, intentelo nuevamente")
         }
      }else
         alert("Eliga una opcion del 1 al 4")
   }
}
if (carrito.length === 0) {
      alert ("No hay nada en el carrito")
}else{
let compra="";
carrito.forEach((element, index) => { 
      const contador = index + 1;
      compra += contador + ". "+ element.nombre + " $" + element.precio + "\n";
});
let total=carrito.reduce((total, element) => total + element.precio, 0);
alert("Estas por comprar:" + "\n" + compra + "\n Su total es de: "+ total + "$");
}





