//  var premierFF = fetch('https://imdb-api.com/en/API/Title/k_1193l47u/tt1375666')
// // http://www.omdbapi.com/?i=tt3896198&apikey=d6f44506

//     .then(response => response.json())
//     .then(data => console.log(data))
//     .catch((error) => console.log(error))


const data = 
[
  {
    "title": "All Fast & Furious Movies",
    "by": "thenerdofsuperstuff",
    "created": "17 Jul 2017",
    "updated": "17 Jul 2017",
    "description": "2001-2021",
    "items": [
      {
        "id": "tt0232500",
        "index": "1",
        "title": "The Fast and the Furious",
        "fullTitle": "The Fast and the Furious (2001)",
        "year": "2001",
        "image": "https://imdb-api.com/images/original/MV5BNzlkNzVjMDMtOTdhZC00MGE1LTkxODctMzFmMjkwZmMxZjFhXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_Ratio0.6800_AL_.jpg",
        "imDbRating": "6.8",
        "imDbRatingCount": "368822",
        "description": "Rob Cohen (dir.), Vin Diesel, Paul Walker"
      },
      {
        "id": "tt0322259",
        "index": "2",
        "title": "2 Fast 2 Furious",
        "fullTitle": "2 Fast 2 Furious (2003)",
        "year": "2003",
        "image": "https://imdb-api.com/images/original/MV5BMzExYjcyYWMtY2JkOC00NDUwLTg2OTgtMDI3MGY2OWQzMDE2XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_Ratio0.6800_AL_.jpg",
        "imDbRating": "5.9",
        "imDbRatingCount": "263603",
        "description": "John Singleton (dir.), Paul Walker, Tyrese Gibson"
      },
      {
        "id": "tt0463985",
        "index": "3",
        "title": "The Fast and the Furious: Tokyo Drift",
        "fullTitle": "The Fast and the Furious: Tokyo Drift (2006)",
        "year": "2006",
        "image": "https://imdb-api.com/images/original/MV5BMTQ2NTMxODEyNV5BMl5BanBnXkFtZTcwMDgxMjA0MQ@@._V1_Ratio0.6800_AL_.jpg",
        "imDbRating": "6",
        "imDbRatingCount": "258040",
        "description": "Justin Lin (dir.), Lucas Black, Zachery Ty Bryan"
      },
      {
        "id": "tt1013752",
        "index": "4",
        "title": "Fast & Furious",
        "fullTitle": "Fast & Furious (2009)",
        "year": "2009",
        "image": "https://imdb-api.com/images/original/MV5BYjQ1ZTMxNzgtZDcxOC00NWY5LTk3ZjAtYzRhMDhlNDZlOWEzXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_Ratio0.6800_AL_.jpg",
        "imDbRating": "6.6",
        "imDbRatingCount": "275657",
        "description": "Justin Lin (dir.), Vin Diesel, Paul Walker"
      },
      {
        "id": "tt1596343",
        "index": "5",
        "title": "Fast Five",
        "fullTitle": "Fast Five (2011)",
        "year": "2011",
        "image": "https://imdb-api.com/images/original/MV5BMTUxNTk5MTE0OF5BMl5BanBnXkFtZTcwMjA2NzY3NA@@._V1_Ratio0.6800_AL_.jpg",
        "imDbRating": "7.3",
        "imDbRatingCount": "367720",
        "description": "Justin Lin (dir.), Vin Diesel, Paul Walker"
      },
      {
        "id": "tt1905041",
        "index": "6",
        "title": "Fast & Furious 6",
        "fullTitle": "Fast & Furious 6 (2013)",
        "year": "2013",
        "image": "https://imdb-api.com/images/original/MV5BMTM3NTg2NDQzOF5BMl5BanBnXkFtZTcwNjc2NzQzOQ@@._V1_Ratio0.6800_AL_.jpg",
        "imDbRating": "7",
        "imDbRatingCount": "382216",
        "description": "Justin Lin (dir.), Vin Diesel, Paul Walker"
      },
      {
        "id": "tt2820852",
        "index": "7",
        "title": "Furious 7",
        "fullTitle": "Furious 7 (2015)",
        "year": "2015",
        "image": "https://imdb-api.com/images/original/MV5BMTQxOTA2NDUzOV5BMl5BanBnXkFtZTgwNzY2MTMxMzE@._V1_Ratio0.6800_AL_.jpg",
        "imDbRating": "7.1",
        "imDbRatingCount": "375674",
        "description": "James Wan (dir.), Vin Diesel, Paul Walker"
      },
      {
        "id": "tt4630562",
        "index": "8",
        "title": "The Fate of the Furious",
        "fullTitle": "The Fate of the Furious (2017)",
        "year": "2017",
        "image": "https://imdb-api.com/images/original/MV5BMjMxODI2NDM5Nl5BMl5BanBnXkFtZTgwNjgzOTk1MTI@._V1_Ratio0.6800_AL_.jpg",
        "imDbRating": "6.6",
        "imDbRatingCount": "219897",
        "description": "F. Gary Gray (dir.), Vin Diesel, Jason Statham"
      },
      {
        "id": "tt5433138",
        "index": "9",
        "title": "F9: The Fast Saga",
        "fullTitle": "F9: The Fast Saga (2021)",
        "year": "2021",
        "image": "https://imdb-api.com/images/original/MV5BMjI0NmFkYzEtNzU2YS00NTg5LWIwYmMtNmQ1MTU0OGJjOTMxXkEyXkFqcGdeQXVyMjMxOTE0ODA@._V1_Ratio0.6800_AL_.jpg",
        "imDbRating": "5.2",
        "imDbRatingCount": "97877",
        "description": "Justin Lin (dir.), Vin Diesel, Michelle Rodriguez"
      },
      {
        "id": "tt5433140",
        "index": "10",
        "title": "Fast & Furious 10",
        "fullTitle": "Fast & Furious 10 (2023)",
        "year": "2023",
        "image": "https://imdb-api.com/images/original/nopicture.jpg",
        "imDbRating": "-",
        "imDbRatingCount": "",
        "description": "Justin Lin (dir.), Vin Diesel"
      }
    ],
    "errorMessage": ""
  }
]


// const id = ['tt0232500', 'tt1013752', 'tt8322592', 'tt5433138', 'tt6806448', 'tt2820852', 'tt4630562', 'tt1905041', 'tt5433140'];

// const url = 'https://imdb-api.com/en/API/IMDbList/k_o11b3dd8/ls068935667';

// const urlDirector = 'https://imdb-api.com/fr/API/Title/k_1193l47u/tt0232500/FullActor,FullCast,Posters,Images,Trailer,Ratings,';

    function film(url) {

      // console.log(url);
        // fetch(url)
        // http://www.omdbapi.com/?i=tt3896198&apikey=d6f44506

            // .then(res => res.json())
            // .then((data) =>  {

                console.log(data);
                console.log(data.items);

                data[0].items.forEach(element => {


                    // console.log(element.id)
                    console.log(element.title)
                    console.log(element.image)
                    console.log(element.year)
                    console.log(element.description)

                    // Creation tableau par film
                    let contain = document.getElementById('contain')

                    let c1 = document.getElementById('ff1')
                    let c2 = document.getElementById('ff2')
                    let c3 = document.getElementById('ff3')
                    let c4 = document.getElementById('ff4')

                    let img = document.createElement('img');
                    let titre = document.createElement('td');
                    let date = document.createElement('td');
                    let realisateur = document.createElement('td');
    

                    // Insert value
                    titre.innerHTML = element.title;
                    img.src = element.image;
                    date.innerHTML = element.year;
                    realisateur.innerHTML = element.description;
 
                    contain.append(c1, c2, c3, c4);

                    // Column
                    
                    c1.appendChild(img);
                    c2.appendChild(titre);
                    c3.appendChild(date);
                    c4.appendChild(realisateur);

                    // Condition 1

                    // const sorti = parseInt(element.description);

                    // console.log(sorti);

                    if(element.year < 2015){
                        document.getElementById('ff3').style.color = 'blue';
                    }
                 })
            // })
          }

    film(data);