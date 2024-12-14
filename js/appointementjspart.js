document.addEventListener('DOMContentLoaded', function () {
    let appointmentType = document.getElementById('appointmentType');
    let doctors = document.getElementById('doctors');
    let start = document.getElementById('start');
    let name1 = document.getElementById('name1');
    let gender = document.getElementById('gender');
    let number1 = document.getElementById('number1');
    let email = document.getElementById('email');
    let message = document.getElementById('message');
    let submitBtn = document.getElementById('submitBtn');

    let dataPro = []; 
    function clearForm() {
        appointmentType.value = '';
        doctors.value = '';
        start.value = '';
        name1.value = '';
        gender.value = '';
        number1.value = '';
        email.value = '';
        message.value = '';
        cheking(); 
    }
    function cheking() {
        if (appointmentType.value.trim() !== '' &&doctors.value.trim() !== '' &&start.value.trim() !== '' &&name1.value.trim() !== '' &&gender.value.trim() !== '' && number1.value.trim() !== '' && email.value.trim() !== ''&& message.value.trim() !== '' ) {
            console.log("Name is entered.");
            submitBtn.style.background = '#040'; // Change button color
            submitBtn.disabled = false; // Ensure button is enabled
        } else {
            console.log("Input is empty.");
            submitBtn.style.background = ''; // Reset button color
            submitBtn.disabled = true; // Disable button
        }
    }

   

 
    const inputs = [appointmentType, doctors, start, name1, gender, number1, email, message];
    inputs.forEach(input => {
        input.addEventListener('input', cheking);
    });

    submitBtn.onclick = function () {
        if (!submitBtn.disabled) {
            let newPro = {
                appointmentType: appointmentType.value,
                doctors: doctors.value,
                start: start.value,
                name: name1.value,
                gender: gender.value,
                number: number1.value,
                email: email.value,
                message: message.value,
            };

            console.log(newPro);
            dataPro.push(newPro);
            clearForm();
            let form = document.getElementById('appointmentForm');
            if (form) {
                form.reset();
                cheking(); 
            } else {
                console.error("Form with ID 'appointmentForm' not found.");
            }
        }
    };
  

    
    cheking();
});
