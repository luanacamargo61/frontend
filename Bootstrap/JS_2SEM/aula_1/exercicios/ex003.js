canvas = document.querySelector('canvas');
canvas.width = 800;
canvas.height = 600;
c = canvas.getContext('2d');

let x = canvas.width /2;
let y = canvas.width /2;
var quad = 50;

Desenhar()

function Desenhar()
{
    c.clearRect (0, 0, canvas.width, canvas.height);
    c.fillRect(x, y, quad, quad);
}

document.addEventListener('keydown', (event) =>{
    if (event.key === "a" || event.key === "A")
    {
       x -= 10;
       Desenhar();
       
    }
    else if(event.key === "d" || event.key === "D")
    {
        x += 10;
       Desenhar();
    }
})
document.addEventListener('keydown', (event) =>{
    if (event.key === "w" || event.key === "W")
    {
       y -= 10;
       Desenhar();
    }
    else if(event.key === "s" || event.key === "S")
    {
        y += 10;
       Desenhar();
    }
})