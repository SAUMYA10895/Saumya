window.onload = init;

function init() {
    setTimeout(() => {
        document.querySelector('.intro-container').classList.add('fade-out');
    }, 4000);

    function showMain() {
        const header = document.getElementsByClassName('header');
        const body = document.getElementsByTagName('body')[0];
        body.style.cssText = `overflow-y: visible`;
        header[0].style.cssText = `
            display: inline-flex;
            animation: mainContentAnim 1.5s ease forwards;
        `;
    }
    setTimeout(showMain, 10000);
}