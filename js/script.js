$(document).ready(function () {

    // ================= MOBILE MENU =================
    $("#menu-btn").click(function () {
        $("#mobile-menu").slideToggle(300);
    });

    // Close mobile menu when clicking a link
    $("#mobile-menu a").click(function () {
        $("#mobile-menu").slideUp(300);
    });


    // ================= HERO GSAP ANIMATION =================
    gsap.from("#hero-title", {
        duration: 1,
        y: -50,
        opacity: 0,
        ease: "power3.out"
    });

    gsap.from("#hero-text", {
        duration: 1,
        y: 30,
        opacity: 0,
        delay: 0.5,
        ease: "power3.out"
    });

    gsap.from("#hero-btn", {
        duration: 1,
        scale: 0.8,
        opacity: 0,
        delay: 1,
        ease: "back.out(1.7)"
    });


    // ================= FLEET SLIDER DOT SCROLL =================
    $(".dot").click(function () {
        let index = $(this).index();
        let cardWidth = $("#fleet-slider .min-w-[300px]").outerWidth(true);

        $("#fleet-slider").animate({
            scrollLeft: index * cardWidth
        }, 500);

        updateActiveDot(index);
    });

    function updateActiveDot(index) {
        $(".dot")
            .removeClass("bg-green-600")
            .addClass("bg-gray-300");

        $(".dot").eq(index)
            .removeClass("bg-gray-300")
            .addClass("bg-green-600");
    }

    // Auto update active dot while scrolling
    $("#fleet-slider").on("scroll", function () {
        let cardWidth = $("#fleet-slider .min-w-[300px]").outerWidth(true);
        let scrollLeft = $(this).scrollLeft();
        let index = Math.round(scrollLeft / cardWidth);
        updateActiveDot(index);
    });


    // ================= FLEET CARD ANIMATION =================
    gsap.from("#fleet-slider div", {
        scrollTrigger: {
            trigger: "#fleet-slider",
            start: "top 80%"
        },
        duration: 1,
        y: 50,
        opacity: 0,
        stagger: 0.2,
        ease: "power2.out"
    });


    // ================= COUNTER ANIMATION (ONLY WHEN VISIBLE) =================
    let counterStarted = false;

    function startCounter() {
        if (counterStarted) return;

        $(".counter").each(function () {
            let $this = $(this);
            let target = parseInt($this.attr("data-target"));

            $({ countNum: 0 }).animate(
                { countNum: target },
                {
                    duration: 2000,
                    easing: "swing",
                    step: function () {
                        $this.text(Math.floor(this.countNum));
                    },
                    complete: function () {
                        $this.text(target + "+");
                    }
                }
            );
        });

        counterStarted = true;
    }

    // Trigger counter when section visible
    $(window).on("scroll", function () {
        let counterOffset = $(".counter").offset()?.top;
        let scrollTop = $(window).scrollTop();
        let windowHeight = $(window).height();

        if (counterOffset && scrollTop + windowHeight > counterOffset) {
            startCounter();
        }
    });


    // ================= ABOUT ANIMATION =================
    gsap.from(".about-img", {
        duration: 1,
        x: -80,
        opacity: 0,
    });

    gsap.from(".about-content", {
        duration: 1,
        x: 80,
        opacity: 0,
        delay: 0.3,
    });

    // ================= SERVICES ANIMATION =================
    gsap.from(".service-item", {
        scrollTrigger: {
            trigger: ".service-item",
            start: "top 85%",
        },
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
    });

    gsap.from(".service-image", {
        scrollTrigger: {
            trigger: ".service-image",
            start: "top 85%",
        },
        scale: 0.8,
        opacity: 0,
        duration: 1,
    });

    // ================= MANAGEMENT TEAM ANIMATION =================
    gsap.from(".team-card", {
        scrollTrigger: {
            trigger: ".team-card",
            start: "top 85%",
        },
        y: 60,
        opacity: 0,
        duration: 1,
        stagger: 0.3,
    });

    // ================= GALLERY ANIMATION =================
    gsap.from(".gallery-item", {
        scrollTrigger: {
            trigger: ".gallery-item",
            start: "top 85%",
        },
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
    });

    // ================= LOAD FOOTER =================
    if ($("#footer-section").length) {
        $("#footer-section").load("contact_us.html");
    }


    // ================= CLIENT FEEDBACK ANIMATION =================

    gsap.from(".feedback-card", {
        scrollTrigger: {
            trigger: "#feedback-wrapper",
            start: "top 80%",
        },
        y: 60,
        opacity: 0,
        duration: 1,
        stagger: 0.3,
        ease: "power2.out"
    });
    // ================= TEAM HOVER ANIMATION =================

    $(".team-hover-card").each(function () {

        let info = $(this).find(".team-info");

        $(this).on("mouseenter", function () {
            gsap.to(info, {
                y: 0,
                duration: 0.5,
                ease: "power3.out"
            });
        });

        $(this).on("mouseleave", function () {
            gsap.to(info, {
                y: "100%",
                duration: 0.5,
                ease: "power3.in"
            });
        });



    });



});