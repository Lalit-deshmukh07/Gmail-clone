document.addEventListener("DOMContentLoaded", function() {
    const composeBtn = document.querySelector('.compose-btn');
    const composePopup = document.getElementById('compose-popup');
    const closeBtn = document.querySelector('.close');
    
    composePopup.style.display = 'none';

    composeBtn.addEventListener('click', () => {
        composePopup.style.display = 'block';
    });

    closeBtn.addEventListener('click', () => {
        composePopup.style.display = 'none';
    });

    
    const sendBtn = document.querySelector('.send-btn');
    sendBtn.addEventListener('click', () => {
        
        composePopup.style.display = 'none';
    });
});
