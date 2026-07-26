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

  // Apply theme class to body if it was active on html
  try {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
      document.body.classList.add('light-theme');
    }
  } catch (e) {}

  // Check if a theme button already exists in the original page markup
  let themeBtn = document.getElementById('themeBtn') || document.getElementById('theme-toggle-btn') || document.getElementById('theme-btn');
  let isCreated = false;

  if (!themeBtn) {
    // Create theme toggle button matching the style of existing tools
    themeBtn = document.createElement('button');
    themeBtn.id = 'themeBtn';
    themeBtn.className = 'btn btn-secondary btn-theme-toggle';
    themeBtn.setAttribute('title', 'Toggle Light/Dark Theme');
    themeBtn.setAttribute('aria-label', 'Toggle theme');
    isCreated = true;
  }

  // FontAwesome icon HTML (using solid sun and moon)
  const sunIcon = '<i class="fa-solid fa-sun"></i>';
  const moonIcon = '<i class="fa-solid fa-moon"></i>';

  function updateBtnContent() {
    let isLight = false;
    try {
      isLight = document.documentElement.classList.contains('light-theme') || document.body.classList.contains('light-theme');
    } catch (e) {}
    themeBtn.innerHTML = isLight ? moonIcon : sunIcon;
  }

  // Initial button update
  updateBtnContent();

  // If we created the button, we attach our toggle click handler
  if (isCreated) {
    themeBtn.addEventListener('click', () => {
      let isLight = false;
      try {
        isLight = !document.documentElement.classList.contains('light-theme');
        if (isLight) {
          document.documentElement.classList.add('light-theme');
          document.body.classList.add('light-theme');
          localStorage.setItem('theme', 'light');
        } else {
          document.documentElement.classList.remove('light-theme');
          document.body.classList.remove('light-theme');
          localStorage.setItem('theme', 'dark');
        }
      } catch (e) {
        // Fallback if localStorage is disabled
        isLight = document.documentElement.classList.contains('light-theme');
      }
      updateBtnContent();
    });

    // Find container to insert our new button
    const headerActions = document.querySelector('.header-actions');
    const backNav = document.querySelector('.back-nav');

    if (headerActions) {
      // Main hub page - prepend so it sits nicely next to note builder link
      headerActions.insertBefore(themeBtn, headerActions.firstChild);
    } else if (backNav) {
      // Tool subpage / builder
      backNav.style.display = 'flex';
      backNav.style.justifyContent = 'space-between';
      backNav.style.alignItems = 'center';
      backNav.appendChild(themeBtn);
    } else {
      // Fallback
      themeBtn.style.position = 'fixed';
      themeBtn.style.top = '16px';
      themeBtn.style.right = '16px';
      themeBtn.style.zIndex = '9999';
      document.body.appendChild(themeBtn);
    }
  }

  // MutationObserver to sync theme class from body to html and vice versa
  // This automatically syncs local page toggle clicks (which toggle body class) to documentElement and localStorage
  try {
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === 'class') {
          const bodyLight = document.body.classList.contains('light-theme');
          const htmlLight = document.documentElement.classList.contains('light-theme');
          
          if (bodyLight !== htmlLight) {
            document.documentElement.classList.toggle('light-theme', bodyLight);
            try {
              localStorage.setItem('theme', bodyLight ? 'light' : 'dark');
            } catch (e) {}
            updateBtnContent();
          }
        }
      });
    });
    observer.observe(document.body, { attributes: true });
  } catch (e) {}
});
