fetch ("http://localhost:3000/films")
.then(response => response.json())
.then(films => {
  films.forEach(film=>{
  const title= document.createElement("h1")
  title.innerHTML = film.title
  main.appendChild(title);
});
})

let capacity= 30;
let tickets_sold= 27;
document.getElementById("buyTickets").addEventListener("click", function() {
  myFunction(capacity, tickets_sold);
});

function myFunction(a, b) {
  document.getElementById("demo").innerHTML = a - b;
}

buyTicketsButton.addEventListener('click', buyTicket);
