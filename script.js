const submit = document.querySelector(".sub-btn");
const firstName = document.getElementById("valid1");
const lastName = document.getElementById("valid2");
const address = document.getElementById("valid4");
const phone = document.getElementById("valid3");
const fname = document.querySelector(".fname");
const lname = document.querySelector(".lname");
const phn = document.querySelector(".phn");
const add = document.querySelector(".address");
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
    if (firstName.value && lastName.value && address.value && phone.value) {
        e.preventDefault();
        if ((/[a-zA-Z]/.test(phone.value) == true) || (phone.value.length != 10)) {
            popup.style.display = "block";
            phone.value = '';

        }
        else if (firstName.value.includes(" ") == false && lastName.value.includes(" ") == false) {
            popup.style.display = "none";
            fname.textContent = firstName.value;
            lname.textContent = lastName.value;
            phn.textContent = phone.value;
            add.textContent = address.value;
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

})


