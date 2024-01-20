document.addEventListener('DOMContentLoaded', () => {
    const tabs = document.querySelectorAll('.tablink');
    const tabContent = document.querySelectorAll('.tab-content');

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const tabId = tab.getAttribute('data-tab')

            tabs.forEach(t => t.classList.remove('active'));
            tabContent.forEach(tc => tc.classList.remove('active'));

            tab.classList.add('active');
            document.querySelector(`.tab-content[data-content=${tabId}]`).classList.add('active');
        })
    })
})