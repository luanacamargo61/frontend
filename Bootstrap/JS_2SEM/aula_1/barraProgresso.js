function animarBarraProgresso()
{
    var progresso = 0;
    var barra = $(".progress-bar");
    var barraProgresso = $(".progress");

    var intervalo = setInterval(function(){
        if(progresso > 100)
        {
            clearInterval(intervalo);
            barraProgresso.hide();
            document.body.style.backgroundImage = `url("https://images.pexels.com/photos/2049422/pexels-photo-2049422.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")`
        }
        else{
            progresso += 10;
            barra.css("width", progresso + "%")
        }
    },50);
}