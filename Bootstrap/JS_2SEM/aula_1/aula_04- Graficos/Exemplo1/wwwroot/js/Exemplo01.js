var data = {
    labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho'],

    datasets: [{
        label: 'Vendas Mensais',
        backgroundColor: 'rgba(76, 193, 192, 0.6)',
        borderColor: 'rgba(0, 192, 150,1)',
        data: [12, 19, 3, 5, 2,5]
    }]
};

var options = {
    scales: {
        y: {
            beginAtZero: true        
        }
    }
}
var ctx = document.querySelector('#grafico').getContext('2d');
var barChart = new Chart(ctx, {
    type: 'bar',
    data: data,
    options: options
})