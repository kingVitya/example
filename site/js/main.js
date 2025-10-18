(function () {
    const currentYearElement = document.getElementById('current-year');
    const ctaButton = document.getElementById('cta-button');

    if (currentYearElement) {
        currentYearElement.textContent = new Date().getFullYear();
    }

    if (ctaButton) {
        ctaButton.addEventListener('click', () => {
            alert('Здесь появится дополнительная информация о проекте.');
        });
    }
})();
