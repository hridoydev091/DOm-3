// --------step 2 - random color generator function-----
window.onload = () => {
    main();
};

function main() {
    const root = document.getElementById('root');
    const output = document.getElementById('output');
    const changeBtn = document.getElementById('change-btn');
    const copyBtn = document.getElementById('copy-btn');

    changeBtn.addEventListener('click', function () {
        const bgColor = generateHexColor();
        root.style.backgroundColor = bgColor;
        output.value = bgColor;
    });

    copyBtn.addEventListener('click', function () {
        navigator.clipboard.writeText(output.value);
    });
}
// -------step 1 - create onload handler--------
function generateHexColor() {
    const red = Math.floor(Math.random() * 256).toString(16).padStart(2, '0');
    const green = Math.floor(Math.random() * 256).toString(16).padStart(2, '0');
    const blue = Math.floor(Math.random() * 256).toString(16).padStart(2, '0');
    return `#${red}${green}${blue}`;
}
