// Glider configuration
// from   https://codepen.io/syrizaldev/pen/bGGZLaW
new Glider(document.getElementById("slider"), {
    // Optional parameters
    slidesToShow: 1,
    slidesToScroll: 1,
    draggable: true,
    rewind: true,
    duration: 0.5,
    dots: ".pagination",
    arrows: {
        prev: ".slider-prev",
        next: ".slider-next"
    },

    // Responsive breakpoints
    responsive: [
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1.5,
                scrollLock: false,
                rewind: true
            }
        }
    ]
});
