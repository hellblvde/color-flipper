const button = document.getElementById('btn');
let color = document.getElementById('color');



button.addEventListener('click', function () {
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    document.body.style.backgroundColor = '#' + randomColor;
    color.textContent = "#" + randomColor
});
