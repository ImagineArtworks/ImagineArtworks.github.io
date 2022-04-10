function toggleList() {
    $(".nav-bar").toggleClass("active");
}

$(".burger").on("click", toggleList);
