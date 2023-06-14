fetch('data.json')
    .then(response => response.json())
    .then(data => {
        data.forEach(element=> console.log(element))
      let chart = document.getElementById('expenses').getContext('2d');
      Chart.defaults.color = 'hsl(28, 10%, 53%)';
      let barChart = new Chart(chart, {
        type: 'bar',
        data:{
          labels: data.map(data => data.day),
          datasets: [{
            data: data.map(data => data.amount),
            backgroundColor: function(){
                let arr = []
                data.forEach(element => {
                    if(element.day === 'wed'){
                        arr.push('hsl(186, 34%, 60%)')
                    } else{
                        arr.push('hsl(10, 79%, 65%)')
                    }
                })
                return arr
            },
            hoverBackgroundColor: function(){
                let arr = []
                data.forEach(element => {
                    if(element.day === 'wed'){
                        arr.push('hsla(186, 34%, 60%, 0.6)')
                    } else{
                        arr.push('hsla(10, 79%, 65%, 0.6)')
                    }
                })
                return arr
            },
            borderWidth: 1,
            barPercentage:1,
            categoryPercentage: 0.7
          }]
        },
        options:{
            font:{
                family: "inherit",
                color: "red"
            },
            datasets:{
                bar:{
                    borderRadius:4,
                    borderSkipped: false
                }
            },
            responsive: true,
            maintainAspectRatio: false,
            aspectRatio:2/1.25,
            
            plugins:{
                tooltip:{
                    
                    displayColors: false,
                    callbacks:{
                        title: function(context){
                            return ''
                        },
                        label: function(context){
                            return "$" + context.raw
                        }
                        
                    }
                },
                legend:{
                display:false,
                }
            },
            scales:{
                'x':{
                    
                    grid:{
                        display:false,
                    },
                    border:{
                        display:false,
                    },
                    offset: true,
                    beginAtZero: true,
                    scalePadding: 0
                },
                'y': {
                    
                    grid:{
                        display:false,

                    },
                    border:{
                        display: false
                    },
                    ticks:{
                        display:false
                    }
                }
            }
        }
      })
    })