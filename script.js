function showMenu(locationId) {
    const menus = document.querySelectorAll('.menu');
    menus.forEach(menu => {
        if (menu.id === locationId) {
            menu.classList.remove('hidden'); // показати меню обраної локації
            menu.style.opacity = '0';
            menu.style.transition = 'opacity 0.5s ease';
            setTimeout(() => {
                menu.style.opacity = '1';
            }, 100);
        } else {
            menu.style.opacity = '0';
            setTimeout(() => {
                menu.classList.add('hidden'); // сховати інші меню
            }, 0);
        }
    });
}

if (typeof module !== 'undefined' && module.exports) {
    module.exports = { showMenu, changeAboutText };
}

// анімація кнопок навігації
const navLinks = document.querySelectorAll('nav a');
navLinks.forEach(link => {
    link.addEventListener('click', function (event) {
        event.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        document.getElementById(targetId).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// паралакс-ефект для хедера в хтмл
window.addEventListener('scroll', function () {
    const header = document.querySelector('.parallax-header');
    header.style.backgroundPositionY = `${window.scrollY * 0.5}px`;

    // кфект прозорості тексту при скролі
    const headerContent = document.querySelector('.header-content');
    const maxScroll = 450; // відстань після якої текст стане повністю прозорим
    const opacity = Math.max(0, 1 - window.scrollY / maxScroll);
    headerContent.style.opacity = opacity;

    // ефект появи тексту при скролі
    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (elementPosition < windowHeight - 100) {
            element.classList.add('visible');
        }
    });
});

// ініціалізація паралакс ефекту для фотографій
window.addEventListener('scroll', function () {
    const parallaxImages = document.querySelectorAll('.parallax-image');
    parallaxImages.forEach(image => {
        const speed = image.getAttribute('data-speed');
        const yPos = -(window.scrollY * speed);
        image.style.transform = `translateY(${yPos}px)`;
    });
});

    const aboutTexts = [
        "Ми створюємо каву з любов'ю! У наших кав'ярнях використовуються лише найкращі зерна, а кожен напій готується з турботою.",
        "Наша кава володіє високими смаковими та ароматичними якостями, які дарують незабутнє задоволення.",
        "У наших кав'ярнях панує затишна атмосфера, де кожен гість може відчути себе як вдома.",
        "Ми пишаємося тим, що наші напої виготовляються з дотриманням найвищих стандартів якості."
    ];

    let currentIndex = 0;

    function changeAboutText() {
        const aboutTextElement = document.getElementById("about-text");

        // зміна тексту в моменті, коли він повністю зник
        setTimeout(() => {
            currentIndex = (currentIndex + 1) % aboutTexts.length;
            aboutTextElement.textContent = aboutTexts[currentIndex];
        }, 2800); // час співпадає з фазою "opacity: 0" (40% ві д 7 секунд)
    }

    // зміна тексту кожні 7 секунд
    setInterval(changeAboutText, 7000);

// показати категорії для обраної кав'ярні
function showCategories(locationId) {
    // сховати всі категорії
    document.querySelectorAll('.categories').forEach(categories => {
        categories.classList.add('hidden');
    });

    // сховати всі меню
    document.querySelectorAll('.menu').forEach(menu => {
        menu.classList.add('hidden');
    });

    // показати категорії для обраної кав'ярні
    const locationCategories = document.getElementById(`${locationId}-categories`);
    if (locationCategories) {
        locationCategories.classList.remove('hidden');
    }
}

// показати меню для обраної категорії та кав'ярні
function showMenuByCategory(categoryId, locationId) {
    // сховати всі меню в межах обраної кав'ярні
    const locationMenus = document.querySelectorAll(`#${locationId} .menu-grid`);
    locationMenus.forEach(menu => {
        menu.classList.add('hidden');
    });

    // показати обране меню
    const categoryMenu = document.getElementById(`${categoryId}-${locationId}`);
    if (categoryMenu) {
        categoryMenu.classList.remove('hidden');
    } else {
        console.error(`Menu not found: #${categoryId}-${locationId}`);
    }

    // переконатися ,  що головний контейнер меню не прихований
    const locationMenu = document.getElementById(locationId);
    if (locationMenu) {
        locationMenu.classList.remove('hidden');
    }
}
