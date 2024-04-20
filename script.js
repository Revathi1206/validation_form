var submit = document.querySelector(".sub-btn");
var firstName = document.getElementById("valid1");
var lastName = document.getElementById("valid2");
var address = document.getElementById("valid4");
var phone = document.getElementById("valid3");
var emailId = document.getElementById("valid6");
var Date = document.getElementById("valid5");

const fname = document.querySelector(".fname");
const lname = document.querySelector(".lname");
const phn = document.querySelector(".phn");
const add = document.querySelector(".address");
const email = document.querySelector(".email");
const date = document.querySelector(".date");

const popup = document.querySelector(".popup-msg")
const clear = document.querySelector(".cl-btn")
const hiddenBox = document.querySelector(".details-hidden");




const forms = document.querySelectorAll('.needs-validation')

// Loop over them and prevent submission
Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
        if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
        }

        form.classList.add('was-validated')
    }, false)
})


submit.addEventListener("click", function (e) {
    console.log(phone.value.length);
    if (firstName.value && lastName.value && address.value && phone.value && emailId.value && Date.value) {
        e.preventDefault();
        if ((/[a-zA-Z]/.test(phone.value) == true) || (phone.value.length != 10)) {
            popup.style.display = "block";
            phone.value = '';

        }
        else if (emailId.value.includes("@") == false && emailId.value.includes(".") == false) {
            popup.style.display = "block";
            popup.textContent = "Invaid Email id"
            emailId.value = '';

        }
        else if (firstName.value.includes(" ") == false && lastName.value.includes(" ") == false) {
            popup.style.display = "none";
            fname.textContent = firstName.value;
            lname.textContent = lastName.value;
            phn.textContent = phone.value;
            add.textContent = address.value;
            email.textContent = emailId.value;
            date.textContent = Date.value;

            // firstName.value = lastName.value = address.value = phone.value = '';
            hiddenBox.style.display = "block";
            scrolldown.style.opacity = 1;
            document.body.style.overflow = "visible"
            // firstName.value = lastName.value = address.value = phone.value = '';

        }
        else {
            popup.style.display = "block";
            popup.textContent = "Invalid  details Try again";
            firstName.value = lastName.value = '';
        }
    }
})

clear.addEventListener("click", function () {
    firstName.value = lastName.value = address.value = phone.value = '';
    emailId.value = Data.value = '';
    // emailId.value = Date.value = '';

})

window.addEventListener("scroll", function () {
    var scrollToTopBtn = document.getElementById("scrollToTopBtn");
    if (window.pageYOffset > 100) {
        // Show scroll-to-top button
        scrollToTopBtn.classList.add("show");
    } else {
        // Hide scroll-to-top button
        scrollToTopBtn.classList.remove("show");
    }
});

document.getElementById("scrollToTopBtn").addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});
