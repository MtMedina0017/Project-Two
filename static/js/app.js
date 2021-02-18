//function getPlot(states){


//d3.csv('breweries.csv').then(function(data) => {
  //console.log(data)

 // var wfreq= data.metadata.map(d.wfreq)
  //console.log(`Washing Freq`: ${wfreq}`)
  
//});


showOptions();
//showData();

var states= d3.select('#state');
var val;

function showOptions() {
  d3.csv('Data/merged_WO_breweries.csv', function(data) {
    //console.log(data);

    //var states= d3.select('#state');

    var state_list = data.state
    //console.log(state_list);
    states.append("option")
    .text(state_list)
    //for (var i= 0; i < data.length; i++) {
      //console.log(data[i].state);
      //console.log(data[i].total_cost);
      //console.log(data[i].cost_per_drink);
      // console.log(data[i].cost_per_capita);
    //   console.log(data[i].average_num_of_drinks);
    //   console.log(data[i].percentage);
    // }
    //var {state} = data;
    //state.forEach(states =>{
      //d3.select('select').append('option').text(states);
    //});
    
  });
};


//console.log(data);
function showData() {
  //retrieve and store data 
  d3.csv('Data/merged_WO_breweries.csv').then(data => {
    var sel = d3.select('select').property('value');

    var state  = data;

    state_test = state.filter(obj => obj.state == val);
    var total_cost = state_test[0].total_cost
    console.log(total_cost)

    
    d3.select('.panel-body').html('');
    Object.entries(state.forEach(([key, val]) => {
      d3.select('.panel-body').append('h5').text(key + ':' + val);
     

    merged_df = merged.filter(obj => obj.AL == sel)[0];
    var { state, total_cost, cost_per_drink, cost_per_capita } = merged_df
    //console.log(merged_df);
    //setting up variables for bar chart 
    }))

  });
};
    

    


    

    
    
//   });
  
  
  
 
  

// 



function optionChanged() { 
  val = states.property("value")
  //console.log(val)
  showData();
};