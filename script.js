document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('flight-form');
    const resultContainer = document.createElement('div');
    form.appendChild(resultContainer);

    // Обработчик для подсчета рейсов
    document.getElementById('calculate').addEventListener('click', function () {
        let isValid = true;

        const departure = document.getElementById('departure');
        const destination = document.getElementById('destination');
        const departureDate = document.getElementById('departure-date');
        const passengers = document.getElementById('passengers');

        clearErrors();
        resultContainer.innerHTML = '';

        if (!departure.value.trim()) {
            showError('departure', 'Введите город отправления.');
            isValid = false;
        }

        if (!destination.value.trim()) {
            showError('destination', 'Введите город назначения.');
            isValid = false;
        }

        if (departure.value.trim() && destination.value.trim() && departure.value.trim().toLowerCase() === destination.value.trim().toLowerCase()) {
            showError('destination', 'Город отправления и назначения не могут совпадать.');
            isValid = false;
        }

        if (!departureDate.value) {
            showError('departure-date', 'Выберите дату вылета.');
            isValid = false;
        }

        if (!passengers.value || passengers.value <= 0) {
            showError('passengers', 'Введите количество пассажиров.');
            isValid = false;
        }

        if (isValid) {
            const ticketPrice = 7000;
            const totalPrice = ticketPrice * passengers.value;

            const resultMessage = document.createElement('p');
            resultMessage.textContent = `Итоговая сумма: ${totalPrice} рублей`;

            resultContainer.appendChild(resultMessage);
        }
    });

    // Обработчик для формы отзывов
    let travelerCount = 2; // Счетчик путешественников
    document.getElementById("review-form").addEventListener("submit", function (event) {
        event.preventDefault();

        // Увеличиваем счетчик путешественников
        travelerCount++;

        // Получаем значения полей формы
        const gender = document.getElementById("gender").value;
        const reviewText = document.getElementById("review-text").value;

        // Создаем новый элемент отзыва
        const reviewContainer = document.createElement("div");
        reviewContainer.classList.add("place");

        // Выбираем изображение в зависимости от пола
        const img = document.createElement("img");
        img.classList.add('place-image');
        if (gender === "male") {
            img.src = "image/review1.png";  // Картинка для мужчин
            img.alt = `Путешественник ${travelerCount}`;
        } else if (gender === "female") {
            img.src = "image/review2.png";  // Картинка для женщин
            img.alt = `Путешественник ${travelerCount}`;
        }

        // Создаем элементы отзыва
        const reviewTitle = document.createElement("h3");
        reviewTitle.textContent = `Путешественник ${travelerCount}`; // Отображаем номер путешественника
        const reviewTextElement = document.createElement("p");
        reviewTextElement.textContent = `"${reviewText}"`;

        // Добавляем элементы в контейнер отзыва
        reviewContainer.appendChild(reviewTitle);
        reviewContainer.appendChild(img);
        reviewContainer.appendChild(reviewTextElement);

        // Добавляем новый отзыв в контейнер отзывов
        const reviewsContainer = document.getElementById("reviews-container");
        reviewsContainer.appendChild(reviewContainer);

        // Очищаем форму после отправки
        document.getElementById("review-form").reset();
    });

    function showError(elementId, message) {
        const errorElement = document.getElementById(elementId + '-error');
        errorElement.textContent = message;
        errorElement.style.color = 'red';

        // Добавляем красную рамку к полям ввода
        const inputElement = document.getElementById(elementId);
        if (inputElement) {
            inputElement.style.border = '2px solid red';
        }
    }

    function clearErrors() {
        const errorMessages = document.querySelectorAll('.error-message');
        errorMessages.forEach(function (element) {
            element.textContent = '';
        });

        const inputs = document.querySelectorAll('#flight-form input');
        inputs.forEach(function (input) {
            input.style.border = '';
        });
    }
});
