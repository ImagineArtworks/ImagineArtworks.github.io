function toggleList() {
    $(".nav-bar").toggleClass("active-bar");
    $(".socials-container").toggleClass("active-socials");
}

$(".burger").on("click", toggleList);
