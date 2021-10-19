// const id = ['tt0232500', 'tt1013752', 'tt8322592', 'tt5433138', 'tt6806448', 'tt2820852', 'tt4630562', 'tt1905041', 'tt5433140'];

const url = 'https://imdb-api.com/en/API/IMDbList/k_o11b3dd8/ls068935667';

    function film(url) {

        fetch(url)

            .then(res => res.json())
            .then((data) =>  {

                // console.log(data);
                console.log(data.items);

                data.items.forEach(element => {

                    // console.log(element.id)
                    // console.log(element.title)
                    // console.log(element.image)
                    // console.log(element.year)
                    // console.log(element.description)

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
                    const myArr = element.description.split(", ")
                    realisateur.innerHTML = myArr[0];

                    contain.append(c1, c2, c3, c4);

                    // Column
                    
                    c1.appendChild(img);
                    c2.appendChild(titre);
                    c3.appendChild(date);
                    c4.appendChild(realisateur);


                    // Condition 1
                    
                    if(element.year < "2015"){
                        date.style.color = 'blue';
                    }

                    // Find Paul Walker // Condition 2

                    let actorsList = element.description.split(", ");
                    // console.log(actorsList);

                    var searchVal = "Paul Walker";

                      for (var i=0 ; i < actorsList.length; i++)
                      {
                          if (actorsList[i] == searchVal) {
                              titre.style.backgroundColor = 'green';
                          }
                      }
                 })
            })
          }

    film(url);