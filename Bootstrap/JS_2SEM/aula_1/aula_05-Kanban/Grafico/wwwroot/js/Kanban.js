const colunas = document.querySelector(".column");

let ItemArrastado = null;

colunas.forEach(item => {
    item.addEventListener("dragstart", (e) =>{
        ItemArrastado = e.target;
        ItemArrastado.classList.add("dragging");
    })


item.addEventListener("dragend", () =>{
    ItemArrastado.classList.remove("dragging");

    ItemArrastado = null
})
});

colunas.forEach((item) =>
{
    item.addEventListener("dragend", (e) =>{
        e.preventDefault();
        if(!ItemArrastado) return;
         const aplicarDepois = getNewPosition(item, e.clientY);

         if(aplicarDepois){
            aplicarDepois.insertAdjacentElement("afterend", ItemArrastado);
        }else{
            item.prepend(ItemArrastado);
        }
    })
})

function getNewPosition(column, posY){
    const cards = column.querySelectorAll(".item:not(.dragging)");
    let result;

    for(let refer_card of cards){
        const box = refer_card.getBoundingClientRect();
        const boxCentery = box.top + box.height /2;

        if(posY >= boxCenterY) result = refer_card;
    }
    return result;
}