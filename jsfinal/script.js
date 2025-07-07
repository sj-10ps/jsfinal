const destinations = [
  "Paris", "New York", "Tokyo", "London", "Rome", "Dubai",
  "Singapore", "Bangkok", "Bali", "Sydney", "Cape Town"
];

function searchDestinations() {
  const input = document.getElementById("searchInput").value.toLowerCase();
  const resultBox = document.getElementById("results");
  resultBox.innerHTML = "";

  const filtered = destinations.filter(dest =>
    dest.toLowerCase().includes(input)
  );

  if (filtered.length === 0) {
    resultBox.innerHTML = "<li>No destinations found</li>";
    return;
  }

  filtered.forEach(dest => {
    const li = document.createElement("li");
    li.textContent = dest;
    resultBox.appendChild(li);
  });
}

function clearSearch() {
  document.getElementById("searchInput").value = "";
  document.getElementById("results").innerHTML = "";
}


function clickfun(){
    alert("booked")
}