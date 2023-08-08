


let nombre = prompt("Buenas, ingresanos tu nombre");
let edad = parseInt(prompt("Bienvenido "+nombre+ " indicanos tu edad"));
 while (isNaN(edad)){
    edad = parseInt(prompt("Respuesta no valida, porfavor indicanos tu edad nuevamente"));
 }
let comida = prompt("Que es lo que mas te gusta comer??");
let respuesta="";

for (let i = 1 ; i<=3 ; i++){
 let pregunta = prompt("Intento numero "+i+" de 3, cual es la capital de chile??" )
 if (pregunta != "santiago"){
  respuesta= "No"
  alert(respuesta)
 } else{
    respuesta= "Correcto!!!"
    alert(respuesta)
 }
}

console.log(nombre+" tiene "+edad+" y le gusta comer "+comida)
 

