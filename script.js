let index = 0;
const track = document.querySelector(".carousel-track");
const slides = document.querySelectorAll(".carousel img");

function slideCarousel() {
    index = (index + 1) % slides.length;
    track.style.transform = `translateX(-${index * 100}%)`;
}

setInterval(slideCarousel, 3000);
function sendWhatsApp() {
    let name = document.getElementById("name").value;
    let company = document.getElementById("company").value;
    let phone = document.getElementById("phone").value;
    let city = document.getElementById("city").value;
    let message = document.getElementById("message").value;

    let text = `New Exhibition Enquiry:%0A
Name: ${name}%0A
Company: ${company}%0A
Phone: ${phone}%0A
City: ${city}%0A
Requirement: ${message}`;

    window.open(`https://wa.me/918882737989?text=${text}`, "_blank");
}
