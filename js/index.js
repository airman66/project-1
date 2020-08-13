const ctx = "bars-diagram";

new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['', 'АПР', '', 'МАЙ', '', 'ИЮН', '', 'ИЮЛ', '', 'АВГ', '', 'СЕНТ', '', 'ОКТ', '', 'НОЯ', '', 'ДЕК'],
        datasets: [{
            label: 'Dataset 1',
            backgroundColor: "red",
            data: [
                1,
                2,
                1,
                1,
                1,
                1,
                1,
                1,
                2,
                1,
                1,
                1,
                1,
                1,
                5,
                7,
                5,
                7
            ]
        }, {
            label: 'Dataset 2',
            backgroundColor: "blue",
            data: [
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                2,
                1,
                1,
                1,
                1,
                1,
                5,
                7,
                5,
                7
            ]
        }, {
            label: 'Dataset 3',
            backgroundColor: "green",
            data: [
                1,
                1,
                1,
                1,
                1,
                4,
                1,
                1,
                2,
                1,
                1,
                1,
                1,
                1,
                5,
                7,
                5,
                7
            ]
        }]
    },
    options: {
        events: [],
        legend: "",
        title: {
            position: "left",
            display: true,
            text: 'млн. рублей'
        },
        tooltips: {
            mode: 'index',
            intersect: false
        },
        responsive: true,
        scales: {
            xAxes: [{
                stacked: true,
            }],
            yAxes: [{
                stacked: true
            }]
        }
    }
});
