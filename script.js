document.addEventListener('DOMContentLoaded', function() {
    const navbarToggle = document.getElementById('navbar-toggle');
    const navbarMenu = document.getElementById('navbar-menu');

    navbarToggle.addEventListener('click', function() {
        navbarMenu.classList.toggle('show');
    });

    const uploadForm = document.getElementById('upload-form');
    const resultBox = document.getElementById('result-box');
    const customUploadButton = document.getElementById('custom-upload-button');
    const imageInput = document.getElementById('image-input');

    customUploadButton.addEventListener('click', function() {
        imageInput.click();
    });

    uploadForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const file = imageInput.files[0];

        if (file) {
            const reader = new FileReader();
            reader.onload = function(event) {
                const img = document.createElement('img');
                img.src = event.target.result;
                img.style.maxWidth = '100%';
                img.style.maxHeight = '100%';
                resultBox.innerHTML = '';
                resultBox.appendChild(img);
            }
            reader.readAsDataURL(file);
        }
    });
});
