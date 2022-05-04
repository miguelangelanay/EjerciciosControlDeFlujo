alert("Estoy vivo");

/*
!--Instrucciones para estos tareas:

-Crear los ejercicios en una carpeta de las sesiones Control de flujo.
-El repositorio se llama Control de Flujo y se sube el miércoles.
-La información debe ser ingresada por el usuario y mostrarse en consola.

*/

//Ejercicio del menu para dibujar las 4 figuras geométricas, añadiendo opciones para calcular area y perímetro de cada figura.
{
console.log("MENU GEOMÉTRICO.");
let menu = prompt ("Selecciona la figura de la cual quieres conocer su area y perimetro: \n1. Triángulo equilátero\n2. Rectángulo\n3.Círculo\n4. Polígono de regular de 'n' lados.");

    switch(menu){
        case "1":
            function triangulo(){
                let lado = prompt("Ingrese la medida (en metros) de un lado cualquiera del triángulo: ");
                //let altura = prompt("Ingrese la medida (en metros) de la altura del triángulo:");
                let altura = Math.sqrt((lado**2)-((lado/2)**2))  ;
                let perimetro = lado * 3;
                let area = (lado * altura)/2;

                console.log("El área del triángulo es: ",area,"y su perimetro es: ", perimetro);
            }
            triangulo();
            break;
        case "2":
            function rectángulo(){
                let base = prompt("Ingrese la medida (en metros) de la base: ");
                let altura =prompt("Ingrese la medida (en metros) de la altura del rectángulo.");
                let perimetro = (base*2)+(altura*2);
                let area = base * altura;

                console.log("El área del rectángulo es: ",area,"y su perimetro es: ", perimetro);
            }
            rectángulo();
            break;
        case "3":
            function circulo(){
                var pi = 3.14159265;
                let radio = prompt(" Ingresa el radio: ");
                let perimetro = pi * radio*2 ;
                let area = pi * radio**2;

                console.log("El área del círculo es: ",area,"y su perimetro es: ", perimetro);
            }
            circulo();
            break;
        case "4":
            function Poligono(){
                let n = prompt("Ingresa el número de lados del polígono: ");
                let lado = prompt("Escriba la medida (en metros) de uno de sus lados: ");
                let apotema = prompt("Escriba la medida (en metros) de su apotema: ");
                let perimetro = lado * n;
                let area = (perimetro * apotema)/2;

                console.log("El área del polígono es: ",area,"y su perimetro es: ", perimetro);
            }
            Poligono();
        break;
        default:
            console.log("Opción inválida.")
    }
}