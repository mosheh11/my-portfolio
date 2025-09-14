document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;
    const icon = themeToggle.querySelector('.theme-icon');

    const savedTheme = localStorage.getItem('theme') || 'dark';
    if (savedTheme === 'light') {
        body.classList.add('light-mode');
        icon.src = 'assets/Icon/moon.svg';
        icon.alt = 'moon-icon';
        icon.classList.remove('sun-icon');
        icon.classList.add('moon-icon');
    } else {
        body.classList.remove('light-mode');
        icon.src = 'assets/Icon/sun.svg';
        icon.alt = 'sun-icon';
        icon.classList.remove('moon-icon');
        icon.classList.add('sun-icon');
    }

    themeToggle.addEventListener('click', () => {
        body.classList.toggle('light-mode');
        const isLightMode = body.classList.contains('light-mode');
        localStorage.setItem('theme', isLightMode ? 'light' : 'dark');

        if (isLightMode) {
            icon.src = 'assets/Icon/moon.svg';
            icon.alt = 'moon-icon';
            icon.classList.remove('sun-icon');
            icon.classList.add('moon-icon');
        } else {
            icon.src = 'assets/Icon/sun.svg';
            icon.alt = 'sun-icon';
            icon.classList.remove('moon-icon');
            icon.classList.add('sun-icon');
        }
    });
});
