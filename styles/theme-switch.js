// Theme switching functionality
document.addEventListener('DOMContentLoaded', function() {
    // Create theme switch elements
    const switchWrapper = document.createElement('div');
    switchWrapper.className = 'theme-switch-wrapper';
    
    const switchLabel = document.createElement('span');
    switchLabel.textContent = '🌞';
    
    const themeSwitch = document.createElement('div');
    themeSwitch.className = 'theme-switch';
    themeSwitch.setAttribute('role', 'button');
    themeSwitch.setAttribute('aria-label', 'Toggle dark mode');
    themeSwitch.setAttribute('tabindex', '0');
    
    const darkLabel = document.createElement('span');
    darkLabel.textContent = '🌙';
    
    switchWrapper.appendChild(switchLabel);
    switchWrapper.appendChild(themeSwitch);
    switchWrapper.appendChild(darkLabel);
    
    // Add to header
    const header = document.querySelector('.book-header');
    if (header) {
        header.appendChild(switchWrapper);
    }
    
    // Check for saved theme preference
    const currentTheme = localStorage.getItem('theme');
    if (currentTheme) {
        document.documentElement.setAttribute('data-theme', currentTheme);
    } else {
        // Check system preference
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            document.documentElement.setAttribute('data-theme', 'dark');
        }
    }
    
    // Update switch position based on current theme
    if (document.documentElement.getAttribute('data-theme') === 'dark') {
        themeSwitch.classList.add('dark');
    }
    
    // Handle theme switching
    function switchTheme(e) {
        if (document.documentElement.getAttribute('data-theme') === 'dark') {
            document.documentElement.setAttribute('data-theme', 'light');
            localStorage.setItem('theme', 'light');
        } else {
            document.documentElement.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
        }
    }
    
    // Add event listeners
    themeSwitch.addEventListener('click', switchTheme);
    themeSwitch.addEventListener('keypress', function(e) {
        if (e.key === 'Enter' || e.key === ' ') {
            switchTheme(e);
        }
    });
    
    // Listen for system theme changes
    if (window.matchMedia) {
        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
            if (!localStorage.getItem('theme')) {
                document.documentElement.setAttribute('data-theme', e.matches ? 'dark' : 'light');
            }
        });
    }
}); 