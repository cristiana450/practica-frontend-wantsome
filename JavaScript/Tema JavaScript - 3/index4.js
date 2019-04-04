/*1. Scrieti un for care itereaza de la 0 la 20. Pentru fiecare iteratie, verifica daca numarul curent este par sau impar si va
raporta acest lucru in consola. (exemplu: “2 este numar par”);
Scrieti functia in doua variante: while si for*/

// creez un for loop care itereaza de la 0 la 20 si scrie in consola numerele pare

function forLoop() {
    for (var i=1; i<=20; i++) {
        if (i%2 == 0) {
            console.log(i + " este numar par " );
        }
    }
}

// creez un while loop care itereaza de la 0 la 20 si scrie in consola numerele pare

function whileLoop() {
    var i = 1; 
    while (i <= 20) {
        if (i%2 == 0) {
            console.log(i + " este numar par " );
            i++; 
        }    
    }
}

/*2. Scrieti un for care itereaza de la 0 la 10. Pentru fiecare iteratie, se va multiplica numarul curent cu 9 si se va afisa
rezultatul. (exemplu: “3*9=27”).
 Scrieti functia in doua variante: while si for*/

//creez un for loop care itereaza de la 0 la 10 si scrie in consola numerele afisat pt var i multiplicat cu constanta 9

function forLoop1(){
    const nine = 9;
    for(var i=0; i<=10; i++){
        console.log(i+ " * "+nine+" = "+ i*nine)
    }
}

//creez un while loop care itereaza de la 0 la 10 si scrie in consola numerele afisat pt var i multiplicat cu constanta 9

function whileLoop1() {
    var i = 0;
    const nine = 9;
    while (i <= 10) {
        console.log(i+ " * "+nine+" = "+ i*nine);
        i++;
      }
  }

/*3. Pentru fiecare cifra de la 1 la 10, afisati tabla inmultirii.
(exemplu: 1 * 0 = 0
 1 * 1 = 1
 …
 1 * 10 = 10 )
Pentru a afisa in consola pe linie noua puteti concatena un string, la final, cu + “\n” */

var a = 1; 
var b; 

for (var i=1; i<=10; i++) {

    b = a * i; 

    console.log(" " +a+ " * " +i+ " = " +b+ "<br>"); 
}