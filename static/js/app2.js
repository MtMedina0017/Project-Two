function resize(){
    var svgArea = d3.select("#chart").select("svg");
    var svgWidth= parseInt(d3.select("#chart").style("width"));
    var svgHeight= svgWidth - svgWidth / 3.9;
    if (!svgArea.empty()) {
      svgArea.remove();
    }
  // var w = parseInt(d3.select("#scatter").style("width"));
  // var h = w - w / 3.9;
  var margin = {
    top: 20,
    right: 100,
    bottom: 80,
    left: 100
  };
  var width = svgWidth - margin.left - margin.right;
  var height = svgHeight - margin.top - margin.bottom;

  var svg = d3
    .select("#chart")
    .append("svg")
    .attr("width", svgWidth)
    .attr("height", svgHeight);

  var chartGroup = svg.append("g")
    .attr("transform", `translate(${margin.left}, ${margin.top})`);

  var chosenXAxis = "average_num_of_drinks";
  function xScale(alcoholData, chosenXAxis) {
    // create scales
    var xLinearScale = d3.scaleLinear()
        .domain([d3.min(alcoholData, d => d[chosenXAxis]-1),
        d3.max(alcoholData, d => d[chosenXAxis])])
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
      // function used for updating state abbr with a transition to new locations
      function renderAbbr(abbrGroup, xLinearScale, yLinearScale, chosenXAxis) {
        abbrGroup.transition()
            .duration(1000)
            .attr("x", d => xLinearScale  (d[chosenXAxis]))
            .attr("y", d => yLinearScale(d.name));
        return abbrGroup;
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
            .html(function (d) {
                return (`${d.state}<br>${label} ${d[chosenXAxis]}`);
            });

        circlesGroup.call(toolTip);

        circlesGroup.on("mouseover", function (data) {
            toolTip.show(data);
        })
            // onmouseout event
            .on("mouseout", function (data, index) {
                toolTip.hide(data);
            });

        return circlesGroup;
    }

d3.csv('Data/merged_data.csv').then(function (alcoholData, err) {
    if (err) throw err;
    console.log(alcoholData);

    //parse data
    alcoholData.forEach(function (data) {
        data.average_num_of_drinks = +data.average_num_of_drinks;
        data.percentage = +data.percentage;
        data.name = +data.name;
    });
    // xLinearScale function above csv import
    var xLinearScale = xScale(alcoholData, chosenXAxis);

    // Create y scale function
    var yLinearScale = d3.scaleLinear()
        .domain([0, d3.max(alcoholData, d => d.name)])
        .range([height, 0]);

    // Create initial axis functions
    var bottomAxis = d3.axisBottom(xLinearScale);
    var leftAxis = d3.axisLeft(yLinearScale);

    // append x axis
    var xAxis = chartGroup.append("g")
        .classed("x-axis", true)
        .attr("transform", `translate(0, ${height})`)
        .call(bottomAxis);

    // append y axis
    chartGroup.append("g")
        .call(leftAxis);

    // append initial circles
    var circlesGroup = chartGroup.selectAll("circle")
        .data(alcoholData)
        .enter()
        .append("circle")
        .attr("cx", d => xLinearScale(d[chosenXAxis]))
        .attr("cy", d => yLinearScale(d.name))
        .attr("r", 13)
        .attr("class", "stateCircle");
    
    var stateAbbr = chartGroup.append("g")
    var abbrGrp = stateAbbr.selectAll("text")
        .data(alcoholData)
        .enter()
        .append("text")
        .attr("x", d => xLinearScale(d[chosenXAxis]))
        .attr("y", d => yLinearScale(d.name))
        .classed("stateText", true)
        .text(d => d.state);

    // Create group for two x-axis labels
    var labelsGroup = chartGroup.append("g")
        .attr("transform", `translate(${width / 2}, ${height + 20})`);

    var intensityLabel = labelsGroup.append("text")
        .attr("x", 0)
        .attr("y", 20)
        .attr("value", "average_num_of_drinks") // value to grab for event listener
        .classed("active", true)
        .text("Average # of drinks");


    var prevalenceLabel = labelsGroup.append("text")
        .attr("x", 0)
        .attr("y", 40)
        .attr("value", "percentage") // value to grab for event listener
        .classed("inactive", true)
        .text("Prevalence Percentage of Bringe Drinking");

    // append y axis
    chartGroup.append("text")
        .attr("transform", "rotate(-90)")
        .attr("y", 0 - margin.left)
        .attr("x", 0 - (height / 2))
        .attr("dy", "1em")
        .classed("axis-text", true)
        .text("Number of Breweries per State");

    // updateToolTip function above csv import
    var circlesGroup = updateToolTip(chosenXAxis, circlesGroup);

    // x axis labels event listener
    labelsGroup.selectAll("text")
        .on("click", function () {
            // get value of selection
            var value = d3.select(this).attr("value");
            if (value !== chosenXAxis) {

                // replaces chosenXAxis with value
                chosenXAxis = value;

                // console.log(chosenXAxis)

                // functions here found above csv import
                // updates x scale for new data
                xLinearScale = xScale(alcoholData, chosenXAxis);

                // updates x axis with transition
                xAxis = renderAxes(xLinearScale, xAxis);

                // updates circles with new x values
                circlesGroup = renderCircles(circlesGroup, xLinearScale, chosenXAxis);

                abbrGrp = renderAbbr(abbrGrp, xLinearScale, yLinearScale, chosenXAxis);

                // updates tooltips with new info
                circlesGroup = updateToolTip(chosenXAxis, circlesGroup);

                // changes classes to change bold text
                if (chosenXAxis === "average_num_of_drinks") {
                    intensityLabel
                        .classed("active", true)
                        .classed("inactive", false);
                    prevalenceLabel
                        .classed("active", false)
                        .classed("inactive", true);
                }
                else {
                    intensityLabel
                        .classed("active", false)
                        .classed("inactive", true);
                    prevalenceLabel
                        .classed("active", true)
                        .classed("inactive", false);
                }
            }
        });
}).catch(function (error) {
    console.log(error);
});
};
resize()

d3.select(window).on("resize", resize)