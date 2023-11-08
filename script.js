document.getElementById('personality-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Show loading icon
    document.getElementById('loading-icon').hidden = false;

    // Collect data from the form
    var formData = new FormData(event.target);

    // Send the data to Zapier webhook
    fetch('YOUR_ZAPIER_WEBHOOK_URL', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        // Handle response here (e.g., show a confirmation message)
        console.log(data);
        document.getElementById('loading-icon').hidden = true;
        // You might want to add code here to update the UI to show the summary
    })
    .catch(error => {
        console.error('Error:', error);
        document.getElementById('loading-icon').hidden = true;
    });
});
