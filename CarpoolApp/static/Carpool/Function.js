
function toggleTheme() {
    const html = document.documentElement;
    const isDark = html.getAttribute('data-theme') === 'dark';
    const newTheme = isDark ? 'light' : 'dark';
    html.setAttribute('data-theme', newTheme);
    
    const themeToggle = document.querySelector('.theme-toggle i');
    themeToggle.className = isDark ? 'fas fa-sun' : 'fas fa-moon';
}

function showResults() {
    const searchContainer = document.getElementById('searchContainer');
    const resultsPage = document.getElementById('resultsPage');
    const searchInput = document.getElementById('searchInput');
    const miniSearchInput = document.getElementById('miniSearchInput');
    
    miniSearchInput.value = searchInput.value;
    
    searchContainer.style.opacity = '0';
    searchContainer.style.transform = 'translateY(-20px)';
    setTimeout(() => {
        searchContainer.style.display = 'none';
        resultsPage.style.display = 'block';
    }, 300);
}

function showSearch() {
    const searchContainer = document.getElementById('searchContainer');
    const resultsPage = document.getElementById('resultsPage');
    const searchInput = document.getElementById('searchInput');
    const miniSearchInput = document.getElementById('miniSearchInput');
    
    searchInput.value = miniSearchInput.value;
    
    resultsPage.style.opacity = '0';
    resultsPage.style.transform = 'translateY(-20px)';
    setTimeout(() => {
        resultsPage.style.display = 'none';
        searchContainer.style.display = 'block';
        searchContainer.style.opacity = '1';
        searchContainer.style.transform = 'translateY(0)';
    }, 300);
}

document.getElementById('searchInput').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        showResults();
    }
});

document.getElementById('miniSearchInput').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        console.log('Searching for:', this.value);
    }
});



