fetch('https://swapi-api.hbtn.io/api/films/?format=json')
    .then((response) => response.json())
    .then((data) => {
        const filmTitles = data.results.map((film) => film.title);
        const filmList = document.querySelector('#list_movies');
        filmTitles.forEach((title) => {
            const listItem = document.createElement('li');
            listItem.textContent = title;
            filmList.appendChild(listItem);
        });
    }
    )
    .catch((error) => {
        console.error('Error fetching data:', error);
    });