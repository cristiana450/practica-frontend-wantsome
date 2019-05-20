/* Ex.1
Loop through the Array and remove all non-active users from the initial Array */

const myData = [{
    name: 'Iggy Turskis',
    active: false
},{
    name: 'Geoff Newell',
    active: true
},{
    name: 'Peter Newnham',
    active: true
},{
    name: 'James Walker',
    active: false
}];

const removeUsers = arr => {
    return arr.filter((user) => { return user.active === true })
} 

removeUsers(myData); 

/*Ex 2
Convertiti toate distantele in mile - 0.621371 * distance - folosind map
Returnati toate itemele cu distanta mai mica de 10000  - folosind filter
Returnati distanta totala - folosind reduce
*/

const distances = [
    { from: 'New York', to: 'Dhaka', distance: 12654},
    { from: 'Sydney', to: 'chittagong', distance: 8858},
    { from: 'Kolkata', to: 'Sylhet', distance: 670}
  ]

const convertDistance = arr => {
    return arr.map((distance) => { return 0.621371 * distance.distance })
}; 

/* Ex.3 Returnati un array de obiecte care sa contina doar id si titlul fiecarui item de mai jos */

const releases = [
    {
        "id": 70111470,
        "title": "Die Hard",
        "boxart": "http://cdn-0.nflximg.com/images/2891/DieHard.jpg",
        "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
        "rating": [4.0],
        "bookmark": []
    },
    {
        "id": 654356453,
        "title": "Bad Boys",
        "boxart": "http://cdn-0.nflximg.com/images/2891/BadBoys.jpg",
        "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
        "rating": [5.0],
        "bookmark": [{ id: 432534, time: 65876586 }]
    },
    {
        "id": 65432445,
        "title": "The Chamber",
        "boxart": "http://cdn-0.nflximg.com/images/2891/TheChamber.jpg",
        "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
        "rating": [4.0],
        "bookmark": []
    },
    {
        "id": 675465,
        "title": "Fracture",
        "boxart": "http://cdn-0.nflximg.com/images/2891/Fracture.jpg",
        "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
        "rating": [5.0],
        "bookmark": [{ id: 432534, time: 65876586 }]
    }
];

const titleId = arr => {
    arr.map((book) => {
        let newBook = new Object(); 
        newBook.title = book.title; 
        newBook.id = book.id; 
    }); 
    return newBook; 
}

/*Ex.4 Returnati id-urile videourilor care au rating 5.0 */ 

const newReleases = [
    {
        "id": 70111470,
        "title": "Die Hard",
        "boxart": "http://cdn-0.nflximg.com/images/2891/DieHard.jpg",
        "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
        "rating": 4.0,
        "bookmark": []
    },
    {
        "id": 654356453,
        "title": "Bad Boys",
        "boxart": "http://cdn-0.nflximg.com/images/2891/BadBoys.jpg",
        "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
        "rating": 5.0,
        "bookmark": [{ id: 432534, time: 65876586 }]
    },
    {
        "id": 65432445,
        "title": "The Chamber",
        "boxart": "http://cdn-0.nflximg.com/images/2891/TheChamber.jpg",
        "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
        "rating": 4.0,
        "bookmark": []
    },
    {
        "id": 675465,
        "title": "Fracture",
        "boxart": "http://cdn-0.nflximg.com/images/2891/Fracture.jpg",
        "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
        "rating": 5.0,
        "bookmark": [{ id: 432534, time: 65876586 }]
    }
];

const returnVideo = arr => {
    return arr.filter((videos) => { if(videos.rating === 5.0) {
        return videos.id
        }; 
    }); 
} 


// Folosind map() si concatAll() - concatenati lista intr-un array de video ids
//hint trebuie sa folositi 2 map-uri - chain intre metode

const movieLists = [
    {
        name: "New Releases",
        videos: [
            {
                "id": 70111470,
                "title": "Die Hard",
                "boxart": "http://cdn-0.nflximg.com/images/2891/DieHard.jpg",
                "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
                "rating": 4.0,
                "bookmark": []
            },
            {
                "id": 654356453,
                "title": "Bad Boys",
                "boxart": "http://cdn-0.nflximg.com/images/2891/BadBoys.jpg",
                "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
                "rating": 5.0,
                "bookmark": [{ id: 432534, time: 65876586 }]
            }
        ]
    },
    {
        name: "Dramas",
        videos: [
            {
                "id": 65432445,
                "title": "The Chamber",
                "boxart": "http://cdn-0.nflximg.com/images/2891/TheChamber.jpg",
                "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
                "rating": 4.0,
                "bookmark": []
            },
            {
                "id": 675465,
                "title": "Fracture",
                "boxart": "http://cdn-0.nflximg.com/images/2891/Fracture.jpg",
                "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
                "rating": 5.0,
                "bookmark": [{ id: 432534, time: 65876586 }]
            }
        ]
    }
];

const returnVideo = arr => {
    let newArray = []; 
    function blabla() {
        arr.map((video) => { return video.videos.map((video) => {
        return newArray.push(video.id)
    })
})}
blabla(); 
return newArray; 
}; 


/*//Returnati id, title, si 150x200 box art url pentru fiecare video
//hint aveti de folosit map,filter */ 

let movieLists = [
			{
				name: "Instant Queue",
				videos : [
					{
						"id": 70111470,
						"title": "Die Hard",
						"boxarts": [
							{ width: 150, height: 200, url: "http://cdn-0.nflximg.com/images/2891/DieHard150.jpg" },
							{ width: 200, height: 200, url: "http://cdn-0.nflximg.com/images/2891/DieHard200.jpg" }
						],
						"url": "http://api.netflix.com/catalog/titles/movies/70111470",
						"rating": 4.0,
						"bookmark": []
					},
					{
						"id": 654356453,
						"title": "Bad Boys",
						"boxarts": [
							{ width: 200, height: 200, url: "http://cdn-0.nflximg.com/images/2891/BadBoys200.jpg" },
							{ width: 150, height: 200, url: "http://cdn-0.nflximg.com/images/2891/BadBoys150.jpg" }

						],
						"url": "http://api.netflix.com/catalog/titles/movies/70111470",
						"rating": 5.0,
						"bookmark": [{ id: 432534, time: 65876586 }]
					}
				]
			},
			{
				name: "New Releases",
				videos: [
					{
						"id": 65432445,
						"title": "The Chamber",
						"boxarts": [
							{ width: 150, height: 200, url: "http://cdn-0.nflximg.com/images/2891/TheChamber150.jpg" },
							{ width: 200, height: 200, url: "http://cdn-0.nflximg.com/images/2891/TheChamber200.jpg" }
						],
						"url": "http://api.netflix.com/catalog/titles/movies/70111470",
						"rating": 4.0,
						"bookmark": []
					},
					{
						"id": 675465,
						"title": "Fracture",
						"boxarts": [
							{ width: 200, height: 200, url: "http://cdn-0.nflximg.com/images/2891/Fracture200.jpg" },
							{ width: 150, height: 200, url: "http://cdn-0.nflximg.com/images/2891/Fracture150.jpg" },
							{ width: 300, height: 200, url: "http://cdn-0.nflximg.com/images/2891/Fracture300.jpg" }
						],
						"url": "http://api.netflix.com/catalog/titles/movies/70111470",
						"rating": 5.0,
						"bookmark": [{ id: 432534, time: 65876586 }]
					}
				]
			}
        ];
        
const returnSomething = arr => { 
        let newArray = [];
        arr.map((returnVit) => { return returnVit.videos.map((returnVit) => {
            let obj = new Object(); 
            obj.id = movie.id; 
            obj.title = movie.title; 
            obj.boxArtUrl = movie.boxarts.filter((box) => { 
                return box.width === 150 
            });
            return newArray.push()
    }

/*ex.1.
 Scrieti o functie care sa mute literele cu o litera mai incolo folosind .map
 de exemplu moveLetters('hello') // => 'ifmmp'
 moveLetters('abcxy') // => "bcdyz"
hint : String.fromCharCode() String.charCodeAt()*/


const moveLetters = str => {
    let result = ''; 
    let char = ''; 
    str.split('').map((letter) => {
        char = letter.charCodeAt()+1; 
        result += String.fromCharCode(char); 
    }); 
    return result; 
}

/*ex2
 Vreau sa am o functie care sa faca uppercase la cuvinte in functie ca in exemplu de mai jos
 changeWordCase('hey ppl, lets learn javascript together') // => "HEY ppl, LETS learn JAVASCRIPT together SOMETIME"*/

const changeWordCase = str => {
    let index = 0; 
    return str.toLowerCase().split(' ').map((i) => {
        index++; 
        if (i.length > 0 && index%2 === 1) {
            return i.toUpperCase();
        } return i.toLowerCase(); 
    }).join(' '); 
  } 

/*ex3
Faceti asftel incat toate variabilele de mai jos sa returneze ceea ce zice numele*/ 

const arr = [
    {name:'sasha', sex:'f', age:7, species:'cat'},
    {name:'john', sex:'m', age:133, species:'human'},
    {name:'titus', sex:'m', age:62, species:'human'},
    {name: 'kalifa', sex:'f', age:255, species:'human'},
    {name: 'oreo', sex:'m', age:21, species:'cat'},
    ];
    
const allCats = arr => {
    return arr.filter((animal) => {
            return animal.species === 'cat'
    });  
}

const allHumans =  arr => {
    return arr.filter((human) => {
        return human.species === 'human'
    }); 
}

const allFemales =  arr => {
    return arr.filter((women) => {
        return women.sex === 'f'
    }); 
}

const totalOfAllAges = arr => {
    return arr.reduce((prev, value) => {
        return prev + value.age 
    }, 0); 
}
//let averageAgeOfCats = code
// let averageAgeOfHumans = code
// let avgLengthOfNames = code
  

