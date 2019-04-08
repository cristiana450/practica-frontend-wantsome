//Ex1
//Scrieti o functie care sa protejeze emailul unui user
// de ex: myFunction("ovidiu.grigoras@test.com") sa printeze "ovidiu...@test.com" sau "ovid...@test.com"

function protectEmail(email) { 
    var emailaddress = email.split("@"); 
    emailaddress[0].substring(0,3); 
    return emailaddress [0] + "... @" + emailaddress[1];
}

//Ex2
//Scrieti o functie care sa faca uppercase la fiecare litera de la fiecare inceput de string
// de ex: myFunction("i am superman") sa printeze "I Am Superman"

function changeFirstLetter(uppercase) {
    var string = uppercase.split(" ");

    var text = ""
    for (i=0; i < string.length; i++) {
        text+= string[i].charAt(0).toUpperCase() + string[i].slice(1) + "";
    }
    return text; 

}

//Ex3
// Scrieti o functie care sa schimbe literele unui string daca sunt uppercase cu lowercase si invers
// ex: myFunction("xxXyYzZZ") sa printeze "XXxYyZzz" 

function inverseLetters(lowercase) {
    var string = "";

    for (i=0; i<lowercase.length; i++) {
        if (lowercase[i] === lowercase[i].toUpperCase()){
            string += lowercase[i].toLowerCase(); 

        }
        else { string += lowercase[i].toUpperCase() 
        }
    }
    return string; 
}

//Ex4
// Scrieti o functie care sa concateneze un string de cate ori ii zicem
// de ex: myFunction("Wantsome", 2) sa printeze "WantsomeWantsome"

function concatString(concat, number) {
    var string = ""; 

    for (i = 0; i< number; i++) { 

        string += concat 

    }
    return string; 
}

//Ex5
// A palindrome is a word or a phrase that is the same whether you read it backward or forwards, for example, the word 'level'.
// Scrieti o functie care verifica daca un string este palindrom; Implementati mai multe variante

function isPalindrome(string) {
    var str= string.split("").reverse(); 
    var strResult = ""; 

    for (var i=0; i< str.length; i++ ) {
        strResult += str[i]
    }
return strResult; 
}

//Ex6
// Implementati o functie care accepta ca argument un array compus din mai multe array-uri de valori numerice si returneaza un array care contine ca si elemente cele mai mari numere din fiecare array

function myFunction5(arraySet) {
    var ArrayNumber=[]; 

    function sortNumbers(a, b) {
        return b-a; 
    }
    for (i=0; i<arraySet.length; i++) {

        arraySet[i] = arraySet[i].sort(sortNumbers);
        ArrayNumber.push(arraySet[i][0]); 
        
    }
    return ArrayNumber; 
}


//Ex7
// Implementati o functie care face reverse la un string

function reverseString(str) {
    var splitString = str.split("");
    var reverseArray = splitString.reverse();
    var joinArray = reverseArray.join("");
    return joinArray;
}

//Ex8 
// Implementati o functie care calculeaza factorialul unui numar

function factorialize(num) {
    if (num < 0) 
          return -1;
    else if (num == 0) 
        return 1;
    else {
        return (num * factorialize(num - 1));
    }
  }
  factorialize(5);

  //Ex9
// Implementati o functie care accepta ca argumente doua string-uri si verifica daca primul se termina cu cel din urma

function stringSet (word, word1) { 
    if (word.slice(-word1.length) === word1) {
        return "The string" + word + "is ending in" + word1; 
    }

    else { return "The string " + word + "is not ending in" + word1;

    }

}

//Ex10
// Implementati o functie care accepta doua argumente: un array si o functie de adevar. Functia returneaza primul element din array care trece testul specificat

function isPalindrome2(string) {

    if (string === string.split("").reverse().join("")) {
        return true; 
    }
    return false;

}

function checkTest(array) {
    for (var i=0; i<array.length; i++) {
        if (isPalindrome2(array[i])) {
            console.log("Cuvantul: " + array[i] + " este palindrom."); 
        }
    }
}


//Ex11
// Implementati o functie care accepta ca argumente doua string-uri si verifica daca primul string contine toate literele celui de-al doilea string

function containsString (first, second) {
    
    for (var i=0; i<second.length; i++) {
        if(first.includes(second[i])) {
            continue; 
        }
        else {
            return false;
        } 
    }
    return true;

}

// Ex 12
// Implementati o functie care accepta ca argumente doi parametri: un array si o valoare. Functia afiseaza fiecare element al array-ului pana cand intalneste elementul cu valoarea specificata

function containsArray (array, value) {

    i = 0; 

    while (i<array.length) {
        if (array[i] !== value) {
            console.log(array[i]);
            i++;

        }
        else {
            return "Elementul " + value + " a fost gasit in array"; 
        }
        
    }
}

// Ex 13
// Scrieti o functie care elimina toate valorile false dintr-un array: false, null, 0, "", undefined, NaN

function removeFalse(arr) {
    return arr.filter(Boolean);
 }

// Ex 14
// Scrieti o functie care repeta un string de n ori specificate

function repeatStringNumTimes(string, times) {
    var repeatedString = "";
    while (times > 0) { 
      repeatedString += string;
      times--; 
    }
    return repeatedString;
  }
  
  