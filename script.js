// =====================================================
// BIRTHDAY WEBSITE - FINAL SCRIPT
// =====================================================


// =====================================================
// 1. ENTER BIRTHDAY
// =====================================================

function enterBirthday() {

    const welcomeScreen =
        document.getElementById("welcomeScreen");

    const music =
        document.getElementById("birthdayMusic");


    // Start birthday music
    if (music) {

        music.play().catch(function (error) {

            console.log(
                "Music autoplay blocked:",
                error
            );

        });

    }


    // Hide welcome screen
    if (welcomeScreen) {

        welcomeScreen.style.opacity = "0";

        setTimeout(function () {

            welcomeScreen.style.display = "none";

        }, 700);

    }

}



// =====================================================
// 2. OPEN SURPRISE
// =====================================================

function celebrate() {

    const giftPopup =
        document.getElementById("giftPopup");


    if (!giftPopup) {

        console.log(
            "Gift popup not found!"
        );

        return;

    }


    // Show popup
    giftPopup.classList.add("show");


    // Start box animation
    setTimeout(function () {

        giftPopup.classList.add("open");

    }, 200);

}



// =====================================================
// 3. CLOSE SURPRISE
// =====================================================

function closeGift() {

    const giftPopup =
        document.getElementById("giftPopup");


    if (!giftPopup) {

        return;

    }


    // Stop opening animation
    giftPopup.classList.remove("open");


    // Hide popup after animation
    setTimeout(function () {

        giftPopup.classList.remove("show");

    }, 700);

}



// =====================================================
// 4. GALLERY LIGHTBOX
// =====================================================

const galleryImages =
    document.querySelectorAll(
        ".photo-grid img"
    );


const lightbox =
    document.getElementById("lightbox");


const lightboxImage =
    document.getElementById("lightboxImage");



galleryImages.forEach(function (image) {

    image.addEventListener(
        "click",
        function (event) {

            event.stopPropagation();


            if (
                lightbox &&
                lightboxImage
            ) {

                lightboxImage.src =
                    this.src;

                lightbox.classList.add(
                    "show"
                );

            }

        }
    );

});



// =====================================================
// 5. CLOSE LIGHTBOX
// =====================================================

function closeLightbox() {

    if (lightbox) {

        lightbox.classList.remove(
            "show"
        );

    }

}



// =====================================================
// 6. ESC KEY
// =====================================================

document.addEventListener(
    "keydown",
    function (event) {

        if (event.key === "Escape") {

            closeLightbox();

            closeGift();

        }

    }
);



// =====================================================
// 7. CLOSE LIGHTBOX WHEN BACKGROUND CLICKED
// =====================================================

if (lightbox) {

    lightbox.addEventListener(
        "click",
        function (event) {

            if (
                event.target === lightbox
            ) {

                closeLightbox();

            }

        }
    );

}



// =====================================================
// 8. CLOSE GIFT WHEN BACKGROUND CLICKED
// =====================================================

const giftPopupElement =
    document.getElementById(
        "giftPopup"
    );


if (giftPopupElement) {

    giftPopupElement.addEventListener(
        "click",
        function (event) {

            if (
                event.target ===
                giftPopupElement
            ) {

                closeGift();

            }

        }
    );

}



// =====================================================
// 9. DON'T CLOSE WHEN CLICKING BOX
// =====================================================

const giftBoxArea =
    document.querySelector(
        ".gift-box-area"
    );


if (giftBoxArea) {

    giftBoxArea.addEventListener(
        "click",
        function (event) {

            event.stopPropagation();

        }
    );

}



// =====================================================
// 10. PAGE LOAD
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
// 11. MOBILE SUPPORT
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