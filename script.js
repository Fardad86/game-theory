    // script.js
    
document.addEventListener('DOMContentLoaded', function() {
    const header = document.querySelector('header');
    const toggleIcon = document.getElementById('toggle-icon');

    // ایجاد خطوط نئونی متحرک در پس‌زمینه
    const neonBackground = document.querySelector('.neon-background');
    for (let i = 0; i < 20; i++) {
        const neonLine = document.createElement('div');
        neonLine.className = 'neon-line';
    
        // موقعیت خطوط در پایین صفحه و به صورت تصادفی در طول صفحه
        neonLine.style.left = `${Math.random() * 100}vw`;
        neonLine.style.top = `100vh`; // شروع از پایین صفحه
    
        // تنظیم عرض و ارتفاع به صورت تصادفی
        neonLine.style.width = `${Math.random() * 3 + 1}px`;
        neonLine.style.height = `${Math.random() * 200 + 50}px`;
    
        // تنظیم رنگ و glow خطوط نئونی به صورت تصادفی
        const randomR = Math.floor(Math.random() * 255);
        const randomG = Math.floor(Math.random() * 255);
        neonLine.style.backgroundColor = `rgba(${randomR}, ${randomG}, 255, 0.7)`;
        neonLine.style.boxShadow = `0 0 20px rgba(${randomR}, ${randomG}, 255, 1), 
                                    0 0 30px rgba(${randomR}, ${randomG}, 255, 0.8),
                                    0 0 40px rgba(${randomR}, ${randomG}, 255, 0.6),
                                    0 0 50px rgba(${randomR}, ${randomG}, 255, 0.4)`;
    
        // تنظیم زمان و تأخیر انیمیشن به صورت تصادفی
        neonLine.style.animationDuration = `${Math.random() * 5 + 3}s`;
        neonLine.style.animationDelay = `${Math.random() * 5}s`;
    
        // تنظیم متغیرهای رندوم برای حرکت طبیعی‌تر
        neonLine.style.setProperty('--random-x', `${Math.random()}`);
        neonLine.style.setProperty('--random-rotate', `${Math.random()}`);
    
        neonBackground.appendChild(neonLine);
    }


    // انیمیشن اسلایدر گالری تصاویر
    const gallerySlider = document.querySelector('.gallery-slider');
    let galleryImages = gallerySlider.querySelectorAll('.gallery-image');
    let currentIndex = 0;

    function showNextImage() {
        galleryImages[currentIndex].style.opacity = '0';
        currentIndex = (currentIndex + 1) % galleryImages.length;
        galleryImages[currentIndex].style.opacity = '1';
    }

    // کد موجود برای تنظیمات لوگو
    document.querySelector('.logo-container').addEventListener('mouseenter', function() {
        const logo = document.querySelector('.logo');
        logo.style.transform = 'scale(1.1)';
        logo.style.filter = 'drop-shadow(0 0 30px rgba(0, 255, 204, 1))';
    });
    
    document.querySelector('.logo-container').addEventListener('mouseleave', function() {
        const logo = document.querySelector('.logo');
        logo.style.transform = 'scale(1)';
        logo.style.filter = 'drop-shadow(0 0 10px rgba(0, 255, 204, 0.5))';
    });
    
    // اضافه کردن Feather Icons
    feather.replace();


    setInterval(showNextImage, 3000);
});
