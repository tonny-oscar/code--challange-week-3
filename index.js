

fetch ("http://localhost:3000/films")
.then(response => response.json())
.then(films => {
  films.forEach(film=>{
  const title= document.createElement("h1")
  title.innerHTML = film.title
  main.appendChild(title);
});
})
const main = document.getElementById('main') 
const buyTicketsButton = document.getElementById('buyTicketsButton');

function myFunction(){
  var x =document.getElementById("mySpan");
  document.getElementById("demo").innerHTML = x;
}

function availableTickets(){
  const capacity = "capacity";
  const tickets_sold = "tickets_sold";
  const availableTickets = capacity - tickets_sold;
  return availableTickets;
}

function buyTickets() {
  const availableTickets = availableTickets();
  if (availableTickets > 0) {
    console.log("Buying 1 ticket!");
  } else {
    console.log("No tickets available!");
    }
}

buyTicketsButton.addEventListener('click', buyTickets);
