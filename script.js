// =====================================================
// BIRTHDAY WEBSITE - FINAL SCRIPT
// =====================================================

function lockPageScroll() {
    document.documentElement.style.overflow = "hidden";
    document.body.style.overflow = "hidden";
    document.body.style.position = "fixed";
    document.body.style.width = "100%";
}

function unlockPageScroll() {
    document.documentElement.style.overflow = "";
    document.body.style.overflow = "";
    document.body.style.position = "";
    document.body.style.width = "";
}


// =====================================================
// WELCOME SCREEN
// =====================================================

function enterBirthday() {
    const welcomeScreen = document.getElementById("welcomeScreen");
    const music = document.getElementById("birthdayMusic");

    if (music) {
        music.play().catch(function (error) {
            console.log("Music autoplay blocked:", error);
        });
    }

    if (welcomeScreen) {
        welcomeScreen.style.opacity = "0";

        setTimeout(function () {
            welcomeScreen.style.display = "none";
        }, 700);
    }
}


// =====================================================
// OPEN GIFT
// =====================================================

function celebrate() {

    const giftPopup = document.getElementById("giftPopup");

    if (!giftPopup) {
        console.log("Gift popup not found!");
        return;
    }

    // STOP PAGE SCROLL
    lockPageScroll();

    // Show popup
    giftPopup.classList.add("show");

    // Open box after small delay
    setTimeout(function () {
        giftPopup.classList.add("open");
    }, 200);
}


// =====================================================
// CLOSE GIFT
// =====================================================

function closeGift() {

    const giftPopup = document.getElementById("giftPopup");

    if (!giftPopup) {
        return;
    }

    giftPopup.classList.remove("open");

    setTimeout(function () {

        giftPopup.classList.remove("show");

        // ENABLE PAGE SCROLL AGAIN
        unlockPageScroll();

    }, 700);
}


// =====================================================
// GALLERY LIGHTBOX
// =====================================================

const galleryImages = document.querySelectorAll(".photo-grid img");

const lightbox = document.getElementById("lightbox");

const lightboxImage =
    document.getElementById("lightboxImage");


galleryImages.forEach(function (image) {

    image.addEventListener("click", function (event) {

        event.stopPropagation();

        if (lightbox && lightboxImage) {

            lightboxImage.src = this.src;

            lightbox.classList.add("show");

            // Stop background scrolling
            lockPageScroll();
        }

    });

});


// =====================================================
// CLOSE LIGHTBOX
// =====================================================

function closeLightbox() {

    if (lightbox) {

        lightbox.classList.remove("show");

        unlockPageScroll();
    }
}


// =====================================================
// ESCAPE KEY
// =====================================================

document.addEventListener("keydown", function (event) {

    if (event.key === "Escape") {

        closeLightbox();

        closeGift();
    }

});


// =====================================================
// CLICK OUTSIDE LIGHTBOX
// =====================================================

if (lightbox) {

    lightbox.addEventListener("click", function (event) {

        if (event.target === lightbox) {

            closeLightbox();
        }

    });

}


// =====================================================
// CLICK OUTSIDE GIFT
// =====================================================

const giftPopupElement =
    document.getElementById("giftPopup");


if (giftPopupElement) {

    giftPopupElement.addEventListener(
        "click",
        function (event) {

            if (event.target === giftPopupElement) {

                closeGift();
            }

        }
    );

}


// =====================================================
// PREVENT GIFT BOX CLICK FROM CLOSING
// =====================================================

const giftBoxArea =
    document.querySelector(".gift-box-area");


if (giftBoxArea) {

    giftBoxArea.addEventListener(
        "click",
        function (event) {

            event.stopPropagation();

        }
    );

}


// =====================================================
// PAGE LOAD
// =====================================================

document.addEventListener(
    "DOMContentLoaded",
    function () {

        console.log(
            "🎂 Birthday Website Loaded Successfully ❤️"
        );

    }
);


// =====================================================
// MOBILE TOUCH
// =====================================================

document.addEventListener(
    "touchstart",
    function () {

        console.log(
            "Mobile interaction detected ❤️"
        );

    },
    {
        once: true
    }
);