const ctx6 = document.getElementById('chart_6').getContext('2d');
const myChart6 = new Chart(ctx6, {
    type: 'bar',
    data: {
        labels: ['Users', 'Visitors'],
        datasets: [{
            label: '# current month',
            data: [9, 7],
            backgroundColor: [
                '#61481C',
                '#A47E3B'
            ],
            borderColor: [
                '#61481C',
                '#A47E3B'
            ],
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: true
    }
});