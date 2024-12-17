
// gsap
document.addEventListener("DOMContentLoaded", function () {
    const nav = () => {
        gsap.from(".nav-left", {
            y: -100,
            duration: 0.8,
            opacity: 0,
            stagger: 0.5,
        })
        gsap.from(".nav-right", {
            y: -100,
            duration: 0.8,
            opacity: 0,
            stagger: 0.5,
        })
    }
    const menu = () => {
        let close = document.querySelector(".close");
        let btn = document.querySelector(".nav-right");

        var tl = gsap.timeline();
        tl.to(".menu", {
            top: 0,
            duration: 0.6,
        })
        tl.from(".menu-project-video video", {
            x: -500,
            duration: 0.4,
            stagger: 0.3,
            opacity: 0,
        })
        tl.from(".project-details", {
            y: -30,
            duration: 0.2,
            stagger: 0.3,
            opacity: 0,

        })
        tl.from(".menu-copyright-block", {
            x: 30,
            duration: 0.2,
            stagger: 0.3,
            opacity: 0,
        })
        tl.from(".menu-right li a", {
            y: "100%",
            duration: 0.7,
            stagger: 0.2,
            opacity: 0,
        }, "-=0.5")
        tl.pause()
        btn.addEventListener("click", function (e) {
            tl.play();
        });
        close.addEventListener("click", () => {
            tl.reverse();
        })
    }
    const home = () => {
        gsap.from(".image-pettern", {
            scale: -0.6,
            duration: 0.9,
            stagger: 0.5,
        })
        gsap.from(".image-tooth", {
            scale: -0.12,
            duration: 0.9,
            stagger: 0.5,
        })
        gsap.from(".home-left-text", {
            y: 100,
            duration: 1,
            opacity: 0,
            stagger: 0.5,
        })
        gsap.from(".home-right-text", {
            y: 100,
            duration: 1,
            opacity: 0,
            stagger: 0.5,
        })
        gsap.from(".text-box", {
            y: 50,
            duration: 1.1,
            opacity: 0,
            stagger: 0.5,
        })
        gsap.from(".dentist-tool", {
            x: -200,
            duration: 1.2,
            opacity: 0,
            stagger: 0.5,
        });
        gsap.from(".teeth", {
            x: 200,
            duration: 1.2,
            opacity: 0,
            stagger: 0.5,
        })
        gsap.from(".home-image-graphic-1", {
            y: 50,
            duration: 1.3,
            opacity: 0,
            stagger: 0.5,
        });
        gsap.from(".home-image-graphic-2", {
            y: -200,
            duration: 1.3,
            opacity: 0,
            stagger: 0.5,
        })
    }
    const homeIntro = () => {
        gsap.from(".home-intro-text-block", {
            y: -100,
            duration: 0.6,
            opacity: 0,
            scrollTrigger: {
                scroller: "body",
                trigger: ".home-intro-text-block",
                start: "top 70%",
                end: "top 0",
                scrub: 2,
            }
        })
        gsap.from(".image-block", {
            y: -100,
            duration: 0.6,
            opacity: 0,
            scrollTrigger: {
                scroller: "body",
                trigger: ".home-block",
                start: "top -110%",
                end: "top 0",
                scrub: 2,
            }
        })
    }
    const services = () => {

        gsap.from(".service-text-block", {
            y: -100,
            duration: 1,
            opacity: 0,
            scrollTrigger: {
                trigger: ".section-service",
                scroller: "body",
                // markers:true,
                start: "top 50%",
                end: "top 0",
                scrub: 2,
            }

        })
        gsap.from(".service-box .box-2", {
            y: -150,
            duration: 1,
            opacity: 0,
            scrollTrigger: {
                trigger: ".service-box .box-2",
                scroller: "body",
                // markers:true,
                start: "top 50%",
                end: "top 0",
                scrub: 2,
            }
        })
        gsap.from(".service-box .box-3", {
            y: -200,
            duration: 1,
            opacity: 0,
            scrollTrigger: {
                trigger: ".service-box .box-3",
                scroller: "body",
                // markers:true,
                start: "top 50%",
                end: "top 0",
                scrub: 2,
            }

        })
        gsap.from(".service-box .box-5", {
            y: 200,
            duration: 1,
            opacity: 0,
            scrollTrigger: {
                trigger: ".service-box .box-5",
                scroller: "body",
                // markers:true,
                start: "top 250%",
                end: "top 0",
                scrub: 2,
            }

        })
        gsap.from(".service-box .box-4", {
            y: 200,
            duration: 1,
            opacity: 0,
            scrollTrigger: {
                trigger: ".service-box .box-4",
                scroller: "body",
                // markers:true,
                start: "top 250%",
                end: "top 0",
                scrub: 2,
            }

        })
        gsap.from(".service-box .box-1", {
            x: -500,
            duration: 1,
            opacity: 0,
            scrollTrigger: {
                trigger: ".service-box .box-1",
                scroller: "body",
                // markers:true,
                start: "top 250%",
                end: "top 0",
                scrub: 2,
            }

        })

    }
    const card = () => {
        gsap.from(".sticky-card .heading-grid", {
            y: -200,
            duration: 0.6,
            opacity: 0,
            scrollTrigger: {
                trigger: ".section-card",
                scroller: "body",
                start: "top 100%",
                end: "top 0",
                scrub: 2,
            }
        })
    }
    const beforeAfter = () => {
        gsap.from(".before .heading-grid", {
            y: -100,
            duration: 0.6,
            opacity: 0,
            scrollTrigger: {
                trigger: ".section-before-after",
                scroller: "body",
                start: "top 50%",
                end: "top 0",
                scrub: 2,
            }
        })
        gsap.from(".before .accordion-container", {
            y: -100,
            duration: 0.6,
            opacity: 0,
            scrollTrigger: {
                trigger: ".accordion-container",
                scroller: "body",
                start: "top 50%",
                end: "top 0",
                scrub: 2,
            }
        })
    }
    const ourReviews = () => {
        gsap.from(".section-our-reviews .review-box-top .block_01", {
            y: 100,
            duration: 0.6,
            opacity: 0,
            scrollTrigger: {
                trigger: ".section-our-reviews",
                scroller: "body",
                start: "top 30%",
                end: "top 0",
                scrub: 2,
            }
        })
        gsap.from(".section-our-reviews .review-box-top .block_02", {
            y: 100,
            duration: 0.6,
            opacity: 0,
            scrollTrigger: {
                trigger: ".section-our-reviews",
                scroller: "body",
                start: "top 40%",
                end: "top 0",
                scrub: 2,
            }
        })
        gsap.from(" .review-box-bottom .block_02", {
            y: -50,
            duration: 0.4,
            opacity: 0,
            scrollTrigger: {
                trigger: ".review-box-bottom",
                scroller: "body",
                start: "top 70%",
                end: "top 0",
                scrub: 2,
            }
        })
        gsap.from(".review-box-bottom .block_01", {
            y: 100,
            duration: 0.4,
            opacity: 0,
            scrollTrigger: {
                trigger: ".review-box-bottom",
                scroller: "body",
                start: "top 65%",
                end: "top 0",
                scrub: 2,
            }
        })
    }
    const sectionAbout = () => {
        gsap.to(".black-box", {
            top: "-200%",
            duration: 0.6,
            scrollTrigger: {
                trigger: ".section-about",
                scroller: "body",
                start: "top 30%",
                end: "top 0",
                scrub: 2,
            }
        })
    }
    const aboutFooter = () => {
        gsap.from(".form-text-block", {
            y: 100,
            duration: 0.6,
            opacity: 0,
            scrollTrigger: {
                trigger: ".section-about-footer",
                scroller: "body",
                start: "top 50%",
                end: "top 0",
                scrub: 2,
            }
        })
        gsap.from(".form-block", {
            y: 200,
            duration: 0.6,
            opacity: 0,
            scrollTrigger: {
                trigger: ".section-about-footer",
                scroller: "body",
                start: "top 70%",
                end: "top 0",
                scrub: 2,
            }
        })
    }
    const footer = () => {
        gsap.from(".side-footer", {
            x: -200,
            duration: 0.6,
            opacity: 0,
            scrollTrigger: {
                trigger: ".section-footer",
                scroller: "body",
                start: "top 150%",
                end: "top 0",
                scrub: 2,
            }
        })
        gsap.from(".footer-link", {
            y: 100,
            duration: 0.6,
            opacity: 0,
            scrollTrigger: {
                trigger: ".section-footer",
                scroller: "body",
                start: "top 150%",
                end: "top 0",
                scrub: 2,
            }
        })
        gsap.from(".footer-bottom-legal", {
            y: 100,
            duration: 0.6,
            opacity: 0,
            scrollTrigger: {
                trigger: ".section-footer",
                scroller: "body",
                start: "top 130%",
                end: "top 0",
                scrub: 2,
            }
        })
    }
    nav();
    menu();
    home();
    homeIntro();
    services();
    card();
    beforeAfter();
    ourReviews();
    sectionAbout();
    aboutFooter();
    footer();
});

const btn = document.querySelectorAll(".accordion-wrapper");
btn.forEach(button => {
    button.addEventListener("click", () => {
        btn.forEach(newbtn =>
            newbtn.classList.remove("active"));
        button.classList.add("active");

    })
})
// contact scroll
const contactSmooth = () => {
    const contactSection = document.querySelector("#contact");
    const contactBtn = document.querySelectorAll("#contactBtn");
    for (let i = 0; i < contactBtn.length; i++) {

        contactBtn[i].addEventListener("click", (e) => {
            e.preventDefault();
            contactSection.scrollIntoView({
                behavior: "smooth",
                block: "nearest"
            })
        })
    }



}
contactSmooth();


// slider section
if (window.innerWidth > 991) {
    gsap.to(".color-1", {
        scale: 0.5,
        opacity: 0,
        scrollTrigger: {
            trigger: ".color-1",
            scroller: "body",
            start: "top 0%",
            end: "bottom 0%",
            scrub: 3,
            pin: true,
        }
    });
    gsap.to(".color-2", {
        scale: 0.5,
        opacity: 0,
        scrollTrigger: {
            trigger: ".color-2",
            scroller: "body",
            start: "top 0%",
            end: "bottom 0%",
            scrub: 3,
            pin: true,
        }
    });

    gsap.to(".color-3", {
        scale: 0.5,
        opacity: 0,
        scrollTrigger: {
            trigger: ".color-3",
            scroller: "body",
            start: "top 0%",
            end: "bottom 0%",
            scrub: 3,
            pin: true,
        }
    })

} else {
    console.log("error");

}


