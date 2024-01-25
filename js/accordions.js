const titles = document.querySelectorAll('.accordion_title');
const contents = document.querySelectorAll('.accordion_content');

titles.forEach(item => {
    const span = item.querySelector('.span');

    span.addEventListener('click', (event) => {
        event.stopPropagation();

        const activeContent = document.querySelector('#' + item.dataset.tab);

        if (activeContent.classList.contains('active')) {
            activeContent.classList.remove('active');
            item.classList.remove('active');
            span.classList.remove('active');
            activeContent.style.maxHeight = 0;
        } else {
            contents.forEach(element => {
                element.classList.remove('active');
                element.style.maxHeight = 0;
            });

            titles.forEach(element => {
                element.classList.remove('active');
                const span = element.querySelector('.span');
                span.classList.remove('active');
            });

            item.classList.add('active');
            activeContent.classList.add('active');
            span.classList.add('active');
            activeContent.style.maxHeight = activeContent.scrollHeight + 'px';
        }
    });
});

const links = document.querySelectorAll('.link');

// Получаем текущий путь страницы
const currentPath = location.pathname;

links.forEach((link) => {
    // Сравниваем адрес текущей страницы с адресом ссылки
    if (link.getAttribute('href') === currentPath) {
        // Если ссылка соответствует текущей странице, добавляем класс active
        link.classList.add('active');
    }
});