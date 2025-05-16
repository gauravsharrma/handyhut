async function init() {
    try {
        // Load Header
        const headerResponse = await fetch('header.html');
        const headerText = await headerResponse.text();
        document.getElementById('header-container').innerHTML = headerText;

        // Load Footer
        const footerResponse = await fetch('footer.html');
        const footerText = await footerResponse.text();
        document.getElementById('footer-container').innerHTML = footerText;

        // Initialize Menu
        const menuButton = document.getElementById('mobileMenuButton');
        const menu = document.getElementById('mobileMenu');
        const desktopNav = document.getElementById('desktop-nav');

        let navCategories = [];
        if (tools && Array.isArray(tools)) {
            navCategories = [...new Set(tools.map(tool => tool.category))];
        }

        if (desktopNav) {
            desktopNav.innerHTML = navCategories.map(category => `
                    <div class="relative group">
                        <button class="py-2 px-3 hover:text-${getCategoryColor(category)}-400">${category}</button>
                        <div class="absolute top-full left-0 bg-gray-800 mt-0 rounded shadow-lg w-48 hidden group-hover:block z-20">
                            ${tools.filter(tool => tool.category === category).map(tool => `
                                <a href="${tool.url}" class="block px-4 py-2 hover:bg-gray-700">${tool.name}</a>
                            `).join('')}
                        </div>
                    </div>
                `).join('');
        }

        if (menu) {
            menu.innerHTML = navCategories.map(category => `
                    <div>
                        <button class="w-full text-left py-2 px-4 bg-gray-700 rounded submenu-toggle">${category}</button>
                        <div class="hidden ml-4 mt-2 space-y-1 submenu">
                            ${tools.filter(tool => tool.category === category).map(tool => `
                                <a href="${tool.url}" class="block py-2 px-6 hover:bg-gray-700">${tool.name}</a>
                            </div>
                        </div>
                    `).join('');
        }

        if (menuButton && menu) {
            menuButton.addEventListener('click', () => {
                menu.classList.toggle('hidden');
            });
        }

        const submenuToggles = document.querySelectorAll('.submenu-toggle');
        submenuToggles.forEach(toggle => {
            toggle.addEventListener('click', () => {
                const submenu = toggle.nextElementSibling;
                if (submenu) submenu.classList.toggle('hidden');
            });
        }

        // Generate Tool Cards
        const toolGrid = document.getElementById('tool-grid');
        tools.forEach(tool => {
            const card = document.createElement('a');
            card.href = tool.url;
            card.classList.add('tool-card');
            card.innerHTML = `
                    <div class="p-6">
                        <h2 class="text-xl font-semibold text-${getCategoryColor(tool.category)}-400 mb-2">${tool.name}</h2>
                        <p class="text-gray-400">${tool.description}</p>
                        <div class="tag">
                            <span class="inline-block px-2 py-1 text-xs font-semibold rounded text-${getCategoryColor(tool.category)}-400 bg-${getCategoryColor(tool.category)}-900">${tool.category}</span>
                        </div>
                    </div>
                `;
            toolGrid.appendChild(card);
        });

    } catch (error) {
        console.error("Initialization failed:", error);
    }
}

init();

// Helper function to get category color
function getCategoryColor(category) {
    switch (category) {
        case "Finance":
            return "green";
        case "Utility":
            return "yellow";
        case "AI":
            return "blue";
        case "Health":
            return "purple";
        case "Information":
            return "teal";
        default:
            return "gray";
    }
}