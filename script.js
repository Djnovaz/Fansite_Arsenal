document.getElementById('buyMembership').addEventListener('click', function () {
    window.location.href = 'payment.html';
});

document.getElementById('paymentForm').addEventListener('submit', function (event) {
    event.preventDefault();
    alert('Payment submitted successfully!');
    window.location.href = 'index.html'; // Redirect to home after payment
});


document.getElementById('paymentForm').addEventListener('submit', function (event) {
    const dobInput = document.getElementById('dob');
    const dobValue = dobInput.value;

    if (!dobValue) {
        alert('Please select your date of birth.');
        event.preventDefault(); // Prevent form submission
    } else {
        console.log('Date of Birth:', dobValue);
    }
});
