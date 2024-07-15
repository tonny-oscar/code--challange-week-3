fetch("http://localhost:3000/films/1")
  .then(response => response.json())
  .then(films =>
    films.map(film => {
      const title = document.createElement("h1")
      title.innerHTML = film.title
      main.appendChild(h1)
    })
  );