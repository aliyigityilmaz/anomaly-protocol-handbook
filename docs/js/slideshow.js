document.addEventListener("DOMContentLoaded", function () {

    // ================= SLIDESHOW =================

    const slides = document.querySelectorAll(".details-slideshow .slide");
    let current = 0;
    let slideInterval;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.toggle("active", i === index);
        });
    }

    function startAutoSlide() {
        slideInterval = setInterval(() => {
            current = (current + 1) % slides.length;
            showSlide(current);
        }, 3000);
    }

    function resetAutoSlide() {
        clearInterval(slideInterval);
        startAutoSlide();
    }

    if (slides.length > 0) {
        showSlide(current);
        startAutoSlide();

        const slideshow = document.querySelector(".details-slideshow");

        slideshow.addEventListener("click", () => {
            current = (current + 1) % slides.length;
            showSlide(current);
            resetAutoSlide();
        });
    }

    // ================= SMOOTH SCROLL =================

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();

            const target = document.querySelector(this.getAttribute("href"));
            if (target) {
                target.scrollIntoView({
                    behavior: "smooth"
                });
            }
        });
    });

    // ================= POSTER MODAL =================

    const poster = document.querySelector(".art-section .trailer-poster");
    const modal = document.getElementById("posterModal");

    if (poster && modal) {

        poster.addEventListener("click", function () {
            modal.classList.add("active");
            document.body.style.overflow = "hidden";
        });

        modal.addEventListener("click", function () {
            modal.classList.remove("active");
            document.body.style.overflow = "auto";
        });

        // ESC tuşuyla kapatma (bonus)
        document.addEventListener("keydown", function (e) {
            if (e.key === "Escape") {
                modal.classList.remove("active");
                document.body.style.overflow = "auto";
            }
        });
    }

});
