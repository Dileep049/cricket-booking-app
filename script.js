const API = "http://localhost:3000";

async function book() {
    // Input IDs ni direct ga grab chestunnam
    const nameValue = document.getElementById('name').value;
    const dateValue = document.getElementById('date').value;
    const timeValue = document.getElementById('time').value;

    try {
        const res = await fetch(API + "/bookings", { // "/book" ni "/bookings" ga marcharu
            method: "POST",
            headers: { "Content-Type": "application/json" },

            // --- script.js loni book() function lo ---
body: JSON.stringify({
    customerName: nameValue, // database schema ki match avvali
    matchDate: dateValue,   //
    tickets: timeValue      //
})  
      });

        const data = await res.json();
        alert(data.message);
        loadBookings(); // Booking ayyaka list refresh chestundi
    } catch (err) {
        console.error("Error booking:", err);
    }
}

async function loadBookings() {
    const list = document.getElementById('list'); // Mee HTML lo id="list"
    try {
        const res = await fetch(API + "/bookings");
        const data = await res.json();
        
        list.innerHTML = "";
        data.forEach(b => {
// Database schema names (customerName, matchDate, tickets) vaadaali
list.innerHTML += `<li>${b.customerName} - ${new Date(b.matchDate).toLocaleDateString()} - ${b.tickets}</li>`;

        });
    } catch (err) {
        console.error("Error loading:", err);
    }
}

// Page open avvagane bookings chupisthundi
loadBookings();