// SLIDESHOW SCRIPT

const slides = document.querySelectorAll(".details-slideshow .slide");
let current = 0;

// Gösterim fonksiyonu
function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.toggle("active", i === index);
    });
}

// Otomatik geçiş
let slideInterval = setInterval(() => {
    current = (current + 1) % slides.length;
    showSlide(current);
}, 3000); // 3 saniyede bir

// Tıklama ile geçiş
document.querySelector(".details-slideshow").addEventListener("click", () => {
    clearInterval(slideInterval); // otomatik geçiş durdur
    current = (current + 1) % slides.length;
    showSlide(current);

    // 3 saniye sonra tekrar otomatik geçiş başlasın
    slideInterval = setInterval(() => {
        current = (current + 1) % slides.length;
        showSlide(current);
    }, 3000);
});


// SMOOTH SCROLL FOR "ABOUT" LINK
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault(); // normal jump'u engelle

        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'  // burada smooth scroll uygulanıyor
            });
        }
    });
});
