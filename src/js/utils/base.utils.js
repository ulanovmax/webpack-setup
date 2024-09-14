const scrollingTextElements = document.querySelectorAll('.scroll-text');
if (scrollingTextElements.length > 0) {
    scrollingTextElements.forEach((el) => {
        window.addEventListener('scroll', () => updateTransform(el));
        window.addEventListener('resize', () => updateTransform(el));
        updateTransform(el);
    });
}

function updateTransform(element) {
    const scrollValue = window.scrollY;
    const translateValue = scrollValue * 0.1;
    element.style.transform = `translateX(-${translateValue}px)`;
}

// Parallax effect
function parallaxEffect(elements) {
    // Magic happens here
    function parallax(e) {
        let width = window.innerWidth / 2;
        let height = window.innerHeight / 2;

        let mouseX = e.clientX;
        let mouseY = e.clientY;

        let firstPos = `${(mouseX - width) * 0.001}%`;
        let secondPos = `${(mouseY - height) * 0.001}%`;

        if (elements.length) {
            elements.forEach((item, i) => {
                if (i % 2 === 0) {
                    item.style.transform = `translate(${firstPos}, ${secondPos})`;
                } else {
                    item.style.transform = `translate(-${firstPos}, -${secondPos})`;
                }
            });
        }
    }

    document.addEventListener('mousemove', parallax);

    if (window.matchMedia('(max-width: 1024px)').matches) {
        document.removeEventListener('mousemove', parallax);
    }

    window.onresize = function () {
        if (window.innerWidth < 1024) {
            document.removeEventListener('mousemove', parallax);
        }
    };
}

const parallaxItems = document.querySelectorAll('.parallax');
parallaxEffect(parallaxItems);
