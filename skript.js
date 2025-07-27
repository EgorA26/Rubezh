// Мобильное меню (адаптив)
document.addEventListener('DOMContentLoaded', () => {
    
    const menuBtn = document.createElement('button');
    menuBtn.className = 'menu-toggle';
    menuBtn.innerHTML = '☰';
    document.querySelector('.header__inner').appendChild(menuBtn);

    menuBtn.addEventListener('click', () => {
        document.querySelector('.menu').classList.toggle('active');
    });
});
function scrollToForm() {
    const formSection = document.getElementById('application-form');
    formSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
    });
    

    // Подсветка активного пункта меню
document.addEventListener('DOMContentLoaded', function() {
    const currentPage = location.pathname.split('/').pop();
    const menuLinks = document.querySelectorAll('.menu a');
    
    menuLinks.forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        }
    });
});

    // Дополнительно можно подсветить форму
    formSection.style.transition = 'box-shadow 0.5s';
    formSection.style.boxShadow = '0 0 0 3px var(--secondary)';
    
    setTimeout(() => {
        formSection.style.boxShadow = 'none';
    }, 2000);
}

// Обработчики модального окна
const modal = document.getElementById('callback-modal');
const openBtn = document.querySelector('.header__phone .btn');
const closeBtn = document.querySelector('.modal-close');
const callbackForm = document.getElementById('callback-form');

// Открытие модалки
openBtn.addEventListener('click', () => {
    modal.classList.add('active');
});

// Закрытие модалки
closeBtn.addEventListener('click', () => {
    modal.classList.remove('active');
});

// Закрытие по клику вне формы
modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.classList.remove('active');
    }
});

// Обработка формы
callbackForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const formData = new FormData(this);
    
    // Валидация телефона
    const phone = formData.get('phone').replace(/\D/g, '');
    if (phone.length < 10) {
        alert('Пожалуйста, введите корректный номер телефона');
        return;
    }

    // Здесь должна быть отправка данных
    console.log('Данные для обратного звонка:', {
        name: formData.get('name'),
        phone: formData.get('phone')
    });

    // Закрытие модалки после отправки
    modal.classList.remove('active');
    alert('Спасибо! Мы вам перезвоним в ближайшее время.');
    this.reset();
}
function scrollToForm(e) {
    e.preventDefault();
    const form = document.getElementById('application-form');
    const targetPosition = form.offsetTop - document.querySelector('.header').offsetHeight;
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    const duration = 800;
    let start = null;

    function animation(currentTime) {
        if (start === null) start = currentTime;
        const timeElapsed = currentTime - start;
        const run = ease(timeElapsed, startPosition, distance, duration);
        window.scrollTo(0, run);
        if (timeElapsed < duration) requestAnimationFrame(animation);
    }

    function ease(t, b, c, d) {
        t /= d/2;
        if (t < 1) return c/2*t*t + b;
        t--;
        return -c/2 * (t*(t-2) - 1) + b;
    }

    requestAnimationFrame(animation);
});


// Активация текущей страницы в меню
document.addEventListener('DOMContentLoaded', function() {
    const currentPage = location.pathname.split('/').pop();
    const menuLinks = document.querySelectorAll('.menu a');
    
    menuLinks.forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        }
    });
    
    // Инициализация слайдера сертификатов
    if (document.querySelector('.certificates-slider')) {
        new Glide('.certificates-slider', {
            type: 'carousel',
            perView: 3,
            gap: 30,
            breakpoints: {
                992: {
                    perView: 2
                },
                768: {
                    perView: 1
                }
            }
        }).mount();
    }
});

// Слайдер (если добавите несколько слайдов)
// Можно подключить Swiper.js или написать свой