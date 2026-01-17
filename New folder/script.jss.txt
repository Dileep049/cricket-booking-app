const API = "http://localhost:5000/api";

function book() {
  fetch(API + "/book", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      name: name.value,
      date: date.value,
      time: time.value
    })
  })
  .then(res => res.json())
  .then(() => loadBookings());
}

function loadBookings() {
  fetch(API + "/bookings")
    .then(res => res.json())
    .then(data => {
      list.innerHTML = "";
      data.forEach(b => {
        list.innerHTML += `<li>${b.name} - ${b.date} - ${b.time}</li>`;
      });
    });
}

loadBookings();
