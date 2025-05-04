// Basic client-side router for the playbook
const routes = {
    '/': () => import('../pages/Index.js'),
    '/playbook': () => import('../pages/Playbook.tsx'),
    '/play-detail': () => import('../pages/PlayDetail.tsx'),
    '/video-library': () => import('../pages/VideoLibrary.tsx'),
    '/404': () => import('../pages/NotFound.tsx'),
};

const appDiv = document.getElementById('app');

async function navigateTo(path) {
    const route = routes[path] || routes['/404'];
    const pageModule = await route();
    appDiv.innerHTML = '';
    appDiv.appendChild(await pageModule.default());
}

// Handle initial load and browser navigation
window.addEventListener('popstate', () => navigateTo(window.location.pathname));

// Intercept link clicks
document.addEventListener('click', (e) => {
    if (e.target.tagName === 'A' && e.target.href.startsWith(window.location.origin)) {
        e.preventDefault();
        const path = new URL(e.target.href).pathname;
        window.history.pushState({}, '', path);
        navigateTo(path);
    }
});

// Load the initial route
navigateTo(window.location.pathname);