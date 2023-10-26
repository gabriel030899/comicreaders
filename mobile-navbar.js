class MobileNavbar {
    constructor(mobileMenu, navList, navLinks, mainContent, footerContent, searchBar) {
        this.mobileMenu = document.querySelector(mobileMenu);
        this.navList = document.querySelector(navList);
        this.navLinks = document.querySelectorAll(navLinks);
        this.mainContent = document.querySelector(mainContent);
        this.searchBar = document.querySelector(searchBar);
        this.footerContent = document.querySelector(footerContent);
        this.activeClass = "active";

        this.handleClick = this.handleClick.bind(this);
    }

    animateLinks() {
        this.navLinks.forEach((link, index) => {
            link.style.animation
                ? (link.style.animation = "")
                : (link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`);
        });
    }

    hideMainContent() {
        this.mainContent.style.display = "none";
        this.footerContent.style.display = "none";
        this.searchBar.style.display = "none";
    }

    showMainContent() {
        this.mainContent.style.display = "flex";
        this.footerContent.style.display = "block";
        this.searchBar.style.display = "flex";
    }

    handleClick() {
        this.navList.classList.toggle(this.activeClass);
        this.mobileMenu.classList.toggle(this.activeClass);
        this.animateLinks();

        if (this.mainContent.style.display === "none") {
            this.showMainContent();
        } else {
            
            this.hideMainContent();
        }
    }

    addClickEvent() {
        this.mobileMenu.addEventListener("click", this.handleClick);
    }

    init() {
        if (this.mobileMenu) {
            this.addClickEvent();
        }
        return this;
    }
}

const mobileNavbar = new MobileNavbar(
    ".mobile-menu",
    "#top-list",
    ".top-list-links",
    "main",
    "footer",
    ".top-search-bar",
);

mobileNavbar.init();