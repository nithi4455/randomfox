document.getElementById('getFoxBtn').addEventListener('click', getFoxImage);

function getFoxImage() {
    fetch('https://randomfox.ca/floof/')
    .then(response => response.json())
    .then(data => {
        document.getElementById('factText').innerText = "Here's a random fox!";
        document.getElementById('foxImage').src = data.image;
    })
    .catch(error => {
        console.log('Error fetching fox image:', error);
        document.getElementById('factText').innerText = 'Failed to fetch fox image. Please try again later.';
    });
}
