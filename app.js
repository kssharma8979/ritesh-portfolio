/* =========================================================
   RITESH KUMAR PORTFOLIO — VERSION 2
   JavaScript
========================================================= */


/* =========================================================
   1. ENABLE JAVASCRIPT-BASED STYLES
========================================================= */

document.documentElement.classList.add("js-enabled");


/* =========================================================
   2. SELECT ELEMENTS
========================================================= */

const body = document.body;

const header =
    document.getElementById("header");

const menuToggle =
    document.getElementById("menuToggle");

const navLinks =
    document.getElementById("navLinks");

const navItems =
    document.querySelectorAll(".nav-link");

const themeToggle =
    document.getElementById("themeToggle");

const typing =
    document.getElementById("typing");

const scrollProgress =
    document.getElementById("scrollProgress");

const backToTop =
    document.getElementById("backToTop");

const preloader =
    document.getElementById("preloader");

const contactForm =
    document.getElementById("contactForm");

const formMessage =
    document.getElementById("formMessage");


/* =========================================================
   3. PRELOADER
========================================================= */

window.addEventListener("load", () => {

    setTimeout(() => {

        if (preloader) {
            preloader.classList.add("hide");
        }

    }, 500);

});


/* =========================================================
   4. MOBILE NAVIGATION
========================================================= */

if (menuToggle && navLinks) {

    menuToggle.addEventListener("click", () => {

        navLinks.classList.toggle("open");

        const icon =
            menuToggle.querySelector("i");

        if (!icon) return;

        if (navLinks.classList.contains("open")) {

            icon.classList.remove("fa-bars");

            icon.classList.add("fa-xmark");

        } else {

            icon.classList.remove("fa-xmark");

            icon.classList.add("fa-bars");

        }

    });

}


/* =========================================================
   5. CLOSE MOBILE MENU AFTER CLICK
========================================================= */

navItems.forEach((link) => {

    link.addEventListener("click", () => {

        if (navLinks) {
            navLinks.classList.remove("open");
        }

        const icon =
            menuToggle?.querySelector("i");

        if (icon) {

            icon.classList.remove("fa-xmark");

            icon.classList.add("fa-bars");

        }

    });

});


/* =========================================================
   6. TYPING ANIMATION
========================================================= */

const roles = [

    "Full Stack Developer",

    "Python Developer",

    "AI Enthusiast"

];


let roleIndex = 0;

let characterIndex = 0;

let deleting = false;


function typeRole() {

    if (!typing) return;

    const currentRole =
        roles[roleIndex];


    if (!deleting) {

        typing.textContent =
            currentRole.substring(
                0,
                characterIndex + 1
            );

        characterIndex++;


        if (
            characterIndex ===
            currentRole.length
        ) {

            deleting = true;

            setTimeout(
                typeRole,
                1600
            );

            return;

        }

    } else {

        typing.textContent =
            currentRole.substring(
                0,
                characterIndex - 1
            );

        characterIndex--;


        if (characterIndex === 0) {

            deleting = false;

            roleIndex++;

            if (
                roleIndex >=
                roles.length
            ) {

                roleIndex = 0;

            }

        }

    }


    const speed =
        deleting ? 45 : 90;

    setTimeout(
        typeRole,
        speed
    );

}


if (typing) {

    typing.textContent = "";

    setTimeout(
        typeRole,
        700
    );

}


/* =========================================================
   7. HEADER ON SCROLL
========================================================= */

function updateHeader() {

    if (!header) return;

    if (window.scrollY > 40) {

        header.classList.add("scrolled");

    } else {

        header.classList.remove("scrolled");

    }

}


window.addEventListener(
    "scroll",
    updateHeader
);

updateHeader();


/* =========================================================
   8. SCROLL PROGRESS
========================================================= */

function updateScrollProgress() {

    if (!scrollProgress) return;


    const scrollTop =
        window.scrollY;


    const documentHeight =
        document.documentElement
            .scrollHeight -
        window.innerHeight;


    if (documentHeight <= 0) {

        scrollProgress.style.width =
            "0%";

        return;

    }


    const progress =
        (scrollTop / documentHeight) *
        100;


    scrollProgress.style.width =
        `${progress}%`;

}


window.addEventListener(
    "scroll",
    updateScrollProgress
);

updateScrollProgress();


/* =========================================================
   9. BACK TO TOP
========================================================= */

function updateBackToTop() {

    if (!backToTop) return;


    if (window.scrollY > 500) {

        backToTop.classList.add("show");

    } else {

        backToTop.classList.remove("show");

    }

}


window.addEventListener(
    "scroll",
    updateBackToTop
);


if (backToTop) {

    backToTop.addEventListener(
        "click",
        () => {

            window.scrollTo({

                top: 0,

                behavior: "smooth"

            });

        }
    );

}


/* =========================================================
   10. SCROLL REVEAL
========================================================= */

const revealElements =
    document.querySelectorAll(".reveal");


if (
    "IntersectionObserver"
    in window
) {

    const revealObserver =
        new IntersectionObserver(
            (entries) => {

                entries.forEach(
                    (entry) => {

                        if (
                            entry.isIntersecting
                        ) {

                            entry.target.classList.add(
                                "revealed"
                            );

                            revealObserver.unobserve(
                                entry.target
                            );

                        }

                    }
                );

            },
            {
                threshold: 0.12,

                rootMargin:
                    "0px 0px -50px 0px"
            }
        );


    revealElements.forEach(
        (element) => {

            revealObserver.observe(
                element
            );

        }
    );


} else {

    /* Fallback for old browsers */

    revealElements.forEach(
        (element) => {

            element.classList.add(
                "revealed"
            );

        }
    );

}


/* =========================================================
   11. ACTIVE NAVIGATION
========================================================= */

const sections =
    document.querySelectorAll(
        "main section[id]"
    );


function updateActiveNav() {

    const scrollPosition =
        window.scrollY + 180;


    let currentSection = "";


    sections.forEach(
        (section) => {

            const sectionTop =
                section.offsetTop;

            const sectionHeight =
                section.offsetHeight;

            if (
                scrollPosition >=
                    sectionTop &&
                scrollPosition <
                    sectionTop +
                    sectionHeight
            ) {

                currentSection =
                    section.getAttribute("id");

            }

        }
    );


    navItems.forEach(
        (link) => {

            link.classList.remove(
                "active"
            );


            const href =
                link.getAttribute("href");


            if (
                href ===
                `#${currentSection}`
            ) {

                link.classList.add(
                    "active"
                );

            }

        }
    );

}


window.addEventListener(
    "scroll",
    updateActiveNav
);

window.addEventListener(
    "resize",
    updateActiveNav
);

updateActiveNav();


/* =========================================================
   12. DARK / LIGHT MODE
========================================================= */

const savedTheme =
    localStorage.getItem(
        "portfolio-theme"
    );


function updateThemeIcon() {

    if (!themeToggle) return;


    const icon =
        themeToggle.querySelector("i");


    if (!icon) return;


    if (
        body.classList.contains(
            "light-theme"
        )
    ) {

        icon.classList.remove(
            "fa-moon"
        );

        icon.classList.add(
            "fa-sun"
        );

    } else {

        icon.classList.remove(
            "fa-sun"
        );

        icon.classList.add(
            "fa-moon"
        );

    }

}


if (savedTheme === "light") {

    body.classList.add(
        "light-theme"
    );

}


updateThemeIcon();


if (themeToggle) {

    themeToggle.addEventListener(
        "click",
        () => {

            body.classList.toggle(
                "light-theme"
            );


            const isLight =
                body.classList.contains(
                    "light-theme"
                );


            localStorage.setItem(
                "portfolio-theme",
                isLight
                    ? "light"
                    : "dark"
            );


            updateThemeIcon();

        }
    );

}


/* =========================================================
   13. SMOOTH SCROLL
========================================================= */

document
    .querySelectorAll(
        'a[href^="#"]'
    )
    .forEach((link) => {

        link.addEventListener(
            "click",
            (event) => {

                const targetId =
                    link.getAttribute(
                        "href"
                    );


                if (
                    !targetId ||
                    targetId === "#"
                ) {

                    return;

                }


                const target =
                    document.querySelector(
                        targetId
                    );


                if (!target) return;


                event.preventDefault();


                target.scrollIntoView({

                    behavior: "smooth",

                    block: "start"

                });

            }
        );

    });


/* =========================================================
   14. CONTACT FORM
========================================================= */

if (contactForm) {

    contactForm.addEventListener(
        "submit",
        () => {

            if (!formMessage) return;


            formMessage.textContent =
                "Sending your message...";


            formMessage.style.color =
                "var(--primary)";

        }
    );

}


/* =========================================================
   15. INPUT FOCUS EFFECT
========================================================= */

const formInputs =
    document.querySelectorAll(
        ".contact-form input, .contact-form textarea"
    );


formInputs.forEach(
    (input) => {

        input.addEventListener(
            "focus",
            () => {

                input.parentElement
                    ?.classList.add(
                        "focused"
                    );

            }
        );


        input.addEventListener(
            "blur",
            () => {

                input.parentElement
                    ?.classList.remove(
                        "focused"
                    );

            }
        );

    }
);


/* =========================================================
   16. CLOSE MENU WITH ESCAPE
========================================================= */

document.addEventListener(
    "keydown",
    (event) => {

        if (
            event.key === "Escape" &&
            navLinks?.classList.contains(
                "open"
            )
        ) {

            navLinks.classList.remove(
                "open"
            );


            const icon =
                menuToggle?.querySelector(
                    "i"
                );


            if (icon) {

                icon.classList.remove(
                    "fa-xmark"
                );

                icon.classList.add(
                    "fa-bars"
                );

            }

        }

    }
);


/* =========================================================
   17. CLOSE MENU WHEN CLICKING OUTSIDE
========================================================= */

document.addEventListener(
    "click",
    (event) => {

        if (
            !navLinks ||
            !menuToggle
        ) {

            return;

        }


        const clickedInsideMenu =
            navLinks.contains(
                event.target
            );


        const clickedToggle =
            menuToggle.contains(
                event.target
            );


        if (
            !clickedInsideMenu &&
            !clickedToggle &&
            navLinks.classList.contains(
                "open"
            )
        ) {

            navLinks.classList.remove(
                "open"
            );


            const icon =
                menuToggle.querySelector(
                    "i"
                );


            if (icon) {

                icon.classList.remove(
                    "fa-xmark"
                );

                icon.classList.add(
                    "fa-bars"
                );

            }

        }

    }
);


/* =========================================================
   18. PROJECT CARD TILT EFFECT
========================================================= */

const projectCards =
    document.querySelectorAll(
        ".project-card"
    );


projectCards.forEach(
    (card) => {

        card.addEventListener(
            "mousemove",
            (event) => {

                if (
                    window.innerWidth < 850
                ) {

                    return;

                }


                const rect =
                    card.getBoundingClientRect();


                const x =
                    event.clientX -
                    rect.left;


                const y =
                    event.clientY -
                    rect.top;


                const centerX =
                    rect.width / 2;


                const centerY =
                    rect.height / 2;


                const rotateX =
                    ((y - centerY) /
                        centerY) *
                    -2;


                const rotateY =
                    ((x - centerX) /
                        centerX) *
                    2;


                card.style.transform =
                    `perspective(900px)
                     rotateX(${rotateX}deg)
                     rotateY(${rotateY}deg)
                     translateY(-5px)`;

            }
        );


        card.addEventListener(
            "mouseleave",
            () => {

                card.style.transform =
                    "";

            }
        );

    }
);


/* =========================================================
   19. WINDOW RESIZE SAFETY
========================================================= */

window.addEventListener(
    "resize",
    () => {

        if (
            window.innerWidth > 850 &&
            navLinks
        ) {

            navLinks.classList.remove(
                "open"
            );


            const icon =
                menuToggle?.querySelector(
                    "i"
                );


            if (icon) {

                icon.classList.remove(
                    "fa-xmark"
                );

                icon.classList.add(
                    "fa-bars"
                );

            }

        }

    }
);


/* =========================================================
   20. INITIAL PAGE STATE
========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    () => {

        updateHeader();

        updateScrollProgress();

        updateBackToTop();

        updateActiveNav();

        updateThemeIcon();

    }
);