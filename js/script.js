
const images = [
  "https://images.unsplash.com/photo-1501117716987-c8e1ecb210b5",
  "https://images.unsplash.com/photo-1566073771259-6a8506099945",
  "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa"
];

let i = 0;

setInterval(() => {
  i = (i + 1) % images.length;
  document.getElementById("slide").src = images[i];
}, 3000);

function searchHotel() {
  alert("Search feature coming soon 😎");
}
<script>
function sendWhatsApp() {
  var name = document.getElementById("name").value;
  var phone = document.getElementById("phone").value;
  var hotel = document.getElementById("hotel").value;
  var checkin = document.getElementById("checkin").value;
  var checkout = document.getElementById("checkout").value;

  var message = "New Booking:%0A"
              + "Name: " + name + "%0A"
              + "Phone: " + phone + "%0A"
              + "Hotel: " + hotel + "%0A"
              + "Check-in: " + checkin + "%0A"
              + "Check-out: " + checkout;

  var whatsappUrl = "https://wa.me/91YOURNUMBER?text=" + message;

  window.open(whatsappUrl, "_blank");
}
</script>
