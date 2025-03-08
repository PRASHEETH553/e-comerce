// JavaScript to toggle FAQ answers
document.addEventListener('DOMContentLoaded', () => {
    const faqItems = document.querySelectorAll('.faq-item h3');
    faqItems.forEach(item => {
        item.addEventListener('click', () => {
            const answer = item.nextElementSibling;
            answer.classList.toggle('visible');
            // Optionally, change the arrow direction
            item.classList.toggle('active');
        });
    });
});