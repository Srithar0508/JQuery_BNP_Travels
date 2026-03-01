$(document).ready(function () {

    // ================= MOBILE MENU =================
    $("#menu-btn").click(function () {
        $("#mobile-menu").slideToggle(300);
    });

    // Close mobile menu when clicking a link
    $("#mobile-menu a").click(function () {
        $("#mobile-menu").slideUp(300);
    });

    // ================= SERVICES DATA =================
    const services = {
        cab: {
            title: "Cab Services",
            text: "Premium cab services with professional drivers ensuring safety, comfort, and punctuality for every journey.",
            image: "images/cabservices.svg"
        },
        bus: {
            title: "Bus Services",
            text: "Comfortable and spacious buses ideal for corporate and group travel needs.",
            image: "images/fleet3.svg"
        },
        outstation: {
            title: "Outstation Travels",
            text: "Reliable long-distance travel services with well-maintained vehicles.",
            image: "images/fleet2.svg"
        },
        employee: {
            title: "Employee Transport",
            text: "Efficient employee transportation solutions with route optimization.",
            image: "images/fleet1.svg"
        },
        airport: {
            title: "Airport Taxi Services",
            text: "On-time airport pickups and drop-offs with professional chauffeurs.",
            image: "images/fleet3.svg"
        }
    };


    // ================= TAB CLICK =================
    $(".service-tab").click(function () {

        let serviceKey = $(this).data("service");

        // Change active tab
        $(".service-tab").removeClass("active-tab");
        $(this).addClass("active-tab");

        // GSAP OUT ANIMATION
        gsap.to("#service-content", {
            opacity: 0,
            y: 30,
            duration: 0.4,
            onComplete: function () {

                // Change content
                $("#service-title").text(services[serviceKey].title);
                $("#service-text").text(services[serviceKey].text);
                $("#service-image").attr("src", services[serviceKey].image);

                // GSAP IN ANIMATION
                gsap.fromTo("#service-content",
                    { opacity: 0, y: -30 },
                    { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" }
                );
            }
        });

    });

    // ================= GET SERVICE FROM URL =================
    function getServiceFromURL() {
        const params = new URLSearchParams(window.location.search);
        return params.get("service");
    }

    let selectedService = getServiceFromURL();

    if (selectedService && services[selectedService]) {

        // Remove default active tab
        $(".service-tab").removeClass("active-tab");

        // Add active class to selected tab
        $('.service-tab[data-service="' + selectedService + '"]')
            .addClass("active-tab");

        // Update content directly
        $("#service-title").text(services[selectedService].title);
        $("#service-text").text(services[selectedService].text);
        $("#service-image").attr("src", services[selectedService].image);
    }
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
    // Contact Us
    gsap.from("#contactForm input, #contactForm select, #contactForm textarea", {
        scrollTrigger: {
            trigger: "#contactForm",
            start: "top 85%",
        },
        y: 40,
        opacity: 0,
        duration: 1,
        stagger: 0.1,
        ease: "power3.out"
    });

    gsap.from("#contactForm button", {
        scrollTrigger: {
            trigger: "#contactForm",
            start: "top 85%",
        },
        scale: 0.8,
        opacity: 0,
        duration: 1,
        delay: 0.3,
        ease: "back.out(1.7)",
    });

    $("#contactForm").submit(function (e) {
        e.preventDefault();

        let isValid = true;

        let name = $("#name");
        let email = $("#email");

        $(".error-text").addClass("hidden");
        $(".form-input").removeClass("border border-red-500");

        if (name.val().trim() === "") {
            name.addClass("border border-red-500");
            name.next(".error-text").removeClass("hidden");
            isValid = false;
        }

        if (email.val().trim() === "") {
            email.addClass("border border-red-500");
            email.next(".error-text").removeClass("hidden");
            isValid = false;
        }

        if (isValid) {
            alert("Form submitted successfully!");
            this.reset();
        }
    });

    // ================= MAP INFO BAR ANIMATION =================
    gsap.from(".info-box", {
        scrollTrigger: {
            trigger: ".info-box",
            start: "top 85%",
        },
        y: 80,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out"
    });

    // ================= SERVICES AUTO SLIDER =================
    let slider = document.getElementById("service-slider");
    let cards = document.querySelectorAll(".service-card");

    let cardWidth = cards[0].offsetWidth + 32; // 32 = gap-8
    let currentIndex = 0;

    function autoSlide() {
        currentIndex++;

        if (currentIndex > cards.length - 3) {
            currentIndex = 0;
        }

        gsap.to(slider, {
            x: -(cardWidth * currentIndex),
            duration: 1,
            ease: "power3.inOut"
        });
    }

    // Auto scroll every 3 seconds
    setInterval(autoSlide, 3000);


    // ================= ENTRY ANIMATION =================
    gsap.from(".service-card", {
        scrollTrigger: {
            trigger: "#service-slider",
            start: "top 85%"
        },
        y: 60,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out"
    });

    // ================= WHY CHOOSE US ANIMATION =================

    // Main reveal animation
    gsap.from(".why-img-main", {
        scrollTrigger: {
            trigger: ".why-img-main",
            start: "top 85%"
        },
        scale: 0,
        rotation: 180,
        opacity: 0,
        duration: 1.5,
        ease: "back.out(1.7)"
    });

    gsap.from(".why-img-small1", {
        scrollTrigger: {
            trigger: ".why-img-small1",
            start: "top 85%"
        },
        x: -100,
        y: 50,
        opacity: 0,
        duration: 1.2,
        delay: 0.3,
        ease: "power3.out"
    });

    gsap.from(".why-img-small2", {
        scrollTrigger: {
            trigger: ".why-img-small2",
            start: "top 85%"
        },
        x: 100,
        y: 50,
        opacity: 0,
        duration: 1.2,
        delay: 0.5,
        ease: "power3.out"
    });


    // Floating continuous animation
    gsap.to(".why-img-small1", {
        y: -15,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
    });

    gsap.to(".why-img-small2", {
        y: -20,
        duration: 2.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
    });

    gsap.to(".why-img-main", {
        y: -10,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
    });



});