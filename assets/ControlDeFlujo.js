/* CONTROL DE FLUJO

Cuando hablamos de control de flujo hablamos del orden en que se ejecutan las instrucciones de un programa, siendo estas instrucciones las que determinan o controlan dicho flujo.

En un programa, a menos que el control de flujo se vea modificado por una instruccion de control (por ejemplo una condicional), el control de flujo se mantiene en el mismo orden en el que se escriben las instrucciones (de arriba a abajo y de izquierda a derecha). */ 

/*CONDICIONALES

Los condicionales nos permiten evaluar si una condicion cumple o no con lo que estemos evaluando. Su sintaxis en muy sencilla, tanto que podemos agregar condiciones intermedias en el caso de que no se cumpla la primera evaluacion y se deban evaluar mas. */

//Sintaxis de un IF
/*
if(condicion){
    //Instrucciones
}*/

const edadMiguel=18;

if (edadMiguel <= 17){
    console.log("Lo siento, no puedes entrar a la Puri.");
} else{ //sino
    console.log("Pásele mijo.");
}
//PROMPT NOS SIRVE PARA SOLICITAR DATOS AL USUARIO Y ALMACENTARLOS EN UNA VARIABLE

var hora = prompt("Ingrese la hora actual");

if (hora < 18){
    console.log("Buenos días, hace mucho calor, toma agua.");
}   else{
    console.log("Buenas tardes, hace mucho frío, por favor usa un sueter.");
}

/*Valores que se evalúan como falsos

Los valores que se evaluan como falsos son:

    -false
    -0
    -"" (cadena vacía)
    -null
    -undefined
    -NaN (Not a Number)
*/

/* else if ("de otro modo si")

Sintaxis de un else if

else if (La camisa de Miguel está limpia){
    /Miguel irá wapo a la fiesta
}
*/

//OPERADORES LÓGICOS EN CONDICIONES

//Validacion para un nombre de usuario de mi PIb usando else if

nombreIngresado =(prompt("Ingrese su nombre"));

nombreIngresado = nombreIngresado.toUpperCase()

if (nombreIngresado === "MIGUEL") {
    console.log("Hola Miguel");
} else if (nombreIngresado === "MIGUEL ANGEL") {
    console.log("Hola Miguel Angel");
} else{
    console.log("Hola desconocido");
}

/*OPERADOR TERNARIO

Estructura de un operador ternario

resultado = (condicion)?valor1:valor2;

*/
//Ayuda al profesor Felipe saber cuantos alumnos de su clase pasaron la materia.

var calificacion;
var calificaciones = 43;

if(calificaciones <30){
    calificacion = "Felipe tuvo pocos reprobados.";
}
var cantidadReprobados = 13;

if (cantidadReprobados<30){
    cantidadReprobados = "Felipe tuvo pocos reprobados.";//valor que devuelve si se cumple la condición.
}else{
    cantidadReprobados="Felipe tuvo muchos reprobados.";
}
console.log(cantidadReprobados);

//Transformando a un operador ternario

console.log("OPERADOR TERNARIO")

cantidadReprobados = prompt("Ingrese la cantidad de reprobados");

var resultado = cantidadReprobados < 30 ? "Felipe tuvo pocos reprobados": "Felipe tuvo muchos reprobados";

console.log(resultado);

/* SWITCH CASE

Estructura básica de un switch.

switch (expresión){
    case valor 1:
        /bloque de código que se ejecuta si la expresión es igual al valor 1.
        break;
    case valor 2:
        /bloque de código que se ejecuta si la expresión es igual al valor 2.
        break;
    case valor 3:
        /bloque de código que se ejecuta si la expresión es igual al valor 3.
        break;
    default:
        /C+odigo que se ejecuta si no se cumple ninguna de las condiciones anteriores.
}
        switch: iniciar nuestra condición
        case: evaluar la condición
        break: termina la condición
        default: terminamos la iteración y mostramos el resultado final.
*/

opcion = prompt("Ingrese un numero del 1 al 4.");

switch (opcion){
    case "1":
        console.log("Seleccionaste la opcion 1");
        break;
    case "2":
        console.log("Seleccionaste la opcion 2");
        break;  
    case "3":
        console.log("Seleccionaste la opcion 3");
        break;
    case "4":
        console.log("Seleccionaste la opcion 4");
        break;
    default:
        console.log("Opción invaálida.")
    //En este caso se puede ocupar a la variable como una cadena de texto ya que no ejecutará ninguna operación con ella.
}

/*
-Ejercicio de signos zodiacales de la ssión "Diseño de algoritmos".
-Ejercicio del menu para dibujar las 4 figuras geométricas, añadiendo opciones para calcular area y perímetro de cada figura.

*/