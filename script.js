document.getElementById('submit-button').addEventListener('click', function() {
    // Show loading icon
    document.getElementById('loading-icon').hidden = false;

    // Collect data from the form
    var textInput = document.getElementById('text-input').value;
    var additionalInfo = document.getElementById('additional-info').value;
    var mobileNumber = document.getElementById('mobile-number').value;
    var files = document.getElementById('file-upload').files;

    var formData = new FormData();
    formData.append('text', textInput);
    formData.append('additionalInfo', additionalInfo);
    formData.append('mobileNumber', mobileNumber);
    // Assuming you have a way to handle file uploads via Zapier, you could append files here

    // Send the data to Zapier webhook
    fetch('https://hooks.zapier.com/hooks/catch/9745668/3zz2xc3/', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        // Handle response here (e.g., show a confirmation message)
        console.log(data);
        document.getElementById('loading-icon').hidden = true;
    })
    .catch(error => {
        console.error('Error:', error);
        document.getElementById('loading-icon').hidden = true;
    });
});

