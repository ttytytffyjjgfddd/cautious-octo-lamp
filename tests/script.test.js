const { showMenu } = require('../script.js');

test('Перевірка видимості меню', async () => {
    
    document.body.innerHTML = '<div id="menu1" class="menu hidden"></div>';
    
    showMenu('menu1');
    
    await new Promise(r => setTimeout(r, 150));

    expect(document.getElementById('menu1').classList.contains('hidden')).toBe(false);
});

const { changeAboutText } = require('../script.js');

test('Перевірка зміни тексту у функції changeAboutText', async () => {
    
    document.body.innerHTML = '<div id="about-text"></div>';

    const aboutTexts = [
        "Ми створюємо каву з любов'ю! У наших кав'ярнях використовуються лише найкращі зерна, а кожен напій готується з турботою.",
        "Наша кава володіє високими смаковими та ароматичними якостями, які дарують незабутнє задоволення."
    ];

    document.getElementById('about-text').textContent = aboutTexts[0];

    changeAboutText();

    await new Promise(r => setTimeout(r, 3000)); 

    expect(document.getElementById('about-text').textContent).toBe(aboutTexts[1]);
});
