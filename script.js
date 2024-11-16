function shareOnTwitter() {
    const url = encodeURIComponent('https://www.sneakerswish.com');  //website URL
    const text = encodeURIComponent('Check out SneakerSwish for amazing sneakers!');  
    const twitterUrl = `https://twitter.com/intent/tweet?url=${url}&text=${text}`;
    window.open(twitterUrl, 'twitter-share-dialog', 'width=800,height=600');
}

function shareOnFacebook() {
    const url = encodeURIComponent('https://www.sneakerswish.com');
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`, 'facebook-share-dialog', 'width=800,height=600');
}
document.querySelectorAll('.order-btn').forEach(button => {
    button.addEventListener('click', () => {
        document.getElementById('overlay').style.display = 'block';
        document.getElementById('orderModal').style.display = 'block';
    });
});

document.getElementById('orderForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Your order is confirmed!');
    document.getElementById('overlay').style.display = 'none';
    document.getElementById('orderModal').style.display = 'none';
});

document.getElementById('overlay').addEventListener('click', () => {
    document.getElementById('overlay').style.display = 'none';
    document.getElementById('orderModal').style.display = 'none';
});