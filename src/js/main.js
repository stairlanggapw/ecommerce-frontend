const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

const navLinks = document.querySelectorAll('.nav-menu ul li a');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});

const navbar = document.getElementById('navbar');
let lastScrollTop = 0;
let scrollTimeout;

window.addEventListener('scroll', () => {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    clearTimeout(scrollTimeout);
    
    if (scrollTop > lastScrollTop && scrollTop > 100) {
        navbar.classList.add('hide');
    } else {
        navbar.classList.remove('hide');
    }
    
    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
});

const prevBtn = document.querySelector('.previous .btn1:first-child');
const nextBtn = document.querySelector('.previous .btn1:last-child');
const pageLinks = document.querySelectorAll('.previous .link');
let currentPage = 1;
const totalPages = pageLinks.length;

updateActivePage();

pageLinks.forEach(link => {
    link.addEventListener('click', function() {
        currentPage = parseInt(this.value);
        updateActivePage();
    });
});

prevBtn.addEventListener('click', function() {
    if (currentPage > 1) {
        currentPage--;
        updateActivePage();
    }
});

nextBtn.addEventListener('click', function() {
    if (currentPage < totalPages) {
        currentPage++;
        updateActivePage();
    }
});

function updateActivePage() {
    // Update class active pada nomor halaman
    pageLinks.forEach(link => {
        link.classList.remove('active');
        if (parseInt(link.value) === currentPage) {
            link.classList.add('active');
        }
    });
    
    prevBtn.disabled = currentPage === 1;
    nextBtn.disabled = currentPage === totalPages;
    
    console.log('Current Page:', currentPage);
}
