document.getElementById('paymentForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Simulate payment processing
    const cardNumber = document.getElementById('cardNumber').value;
    const cardName = document.getElementById('cardName').value;
    const expiryDate = document.getElementById('expiryDate').value;
    const cvv = document.getElementById('cvv').value;

    if (cardNumber && cardName && expiryDate && cvv) {
        document.getElementById('message').innerText = 'Payment successful!';
    } else {
        document.getElementById('message').innerText = 'Please fill in all fields.';
    }
});
