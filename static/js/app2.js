d3.csv('Data/merged_WO_breweries.csv').then(function(BeerData, err) {
    if (err) throw err;
    console.log(BeerData);

    //parse data
    BeerData.forEach(function(data) {
        data.average_num_of_drinks = +data.average_num_of_drinks;
        data.cost_per_capita = +data.cost_per_capita;
        data.cost_per_drink = +data.cost_per_drink;
        data.percentage = +data.percentage;
        data.total_cost = +data.total_cost;
    });



function initialize() {
    //**initial start up populate Test Subject ID No */
    
    var selectState = d3.select("#state")
    var states = BeerData.state
    states.forEach(state => {
        selectState.append("option")
            .property("value", state).text(state)
    });
}
function optionChanged() {
    initialize()
}