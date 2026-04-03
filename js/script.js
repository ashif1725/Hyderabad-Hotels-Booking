
// Sample hotels data
const hotels = [
  {
    name: "Hotel Sunrise",
    location: "Banjara Hills, Hyderabad",
    price: 2500,
    image: "images/hotel1.jpg"
  },
  {
    name: "Hotel Blue Sky",
    location: "Hitech City, Hyderabad",
    price: 3000,
    image: "images/hotel2.jpg"
  },
  {
    name: "Hotel Green Leaf",
    location: "Gachibowli, Hyderabad",
    price: 2000,
    image: "images/hotel3.jpg"
  }
];

// Function to display hotels dynamically
const hotelsList = document.getElementById("hotels-list");

hotels.forEach(hotel => {
  const div = document.createElement("div");
  div.innerHTML = `
    <h3>${hotel.name}</h3>
    <p>Location: ${hotel.location}</p>
    <p>Price: ₹${hotel.price}/night</p>
    <img src="${hotel.image}" alt="${hotel.name}" style="width:100%; max-width:300px; border-radius:5px; margin-top:5px;">
    <button onclick="bookHotel('${hotel.name}')">Book Now</button>
  `;
  hotelsList.appendChild(div);
});

// Booking function (simple alert)
function bookHotel(hotelName) {
  const userName = prompt("Enter your name to book " + hotelName);
  if(userName) {
    alert(`Thank you ${userName}! Your booking for ${hotelName} is confirmed.`);
  } else {
    alert("Booking cancelled!");
  }
}
