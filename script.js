
document.getElementById('addReviewBtn').addEventListener('click', function () {
    let review = prompt('Введите ваш отзыв:');
    if (review) {
        let reviewDiv = document.createElement('div');
        reviewDiv.className = 'review';
        reviewDiv.textContent = review;
        document.getElementById('reviewsContainer').appendChild(reviewDiv);
    }
});


document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault();

    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let message = document.getElementById('message').value;

    if (name && email && message) {
        alert('Спасибо за ваше сообщение, ' + name + '! Мы свяжемся с вами по email: ' + email);
        document.getElementById('contactForm').reset();
    } else {
        alert('Пожалуйста, заполните все поля.');
    }
});
