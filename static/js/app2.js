d3.csv('Data/merged_WO_breweries.csv').then(function(beerData, err) {
    if (err) throw err;
    console.log(beerData);

    //parse data
    beerData.forEach(function(data) {
        data.average_num_of_drinks = +data.average_num_of_drinks;
        data.cost_per_capita = +data.cost_per_capita;
        data.cost_per_drink = +data.cost_per_drink;
        data.percentage = +data.percentage;
        data.total_cost = +data.total_cost;
    });



function initialize() {
    //**initial start up populate Test Subject ID No */
    
    var selectState = d3.select("#state")
    var states = beerData.state
    states.forEach(state => {
        selectState.append("option")
            .property("value", state).text(state)
    });

    var svgWidth = 960;
    var svgHeight = 500;

    var margin = {
    top: 20,
    right: 40,
    bottom: 80,
    left: 100
    };

    var width = svgWidth - margin.left - margin.right;
    var height = svgHeight - margin.top - margin.bottom;

    var svg = d3
        .select(".bubble")
        .append("svg")
        .attr("width", svgWidth)
        .attr("height", svgHeight);

    var chartGroup = svg.append("g")
    .attr("transform", `translate(${margin.left}, ${margin.top})`);

    var chosenXAxis = "average_num_of_drinks";
    function xScale(beerData, chosenXAxis) {
        // create scales
        var xLinearScale = d3.scaleLinear()
          .domain([d3.min(beerData, d => d[chosenXAxis]) * 0.8,
            d3.max(beerData, d => d[chosenXAxis]) * 0.8
          ])
          .range([0, width]);
      
        return xLinearScale;
      
    }
    function renderAxes(newXScale, xAxis) {
        var bottomAxis = d3.axisBottom(newXScale);
      
        xAxis.transition()
          .duration(1000)
          .call(bottomAxis);
      
        return xAxis;
    }
    function renderCircles(circlesGroup, newXScale, chosenXAxis) {

        circlesGroup.transition()
          .duration(1000)
          .attr("cx", d => newXScale(d[chosenXAxis]));
      
        return circlesGroup;
    }
    function updateToolTip(chosenXAxis, circlesGroup) {

    var label;
    
    if (chosenXAxis === "average_num_of_drinks") {
        label = "Intensity:";
    }
    else {
        label = "Prevalence:";
    }
    
    var toolTip = d3.tip()
        .attr("class", "tooltip")
        .offset([80, -60])
        .html(function(d) {
        return (`${d.state}<br>${label} ${d[chosenXAxis]}`);
        });
    
    circlesGroup.call(toolTip);
    
    circlesGroup.on("mouseover", function(data) {
        toolTip.show(data);
    })
        // onmouseout event
        .on("mouseout", function(data, index) {
        toolTip.hide(data);
        });
    
    return circlesGroup;
    }
    var xLinearScale = xScale(beerData, chosenXAxis);
    var yLinearScale = d3.scaleLinear()
    .domain([0, d3.max(beerData, d => d.num_hits)])
    .range([height, 0]);

}
function optionChanged() {
    initialize()
}