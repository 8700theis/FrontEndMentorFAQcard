let arrow = document.querySelectorAll('.content-container-right-faq-arrowImg');
let text = document.querySelectorAll('.content-container-right-faq-text');
let heading = document.querySelectorAll('.content-container-right-faq-heading');

for (let i = 0; i < arrow.length; i++) {
    arrow[i].addEventListener('click', () => {
        if (!arrow[i].classList.contains('rotateArrow')) {
            arrow[i].classList.add('rotateArrow');
            heading[i].classList.add('textColor');
            text[i].classList.add('active');
        } else {
            arrow[i].classList.remove('rotateArrow');
            heading[i].classList.remove('textColor');
            text[i].classList.remove('active');
        }

    });
}