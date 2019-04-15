/*1. Scrieti o functie care verifica daca un input este sau nu de tip string.
console.log(is_string('w3resource'));
true
console.log(is_string([1, 2, 4, 0]));
false*/

const isString = input => typeof input === 'string' || input instanceof String ? true : false;

/*2. Scrieti o functie de tip named function care accepta ca argument un CNP si verifica sexul unei persoane. In urma apelului acestei functii, se va returna un text de forma "Persoana verificata este de sexul M/F".*/

const verifyGender = CNP => {
    return CNP[0] === '1' ? 'Persoana verificata este de sexul M': 
    (CNP[0] === '2' ? 'Persoana verificata este de sexul F' : 
    'Persoana verificata nu a introdus corect CNP-ul.'); 
};

const verifyGenderAsNumber = CNP => {
    return parseInt((''+CNP)[0]) === 1 ? 'Persoana verificata este de sexul M': 
    (parseInt((''+CNP)[0]) === 2 ? 'Persoana verificata este de sexul F' : 
    'Persoana verificata nu a introdus corect CNP-ul.'); 
};


/*3. Scrieti un for care itereaza de la 0 la 20. Pentru fiecare iteratie, verifica daca numarul curent este par sau impar si va
raporta acest lucru in consola. (exemplu: “2 este numar par”);
Scrieti functia in doua variante: while si for*/

const verifyEvenNumber = num => {
    return num % 2 === 0 ? console.log(num + " este numar par " ) : console.log(num + " este numar impar " ); 
}



/* 4.Implementati o functie care accepta ca argumente doua string-uri si verifica daca primul se termina cu cel din urma */

const stringSet = (word, word1) => {
    return word.slice(-word1.length) === word1 ? console.log('The string' + word + 'is ending in' + word1) : 'The string ' + word + 'is not ending in' + word1; 
}


/*5. Vreau sa am o functie care sa-mi calculeze suma dintre 2 numere daca ele sunt diferite iar daca sunt egale sa-mi imulteasca suma lor cu 5
//ex myFunction(10, 5) - output 15 // myFunction(10,10) - output 100 */

const customCalculation = (a, b) => { return a===b? (a+b)*5 : a+b }







