const container = document.querySelector(".container");
const seats = document.querySelectorAll(".row .seat:not(.occupied)");
const count = document.getElementById("count");
const total = document.getElementById("total");
const movieSelect = document.getElementById("movie");

let ticketPrice = +movieSelect.value; // + turn string into number

console.log(typeof ticketPrice); //string

// update total and count
function updateSelectedCount() {
  const selectedSeats = document.querySelectorAll(".row .seat.selected");

  console.log(selectedSeats); // this will add all selected seats into a node list

  const selectedSeatsCount = selectedSeats.length;

  count.innerText = selectedSeatsCount;
  total.innerText = ticketPrice * selectedSeatsCount;
}

// Movie Select Event

movieSelect.addEventListener("change", (e) => {
  ticketPrice = e.target.value;
  updateSelectedCount();
});

// Seat Click Event
container.addEventListener("click", (e) => {
  if (
    e.target.classList.contains("seat") &&
    !e.target.classList.contains("occupied")
  ) {
    e.target.classList.toggle("selected");

    updateSelectedCount();
  }

  //console.log(e.target);
});
