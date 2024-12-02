function shareOnTwitter() {
    const url = encodeURIComponent('https://www.sneakerswish.com');  
    const text = encodeURIComponent('Check out SneakerSwish for amazing sneakers!');  
    const twitterUrl = `https://twitter.com/intent/tweet?url=${url}&text=${text}`;
    window.open(twitterUrl, 'twitter-share-dialog', 'width=800,height=600');
}

function shareOnFacebook() {
    const url = encodeURIComponent('https://www.sneakerswish.com');
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`, 'facebook-share-dialog', 'width=800,height=600');
}
document.addEventListener('DOMContentLoaded', () => {
    // Select all order buttons and their respective modals
    const orderButtons = document.querySelectorAll('.order-btn');
    const overlays = document.querySelectorAll('.overlay');
    const modals = document.querySelectorAll('.modal');
    const forms = document.querySelectorAll('form');

    orderButtons.forEach((button, index) => {
        const overlay = overlays[index];
        const modal = modals[index];

        // Show modal and overlay on button click
        button.addEventListener('click', () => {
            overlay.style.display = 'block';
            modal.style.display = 'block';
        });

        // Hide modal and overlay when overlay is clicked
        overlay.addEventListener('click', () => {
            overlay.style.display = 'none';
            modal.style.display = 'none';
        });
    });

    // Add submit event listener to each form
    forms.forEach((form, index) => {
        form.addEventListener('submit', (event) => {
            event.preventDefault(); // Prevent the form from actually submitting
            alert('Your order is confirmed!'); // Show confirmation message

            // Close the modal and overlay
            overlays[index].style.display = 'none';
            modals[index].style.display = 'none';
        });
    });
});
    // Function to handle form submissions
    function showThankYouMessage(event) {
        event.preventDefault(); // Prevent the form from submitting
        alert("Thank you for your submission!");
    }

    // Attach the event listener to each button
    document.addEventListener("DOMContentLoaded", () => {
        document.querySelectorAll(".submission").forEach(button => {
            button.addEventListener("click", showThankYouMessage);
        });
    });
