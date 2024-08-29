// JS برای اضافه کردن انیمیشن‌ها و تعاملات پویا
document.addEventListener('DOMContentLoaded', function() {
    // تغییر رنگ دکمه‌ها در هنگام هاور
    const links = document.querySelectorAll('nav ul li a');
    links.forEach(link => {
        link.addEventListener('mouseenter', () => {
            link.style.color = '#00ffcc';
        });

        link.addEventListener('mouseleave', () => {
            link.style.color = '#ffffff';
        });
    });

    // اسکرول نرم به بخش‌های مختلف
    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            window.scrollTo({
                top: targetSection.offsetTop - 60,
                behavior: 'smooth'
            });
        });
    });

    // ایجاد خطوط و نقاط نئونی متحرک در پس‌زمینه
    const neonBackground = document.querySelector('.neon-background');
    for (let i = 0; i < 10; i++) {
        const neonLine = document.createElement('div');
        neonLine.className = 'neon-line';
        neonLine.style.left = `${Math.random() * 100}%`;
        neonLine.style.top = `${Math.random() * 100}%`;
        neonLine.style.animationDuration = `${Math.random() * 5 + 5}s`;
        neonLine.style.animationDelay = `${Math.random() * 5}s`;
        neonBackground.appendChild(neonLine);
    }
});
