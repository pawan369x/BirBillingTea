document.addEventListener('DOMContentLoaded', () => {

    // --- 1. Custom Cursor Logic ---
    const cursorDot = document.querySelector('[data-cursor-dot]');
    const cursorOutline = document.querySelector('[data-cursor-outline]');

    // Only apply custom cursor on desktop
    if (window.innerWidth > 992) {
        window.addEventListener('mousemove', (e) => {
            const posX = e.clientX;
            const posY = e.clientY;

            // Dot follows instantly
            cursorDot.style.left = `${posX}px`;
            cursorDot.style.top = `${posY}px`;

            // Outline follows with slight delay using animate
            cursorOutline.animate({
                left: `${posX}px`,
                top: `${posY}px`
            }, { duration: 500, fill: "forwards" });
        });

        // Hover effect for links and buttons
        const hoverElements = document.querySelectorAll('a, button, .magnetic-btn');
        hoverElements.forEach(el => {
            el.addEventListener('mouseenter', () => {
                cursorOutline.style.width = '60px';
                cursorOutline.style.height = '60px';
                cursorOutline.style.backgroundColor = 'rgba(212, 175, 55, 0.1)';
            });
            el.addEventListener('mouseleave', () => {
                cursorOutline.style.width = '40px';
                cursorOutline.style.height = '40px';
                cursorOutline.style.backgroundColor = 'transparent';
            });
        });
    }

    // --- 2. Magnetic Button Effect ---
    const magneticButtons = document.querySelectorAll('.magnetic-btn');
    magneticButtons.forEach(btn => {
        btn.addEventListener('mousemove', (e) => {
            const rect = btn.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;

            btn.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px)`;
        });
        btn.addEventListener('mouseleave', () => {
            btn.style.transform = `translate(0px, 0px)`;
        });
    });

    // --- 3. Navbar Scroll Effect ---
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) navbar.classList.add('scrolled');
        else navbar.classList.remove('scrolled');
    });

    // --- 4. Advanced Scroll Reveal (Intersection Observer) ---
    const revealElements = document.querySelectorAll('.reveal-up, .reveal-left, .reveal-right');
    const revealOptions = { threshold: 0.15, rootMargin: "0px 0px -50px 0px" };

    const revealOnScroll = new IntersectionObserver(function (entries, observer) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;
            entry.target.classList.add('active');
            observer.unobserve(entry.target); // Reveal only once
        });
    }, revealOptions);

    revealElements.forEach(el => revealOnScroll.observe(el));

    // --- 5. Pure JS Parallax Effect ---
    const parallaxElements = document.querySelectorAll('.parallax');
    window.addEventListener('scroll', () => {
        let scrollY = window.pageYOffset;
        parallaxElements.forEach(el => {
            let speed = el.getAttribute('data-speed');
            el.style.transform = `translateY(${scrollY * speed}px)`;
        });
    });

    // --- 6. 3D Tilt Effect for Product Cards ---
    const tiltCards = document.querySelectorAll('.tilt-card');
    tiltCards.forEach(card => {
        const inner = card.querySelector('.card-inner');

        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left; // x position within the element
            const y = e.clientY - rect.top;  // y position within the element

            const centerX = rect.width / 2;
            const centerY = rect.height / 2;

            const rotateX = ((y - centerY) / centerY) * -10; // Max rotation 10deg
            const rotateY = ((x - centerX) / centerX) * 10;

            inner.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
        });

        card.addEventListener('mouseleave', () => {
            inner.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
        });
    });

    // --- 7. Mobile Menu Toggle ---
    const menuBtn = document.querySelector('.menu-btn');
    const navLinks = document.querySelector('.nav-links');
    
    if (menuBtn && navLinks) {
        menuBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            
            // Toggle icon
            const icon = menuBtn.querySelector('i');
            if (navLinks.classList.contains('active')) {
                icon.classList.remove('ri-menu-4-line');
                icon.classList.add('ri-close-large-line');
            } else {
                icon.classList.remove('ri-close-large-line');
                icon.classList.add('ri-menu-4-line');
            }
        });

        // Close menu when clicking a link
        const navItems = document.querySelectorAll('.nav-links a');
        navItems.forEach(item => {
            item.addEventListener('click', () => {
                if (window.innerWidth <= 768) {
                    navLinks.classList.remove('active');
                    const icon = menuBtn.querySelector('i');
                    icon.classList.remove('ri-close-large-line');
                    icon.classList.add('ri-menu-4-line');
                }
            });
        });
    }
});

// --- 8. WhatsApp Order Modal Logic ---
let currentProduct = '';
let currentPricePerKg = 600;
let currentQtyGrams = 100;

window.openOrderModal = function(productName, price) {
    currentProduct = productName;
    currentPricePerKg = price;
    currentQtyGrams = 100;

    document.getElementById('modalProductName').innerText = productName;
    document.getElementById('modalPrice').innerText = price;
    
    updateDisplay();
    document.getElementById('orderModal').classList.add('active');
}

window.closeOrderModal = function() {
    document.getElementById('orderModal').classList.remove('active');
}

window.updateQty = function(changeGrams) {
    let newQty = currentQtyGrams + changeGrams;
    if (newQty < 100) newQty = 100; // Minimum order 100gm
    if (newQty > 50000) newQty = 50000; // Maximum order 50kg
    
    currentQtyGrams = newQty;
    updateDisplay();
}

function updateDisplay() {
    if (currentQtyGrams >= 1000 && currentQtyGrams % 1000 === 0) {
        document.getElementById('orderQty').innerText = currentQtyGrams / 1000;
        document.querySelector('.qty-unit').innerText = 'kg';
    } else {
        document.getElementById('orderQty').innerText = currentQtyGrams;
        document.querySelector('.qty-unit').innerText = 'gm';
    }

    let totalAmount = (currentPricePerKg / 1000) * currentQtyGrams;
    document.getElementById('modalTotal').innerText = totalAmount;
}

window.sendWhatsAppOrder = function() {
    const phoneNumber = "916230047793"; // Fixed as requested
    const totalAmount = (currentPricePerKg / 1000) * currentQtyGrams;
    
    let displayQty = currentQtyGrams >= 1000 && currentQtyGrams % 1000 === 0 
        ? (currentQtyGrams / 1000) + ' kg' 
        : currentQtyGrams + ' gm';

    const text = `Hello Bir Tea Coop!\n\nI would like to order:\n*Product:* ${currentProduct}\n*Quantity:* ${displayQty}\n*Total:* ₹${totalAmount}\n\nPlease let me know the payment and delivery details.`;
    
    const encodedText = encodeURIComponent(text);
    const waUrl = `https://wa.me/${phoneNumber}?text=${encodedText}`;
    
    window.open(waUrl, '_blank');
    closeOrderModal();
}