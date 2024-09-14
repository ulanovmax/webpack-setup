import {
    disablePageScroll,
    enablePageScroll,
    getScrollState,
} from 'scroll-lock/dist/scroll-lock.js';

const header = document.querySelector('.header');
const mobileHeader = document.querySelector('.mobile-header');
const burgerButton = document.querySelector('.burger');

// Menu hover style
const navbar = header.querySelector(`.menu`);
if (navbar) {
    const navbarElements = navbar.querySelectorAll(`.menu__item`);
    const spanElement = navbar.querySelector(`.decor`);
    const activeMenuElement = navbar.querySelector(`.menu__item.active`);

    function backgroundMenuPositionFunc(targetElement, flagMouseEnter) {
        const navbarPosition = navbar.getBoundingClientRect();
        const elementPosition = targetElement.getBoundingClientRect();

        let spanPositionLeftStart = elementPosition.left - navbarPosition.left;
        let spanWidthStart = elementPosition.width;

        if (flagMouseEnter) {
            spanElement.style.setProperty(
                '--span-transition',
                `0.5s cubic-bezier(0.75, 0, 0, 1)`
            );
        } else {
            spanElement.style.setProperty(
                '--span-transition',
                `opacity 0.5s ease, visibility 0s 0s`
            );
        }
        spanElement.style.setProperty('--width-span', `${spanWidthStart}px`);
        spanElement.style.setProperty(
            '--left-position-span',
            `${spanPositionLeftStart}px`
        );
    }

    if (activeMenuElement) {
        backgroundMenuPositionFunc(activeMenuElement, true);
        spanElement.classList.add('active');

        navbarElements.forEach((elem) => {
            elem.addEventListener('mouseenter', function (e) {
                backgroundMenuPositionFunc(e.target, true);
            });

            navbar.addEventListener('mouseleave', function () {
                backgroundMenuPositionFunc(activeMenuElement, true);
            });
        });
    } else {
        let flagMouseEnter = false;

        navbarElements.forEach((elem) => {
            elem.addEventListener('mouseenter', function (e) {
                backgroundMenuPositionFunc(e.target, flagMouseEnter);

                if (e.target.matches('.dropdown-link .menu-link')) {
                    spanElement.classList.remove('active');
                } else {
                    spanElement.classList.add('active');
                }

                flagMouseEnter = true;
            });
        });

        navbar.addEventListener('mouseleave', function (e) {
            spanElement.classList.remove('active');
            flagMouseEnter = false;
            spanElement.style.setProperty(
                '--span-transition',
                `opacity 0.5s ease, visibility 0s 0.5s`
            );
        });
    }
}

function toggleMenu(lockScroll = true) {
    header.classList.toggle('active');
    mobileHeader.classList.toggle('active');
    burgerButton.classList.toggle('active');

    if (lockScroll) {
        if (getScrollState()) {
            disablePageScroll(
                document.querySelector('.mobile-header .simplebar-content')
            );
        } else {
            enablePageScroll();
        }
    }
}

burgerButton.addEventListener('click', () => toggleMenu());

window.addEventListener('hashchange', (event) => {
    if (event.newURL !== event.oldURL) {
        toggleMenu(false);
    }
});
