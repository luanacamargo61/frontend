canvas = document.querySelector('canvas');

canvas.width = 800;
canvas.height = 600;

c = canvas.getContext('2d');
 
c.fillStyle = "red";
c.fillRect(100,80,150,200);
c.fillStyle = "rgba(0,255,0,0.5)";
c.fillRect(200,100,500,100);
c.fillRect(100,400,800,100);

c.beginPath();
c.moveTo(50,450);
c.lineTo(700,50);
c.lineTo(500,300);
c.lineTo(700,300);
c.strokeStyle = "black";
c.stroke();
c.closePath();

c.beginPath();
c.arc(400, 450, 100, 0, Math.PI * 2);
c.fillStyle = "rgba(0,0,225,0.5)";
c.stroke();
c.fill();
c.closePath();

for(var i = 0; i <10; i++)
{
    let x = Math.random() * canvas.width;
    let y = Math.random() * canvas.height;

    c.beginPath();
    c.arc(x, y, Math.random() * 100, 0, Math.PI *2);
    c.fillStyle = "rgba(0,0,255,0.5)";
    c.stroke();
    c.fill();
    c.closePath();
}