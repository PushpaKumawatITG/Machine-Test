document.getElementById("form").addEventListener("submit", function(e) {
    e.preventDefault(); 

    const firstName = document.getElementById("firstname").value.trim();
    const lastName = document.getElementById("lastname").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const dob = document.getElementById("DOB").value;
    const message = document.getElementById("Message").value.trim();
    const gender = document.querySelector('input[name="gender"]:checked');
    const termsAccepted = document.getElementById("termCondtions").checked;

    const hobbies = [];
    if (document.getElementById("cricket").checked) hobbies.push("Playing Cricket");
    if (document.getElementById("TV").checked) hobbies.push("Watching TV");
    if (document.getElementById("read").checked) hobbies.push("Reading Books");
    if (document.getElementById("ride").checked) hobbies.push("Riding Bike");
    if (document.getElementById("otherhobby").checked) hobbies.push("Other");

    const nameRegex = /^[A-Za-z]+$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[0-9]{10}$/;

    let errors = [];

    if (!firstName || !nameRegex.test(firstName)) {
        errors.push("Please enter a valid first name (letters only).");
    }

    if (!lastName || !nameRegex.test(lastName)) {
        errors.push("Please enter a valid last name (letters only).");
    }

    if (!email || !emailRegex.test(email)) {
        errors.push("Please enter a valid email address.");
    }

    if (!phone || !phoneRegex.test(phone)) {
        errors.push("Please enter a valid 10-digit phone number.");
    }

    if (!gender) {
        errors.push("Please select your gender.");
    }

    if (!message) {
        errors.push("Please enter a message.");
    }

    if (!termsAccepted) {
        errors.push("You must agree to the terms and conditions.");
    }

    if (errors.length > 0) {
        alert("Please enter all details.");
    } else {
        alert("Form submitted successfully!");

        console.log({
            firstName,
            lastName,
            email,
            phone,
            dob,
            gender: gender ? gender.id : null,
            hobbies,
            message,
            termsAccepted
        });

        document.getElementById("form").reset();
    }
});

