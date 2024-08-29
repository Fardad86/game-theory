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
});
