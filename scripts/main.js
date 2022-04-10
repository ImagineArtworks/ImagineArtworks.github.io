function toggleList() {
    console.log("here");
    $(".nav-bar").toggleClass("active");
    console.log(document.querySelector(".nav-bar"));
}

$(".burger").on("click", toggleList);