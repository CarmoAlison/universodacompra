const colors = ['#000000','#ffffff'];

const button = document.getElementById('changeColorButton');
const colorFeedback = document.getElementById('colorFeedback');

button.addEventListener('click', function() {
    // Escolhe uma cor aleatória da lista
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    
    // Aplica a cor ao fundo da página e ao feedback
    document.body.style.background = `${randomColor}`;
    document.body.style.color =`#ffffff`
    
});


