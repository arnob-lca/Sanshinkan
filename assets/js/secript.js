
    $('.single-item').slick({
        autoplay: true,
        dots: false,
        infinite: true,
        speed: 500,
        arrows: false,
    });






    $('.single-item-rtl').slick({
        dots: true,
        autoplay: true,
        arrows: true,
        speed: 500,
        prevArrow: $('.slick-prev-btn'),
        nextArrow: $('.slick-next-btn')
    });

    let slickPrevBtn = document.querySelector('.slick-prev-btn');
    let slickNextBtn = document.querySelector('.slick-next-btn');

    slickPrevBtn.style.display = '';
    slickNextBtn.style.display = '';






Fancybox.bind("[data-fancybox]", {
    // Your custom options go here
    infinite: true,
    transitionEffect: "fade",
});



let backToTop = document.getElementById("backToTop");

// Show button when scroll down
window.addEventListener("scroll", function () {
    if (window.scrollY > 300) {
        backToTop.style.display = "block";
    } else {
        backToTop.style.display = "none";
    }
});

// Scroll to top when clicked
backToTop.addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});