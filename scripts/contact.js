//Send button stuff
function ValidateEmail(email) {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
        return (true);
    }
    return (false);
}

function SendMail() {

    //Get input and stuff
    const nameInput = $("#name-input").val();
    const email = $("#email-input").val();
    const message = $("#message-input").val();
    //Validate email
    const isValid = ValidateEmail(email);

    //Check if any field is empty cuz yeah
    if (!nameInput || !email || !message) {
        alert("Fill all the fields");
    }
    else if (!isValid) {
        alert("Invalid email!");
    }
    else {
        $.ajax({
            method: 'POST',
            url: 'https://formsubmit.co/ajax/d79de8a1599e3bdfc099454997c55b0f',
            dataType: 'json',
            accepts: 'application/json',
            data: {
                name: nameInput,
                email: email,
                message: message
            },
            success: function () {
                $(location).attr("href", "../pages/contact-success.html");
            },
            error: function () {
                alert("Something went wrong, try again later, sorry for the inconvenience");
            }
        });

    }

}

$(".send-btn").on("click", SendMail);

// Success button stuff
function GoHome() {
    $(location).attr("href", "../index.html");
}

$(".suc-home-btn").on("click", GoHome);