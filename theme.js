// Self-invoking function to run instantly and avoid FOUC (flash of unthemed content)
(function() {
  try {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
      document.documentElement.classList.add('light-theme');
    }
  } catch (e) {
    // Silence localStorage security exceptions in sandboxed contexts
  }
})();

document.addEventListener('DOMContentLoaded', () => {
  // Determine if we need to load from relative parent path
  const scriptTag = document.currentScript;
  let prefix = '';
  if (scriptTag) {
    const src = scriptTag.getAttribute('src') || '';
    if (src.startsWith('../')) {
      prefix = '../';
    }
  } else {
    // Fallback detection using URL path depth
    const pathParts = window.location.pathname.split('/').filter(p => p.length > 0);
    // If we are in a subdirectory, prefix with '../'
    if (pathParts.length > 1 && pathParts[pathParts.length - 2] !== 'pat-clinical-tools-hub') {
      prefix = '../';
    }
  }

  // Ensure theme.css is loaded
  if (!document.getElementById('theme-stylesheet')) {
    const link = document.createElement('link');
    link.id = 'theme-stylesheet';
    link.rel = 'stylesheet';
    link.href = prefix + 'theme.css';
    document.head.appendChild(link);
  }

  // Create theme toggle button
  const toggleBtn = document.createElement('button');
  toggleBtn.id = 'theme-toggle-btn';
  toggleBtn.className = 'btn-theme-toggle';
  toggleBtn.setAttribute('aria-label', 'Toggle theme');
  
  // Icon SVG markup with explicit width/height to prevent rendering issues in all engines
  const sunIcon = `<svg class="theme-icon sun" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" width="16" height="16"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>`;
  const moonIcon = `<svg class="theme-icon moon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" width="16" height="16"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>`;
  
  function updateBtnContent() {
    let isLight = false;
    try {
      isLight = document.documentElement.classList.contains('light-theme');
    } catch (e) {}
    toggleBtn.innerHTML = `${isLight ? moonIcon : sunIcon} <span>${isLight ? 'Dark Mode' : 'Light Mode'}</span>`;
  }
  
  updateBtnContent();
  
  toggleBtn.addEventListener('click', () => {
    let isLight = false;
    try {
      isLight = document.documentElement.classList.toggle('light-theme');
      localStorage.setItem('theme', isLight ? 'light' : 'dark');
    } catch (e) {
      // Fallback for sandboxed context
      isLight = document.documentElement.classList.contains('light-theme');
    }
    updateBtnContent();
  });

  // Find container to insert the button
  const headerActions = document.querySelector('.header-actions');
  const backNav = document.querySelector('.back-nav');
  
  if (headerActions) {
    // Main hub page
    headerActions.insertBefore(toggleBtn, headerActions.firstChild);
  } else if (backNav) {
    // Tool/Builder subpage
    backNav.style.display = 'flex';
    backNav.style.justifyContent = 'space-between';
    backNav.style.alignItems = 'center';
    backNav.appendChild(toggleBtn);
  } else {
    // Fallback placement (top right of screen)
    toggleBtn.style.position = 'fixed';
    toggleBtn.style.top = '16px';
    toggleBtn.style.right = '16px';
    toggleBtn.style.zIndex = '9999';
    document.body.appendChild(toggleBtn);
  }
});
