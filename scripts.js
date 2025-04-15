document.querySelector('.modal-form').addEventListener('submit', function(event) {
    event.preventDefault(); 

    const errorMessages = document.querySelectorAll('.error-message');
    errorMessages.forEach(msg => {
        msg.style.display = 'none';
    });

    const inputs = this.querySelectorAll('.styled-input, input[type="checkbox"]'); 
    let isValid = true;

    inputs.forEach(input => {
        const errorMessage = input.closest('.input-container').querySelector('.error-message');

        if (!input.checkValidity()) {
            isValid = false;
            errorMessage.textContent = input.validationMessage;
            errorMessage.style.display = 'block';
        }
    });

    if (isValid) {
        document.getElementById('modal').style.display='none'
        document.getElementById('form').reset();
        setTimeout(() => {
            alert('Форма успешно отправлена');
        }, 10);
    }
});

function closeModal() {
    document.getElementById('modal').style.display = 'none';
    document.getElementById('form').reset(); 

    const errorMessages = document.querySelectorAll('.error-message');
    errorMessages.forEach(msg => {
        msg.style.display = 'none';
    });
}

document.addEventListener("DOMContentLoaded", function() {
    const sliderContainer = document.getElementById('slider-container');

    // Создаем слайдер
    const slider = document.createElement('div');
    slider.classList.add('slider');

    // Создаем слайды
    const slide1 = document.createElement('div');
    slide1.classList.add('slide');
    slide1.innerHTML = `<div class="mobile-popcorn-container">
                            <div class="popcorn">
                                <div class="card-head-inline">
                                    <div class="notes">
                                        <div class="note" style="background-color: #FFA726;">
                                            Товар дня
                                        </div>
                                        <div  class="note" style="background-color: #18C576;">
                                            - 29%
                                        </div>
                                    </div>
                                    <div class="favorites">
                                        <button class="favorites-icon"><img src="assets/images/heart.svg" alt=""></button>
                                        <button class="favorites-icon"><img src="assets/images/eye.svg" alt=""></button>
                                    </div>
                                </div>
                            </div>
                            <div class="card-tail-ice-cream-popcorn">
                                <div class="card-text-ice-cream-popcorn">Попкорн солёный,<br>для СВЧ-печи, 120 г</div>
                                <div class="order" style="flex-direction: column;">
                                    <div class="price" style="color: #444444;">
                                        160 ₽
                                    </div>
                                    <button class="button-form" style="padding: 6px 29px;" onclick="document.getElementById('modal').style.display='flex'">
                                        Оставить заявку
                                    </button>
                                </div>
                            </div>
                        </div>`; 
    slider.appendChild(slide1);

    const slide2 = document.createElement('div');
    slide2.classList.add('slide');
    slide2.innerHTML = `<div class="mobile-ice-cream-container">
                            <div class="ice-cream">
                                <div class="card-head-inline">
                                    <div class="notes">
                                        <div class="note" style="background-color: #AC59F1;">
                                            Хит
                                        </div>
                                    </div>
                                    <div class="favorites">
                                        <button class="favorites-icon"><img src="assets/images/heart.svg" alt=""></button>
                                        <button class="favorites-icon"><img src="assets/images/eye.svg" alt=""></button>
                                    </div>
                                </div>
                            </div>
                            <div class="card-tail-ice-cream-popcorn">
                                <div class="card-text-ice-cream-popcorn">Эскимо с малиной,<br>150 г</div>
                                <div class="order" style="flex-direction: column;">
                                    <div class="price" style="color: #444444;">
                                        190 ₽
                                    </div>
                                    <button class="button-form" style="padding: 6px 29px;" onclick="document.getElementById('modal').style.display='flex'">
                                        Оставить заявку
                                    </button>
                                </div>
                            </div>
                        </div>`; 
    slider.appendChild(slide2);


    // Добавляем слайдер в контейнер
    sliderContainer.appendChild(slider);

    function toggleSlider() {
        if (window.innerWidth <=  733) {
            sliderContainer.style.display = 'block';  
        }
        else {
            sliderContainer.style.display = 'none';
        }
    }

    // Вызываем функцию при загрузке страницы
    toggleSlider();

    // Добавляем слушатель на изменение размера окна
    window.addEventListener('resize', toggleSlider);
});