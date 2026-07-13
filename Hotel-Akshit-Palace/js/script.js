const searchButton = document.querySelector(".search-btn");

searchButton.addEventListener("click", () => {

    alert("Room search feature will be available soon!");

});
// =========================
// MOBILE MENU
// =========================

const menu = document.getElementById("menu-toggle");

const nav = document.getElementById("nav-links");

menu.addEventListener("click",()=>{

    nav.classList.toggle("active");

});
// =========================
// SCROLL REVEAL
// =========================

const reveals = document.querySelectorAll(".reveal");

function revealOnScroll(){

    reveals.forEach(section=>{

        const windowHeight = window.innerHeight;

        const top = section.getBoundingClientRect().top;

        const revealPoint = 120;

        if(top < windowHeight - revealPoint){

            section.classList.add("active");

        }

    });

}

window.addEventListener("scroll", revealOnScroll);

revealOnScroll();
// =========================
// GALLERY LIGHTBOX
// =========================

const galleryImages = document.querySelectorAll(".gallery-img");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const closeBtn = document.querySelector(".close-lightbox");

galleryImages.forEach(image => {

    image.addEventListener("click", () => {

        lightbox.classList.add("active");

        lightboxImg.src = image.src;

        lightboxImg.alt = image.alt;

    });

});

closeBtn.addEventListener("click", () => {

    lightbox.classList.remove("active");

});

lightbox.addEventListener("click", (e) => {

    if(e.target === lightbox){

        lightbox.classList.remove("active");

    }

});

document.addEventListener("keydown", (e) => {

    if(e.key === "Escape"){

        lightbox.classList.remove("active");

    }

});
// =========================
// SCROLL TO TOP
// =========================

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll",()=>{

    if(window.scrollY>400){

        topBtn.classList.add("show");

    }

    else{

        topBtn.classList.remove("show");

    }

});

topBtn.addEventListener("click",()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});
// =========================
// AOS INITIALIZATION
// =========================

AOS.init({

    duration:1000,

    once:true,

    offset:100,

    easing:"ease-in-out"

});
// Minimum Date

const today = new Date().toISOString().split("T")[0];

document.getElementById("checkin").min = today;
document.getElementById("checkout").min = today;
// =========================
// BOOKING FORM
// =========================

const bookBtn = document.getElementById("bookBtn");

bookBtn.addEventListener("click", () => {

    const checkin = document.getElementById("checkin").value;
    const checkout = document.getElementById("checkout").value;
    const guests = document.getElementById("guests").value;
    const room = document.getElementById("room").value;

    if (!checkin || !checkout || !guests || !room) {

        alert("Please fill all booking details.");

        return;

    }

    const message =
`Hello Hotel Akshit Palace,

I would like to book a room.

🏨 Room Type: ${room}
📅 Check In: ${checkin}
📅 Check Out: ${checkout}
👥 Guests: ${guests}

Please let me know the availability and price.

Thank you!`;

    const url =
`https://wa.me/918394091835?text=${encodeURIComponent(message)}`;

    window.open(url, "_blank");

});
