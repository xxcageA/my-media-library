document.addEventListener('DOMContentLoaded', () => {
    initPage();
    setupSearch();
    setupNavScroll();
});

function initPage() {
    renderCards('novels', libraryData.novels);
    renderCards('comics', libraryData.comics);
    renderCards('anime', libraryData.anime);
    updateStats();
}

function renderCards(type, items) {
    const grid = document.getElementById(`${type}Grid`);
    if (!grid) return;
    grid.innerHTML = items.map(item => createCard(type, item)).join('');
}

function createCard(type, item) {
    const tags = item.tags.map(tag => `<span class="tag">${tag}</span>`).join('');
    return `
        <div class="card" data-type="${type}" data-title="${item.title}">
            <div class="card-image">${item.icon}</div>
            <div class="card-content">
                <h3 class="card-title">${item.title}</h3>
                <div class="card-meta">
                    <span>${type === 'novels' ? item.author : type === 'comics' ? item.author : item.studio}</span>
                    <span>${item.status}</span>
                </div>
                <p style="color: var(--text-secondary); margin-bottom: 1rem; font-size: 0.9rem;">${item.description || ''}</p>
                <div class="card-tags">${tags}</div>
            </div>
        </div>
    `;
}

function updateStats() {
    const stats = getStats();
    animateNumber('novelCount', stats.novels);
    animateNumber('comicCount', stats.comics);
    animateNumber('animeCount', stats.anime);
}

function animateNumber(elementId, target) {
    const element = document.getElementById(elementId);
    if (!element) return;
    let current = 0;
    const increment = target / 20;
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current);
        }
    }, 30);
}

function setupSearch() {
    const searchInput = document.getElementById('searchInput');
    const searchBtn = document.getElementById('searchBtn');
    if (!searchInput || !searchBtn) return;
    searchBtn.addEventListener('click', performSearch);
    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') performSearch();
    });
    searchInput.addEventListener('input', debounce(performSearch, 300));
}

function performSearch() {
    const query = document.getElementById('searchInput').value.toLowerCase().trim();
    const allCards = document.querySelectorAll('.card');
    allCards.forEach(card => {
        const title = card.dataset.title.toLowerCase();
        if (query === '' || title.includes(query)) {
            card.style.display = 'block';
            card.classList.remove('search-highlight');
        } else {
            card.style.display = 'none';
        }
    });
}

function debounce(func, wait) {
    let timeout;
    return function(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

function setupNavScroll() {
    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            navLinks.forEach(l => l.classList.remove('active'));
            link.classList.add('active');
            const targetId = link.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                const offset = 80;
                const targetPosition = targetSection.offsetTop - offset;
                window.scrollTo({ top: targetPosition, behavior: 'smooth' });
            }
        });
    });
    
    window.addEventListener('scroll', () => {
        const scrollPosition = window.scrollY + 100;
        navLinks.forEach(link => {
            const targetId = link.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                const sectionTop = targetSection.offsetTop;
                const sectionHeight = targetSection.offsetHeight;
                if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                    navLinks.forEach(l => l.classList.remove('active'));
                    link.classList.add('active');
                }
            }
        });
    });
}