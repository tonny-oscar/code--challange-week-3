const main = document.getElementById('main'); 
const buyTicketsButton = document.getElementById('buyTicketsButton');

fetch ("http://localhost:3000/films")
.then(response => response.json())
.then(films => {
  films.forEach(film=>{
  const title= document.createElement("h1")
  title.innerHTML = film.title
  main.appendChild(title);
});
})
function availableTickets(){
  const capacity= capacity;
  const ticketsSold= tickets_sold;
  const availableTickets=capacity - tickets_sold;
  return availableTickets;
}

function buyTickets() {
  const ticketsAvailable = availableTickets();
  if (ticketsAvailable > 0) {
    console.log("Buying 1 ticket");
  } else {
    console.log("No tickets available");
    }
}
buyTicketsButton.addEventListener('click', buyTickets);
