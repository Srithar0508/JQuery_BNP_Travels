// Mobile menu
$("#menu-btn").click(function () {
    $("#mobile-menu").slideToggle();
});

// GSAP Animation
gsap.from("#hero-title", {
    duration: 1,
    y: -50,
    opacity: 0
});

gsap.from("#hero-text", {
    duration: 1,
    y: 30,
    opacity: 0,
    delay: 0.5
});

gsap.from("#hero-btn", {
    duration: 1,
    scale: 0.8,
    opacity: 0,
    delay: 1
});

// Scroll by dots
$(".dot").click(function () {
    let index = $(this).index();
    let cardWidth = $("#fleet-slider .min-w-[300px]").outerWidth(true);
    $("#fleet-slider").animate({
        scrollLeft: index * cardWidth
    }, 500);

    $(".dot").removeClass("bg-green-600").addClass("bg-gray-300");
    $(this).removeClass("bg-gray-300").addClass("bg-green-600");
});

// GSAP animation
gsap.from("#fleet-slider div", {
    duration: 1,
    y: 50,
    opacity: 0,
    stagger: 0.2
});

// Load Footer
$("#footer-section").load("contact_us.html");