const ctx = document.getElementById('myChart');

  new Chart(ctx, {
    type: 'line',
    data: {
      labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      datasets: [{
        label: 'hours',
        data: [1, 19, 3, 5, 2, 3],
        borderWidth: 0
      }]
    },
    
    options: {
      scales: {
        y: {
          beginAtZero: true,
          
        }
      },
    }
  });