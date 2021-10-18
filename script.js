//  var premierFF = fetch('https://imdb-api.com/en/API/Title/k_1193l47u/tt1375666')
// // http://www.omdbapi.com/?i=tt3896198&apikey=d6f44506

//     .then(response => response.json())
//     .then(data => console.log(data))
//     .catch((error) => console.log(error))


const data = 
[
    {
    "searchType": "Title",
    "expression": "fast & furious",
    "results": [
      {
        "id": "tt0232500",
        "resultType": "Title",
        "image": "https://imdb-api.com/images/original/MV5BNzlkNzVjMDMtOTdhZC00MGE1LTkxODctMzFmMjkwZmMxZjFhXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_Ratio0.7273_AL_.jpg",
        "title": "The Fast and the Furious",
        "description": "(2001) aka \"Fast & Furious\""
      },
      {
        "id": "tt1013752",
        "resultType": "Title",
        "image": "https://imdb-api.com/images/original/MV5BYjQ1ZTMxNzgtZDcxOC00NWY5LTk3ZjAtYzRhMDhlNDZlOWEzXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_Ratio0.7273_AL_.jpg",
        "title": "Fast & Furious",
        "description": "(2009)"
      },
      {
        "id": "tt8322592",
        "resultType": "Title",
        "image": "https://imdb-api.com/images/original/MV5BYTdmYjFiZTYtZGZlZi00YTBjLWIxYmItYTQ5OWNiZmM5MzczXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_Ratio0.7273_AL_.jpg",
        "title": "Fast & Furious Spy Racers",
        "description": "(2019) (TV Series)"
      },
      {
        "id": "tt5433138",
        "resultType": "Title",
        "image": "https://imdb-api.com/images/original/MV5BMjI0NmFkYzEtNzU2YS00NTg5LWIwYmMtNmQ1MTU0OGJjOTMxXkEyXkFqcGdeQXVyMjMxOTE0ODA@._V1_Ratio0.7273_AL_.jpg",
        "title": "F9: The Fast Saga",
        "description": "(2021) aka \"Fast & Furious 9\""
      },
      {
        "id": "tt0463985",
        "resultType": "Title",
        "image": "https://imdb-api.com/images/original/MV5BMTQ2NTMxODEyNV5BMl5BanBnXkFtZTcwMDgxMjA0MQ@@._V1_Ratio0.7273_AL_.jpg",
        "title": "The Fast and the Furious: Tokyo Drift",
        "description": "(2006) aka \"Fast & Furious: Tokyo Drift\""
      },
      {
        "id": "tt6806448",
        "resultType": "Title",
        "image": "https://imdb-api.com/images/original/MV5BOTIzYmUyMmEtMWQzNC00YzExLTk3MzYtZTUzYjMyMmRiYzIwXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_Ratio0.7273_AL_.jpg",
        "title": "Fast & Furious Presents: Hobbs & Shaw",
        "description": "(2019)"
      },
      {
        "id": "tt2820852",
        "resultType": "Title",
        "image": "https://imdb-api.com/images/original/MV5BMTQxOTA2NDUzOV5BMl5BanBnXkFtZTgwNzY2MTMxMzE@._V1_Ratio0.7273_AL_.jpg",
        "title": "Furious 7",
        "description": "(2015) aka \"Fast & Furious 7\""
      },
      {
        "id": "tt4630562",
        "resultType": "Title",
        "image": "https://imdb-api.com/images/original/MV5BMjMxODI2NDM5Nl5BMl5BanBnXkFtZTgwNjgzOTk1MTI@._V1_Ratio0.7273_AL_.jpg",
        "title": "The Fate of the Furious",
        "description": "(2017) aka \"Fast & Furious 8\""
      },
      {
        "id": "tt1905041",
        "resultType": "Title",
        "image": "https://imdb-api.com/images/original/MV5BMTM3NTg2NDQzOF5BMl5BanBnXkFtZTcwNjc2NzQzOQ@@._V1_Ratio0.7273_AL_.jpg",
        "title": "Fast & Furious 6",
        "description": "(2013)"
      },
      {
        "id": "tt5433140",
        "resultType": "Title",
        "image": "https://imdb-api.com/images/original/nopicture.jpg",
        "title": "Fast & Furious 10",
        "description": "(2023)"
      }
    ],
    "errorMessage": ""
  }
]

// const id = ['tt0232500', 'tt1013752', 'tt8322592', 'tt5433138', 'tt6806448', 'tt2820852', 'tt4630562', 'tt1905041', 'tt5433140'];

// const url = 'https://imdb-api.com/en/API/SearchTitle/k_1193l47u/fast%20&%20furious';

// const urlDirector = 'https://imdb-api.com/fr/API/Title/k_1193l47u/tt0232500/FullActor,FullCast,Posters,Images,Trailer,Ratings,';

        // const producteur = document.createElement('realise');

    function film(url) {

        // console.log(url);

        // console.log("fdjhs");
        // fetch(url)
        // // http://www.omdbapi.com/?i=tt3896198&apikey=d6f44506

            // .then(res => res.json())
            // .then((data) =>  {

        //   console.log(data);

            console.log(data.results);

                data[0].results.forEach(element => {

                    // const director = fetch(element.id)
                    // .then(v => return v.director)

                    // console.log(element.id)
                    console.log(element.title)
                    console.log(element.image)
                    console.log(element.description)

                    // Creation tableau par film
                    let contain = document.getElementById('contain')

                    let c1 = document.getElementById('ff1')
                    let c2 = document.getElementById('ff2')
                    let c3 = document.getElementById('ff3')

                    
                    let img = document.createElement('img');
                    let titre = document.createElement('h3');
                    let date = document.createElement('p');
    
                    // Insert value
                    titre.innerHTML = element.title;
                    img.src = element.image;
                    date.innerHTML = element.description;
                    
                    contain.append(c1, c2, c3);

                    // Column
                    
                    c1.appendChild(img);
                    c2.appendChild(titre);
                    c3.appendChild(date);

                    // const sorti = parseInt(element.description);

                    // console.log(print(sorti));

                    // if(sorti.includes("2015")){
                    //     document.getElementById('ff3').style.backgroundColor = 'blue';
                    // }
                 })
            // })

                // fetch(urlDirector)
                //   .then(res => res.json())
                //   .then((data) =>  { 
                      
                //     data.results.forEach(item => {

                //         console.log(element.director)


                //         let c4 = document.getElementById('ff4')
                        
                //         let realise = document.createElement('p');
                        

                //         realise.innerHTML = element.director;
                        

                //         contain.append(c4);


                //         c4.appendChild(director);

                //       })
                //   })
    }

    film(data);