const ctx5 = document.getElementById('chart_5').getContext('2d');
const myChart5 = new Chart(ctx5, {
    type: 'doughnut',
    data: {
        labels: ['Assam %', 'Manipur %', 'Arunachal %', 'Nagaland %', 'Mizoram %', 'Meghalaya %'],
        datasets: [{
            label: '# current month',
            data: [9, 7, 3, 5, 3, 8],
            backgroundColor: [
                '#002B5B',
                '#355764',
                '#F675A8',
                '#EAE509',
                '#AF7AB3',
                '#2B7A0B'
            ],
            borderColor: [
                '#002B5B',
                '#355764',
                '#F675A8',
                '#EAE509',
                '#AF7AB3',
                '#2B7A0B'
            ],
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: true
    }
});