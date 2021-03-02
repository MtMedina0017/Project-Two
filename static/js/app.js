function showOptions() {
    d3.csv('Data/merged_data.csv').then(function (data, err) {
        if (err) throw err;
        console.log(data);
        

      var states= d3.select('#state');
      var stateList = []
        // console.log(stateList);
 
        for (var i = 0; i <data.length; i ++) {
            stateList.push(data[i].state);
        }
        console.log(stateList);
        stateList.forEach(function(row) {
            states.append("option")
            .property('value', row).text(row)
        });

      var optionValue = states.property('value');
        // var metadata = data
        var metadataDropdown = d3.select('#sample-metadata');
        var metadata = data.filter(r => r.state == optionValue);
          console.log(metadata);

        metadataDropdown.html("");

        function rename() { // function to rename on button click 
            metadata = metadata.map(function(obj){
                obj["Index"] = obj[""];
                delete obj[""];
                obj["State"] = obj["state"];
                delete obj["state"];
                obj["Number of Breweries"] = obj["name"];
                delete obj["name"];
                obj["Total Costs"] = obj["total_cost"];
                delete obj["total_cost"];
                obj["Costs Per Drink"] = obj["cost_per_drink"];
                delete obj["cost_per_drink"];
                obj["Costs per Capita"] = obj["cost_per_capita"];
                delete obj["cost_per_capita"];
                obj["Avg Number of Drinks"] = obj["average_num_of_drinks"];
                delete obj["average_num_of_drinks"];
                obj["Prevalence Percentage"] = obj["percentage"];
                delete obj["percentage"];
                obj["Percentage of Poor Health"] = obj["health_percent"];
                delete obj["health_percent"];
                return obj;
            });        
        };
        rename();

    
        Object.entries(metadata[0]).forEach(([key, value]) => {
            console.log(`${key}:${value}`)
          metadataDropdown.append('p')
<<<<<<< HEAD
<<<<<<< HEAD
          .text(`${key}:${value}`); 
          

          function renameKeys(obj, newKeys) {
            const keyValues = Object.keys(obj).map(key => {
              const newKey = newKeys[key] || key;
              return { [newKey]: obj[key] };
            });
            return Object.assign({}, ...keyValues);
          }
          console.log(renameKeys)


          const obj = { a: "total_cost", b: "cost" };
          const newKeys = { a: "A", c: "C" };
          const renamedObj = renameKeys(obj, newKeys);
          console.log(renamedObj);

        //   var cost = metadata.map(obj=> +obj.total_cost);
        // //   var capita = stateList.map(obj=> +obj.cost_per_capita);
        // //   var drinks = testData.map(obj=> +obj.cost_per_drink);
        // //   var state = testData.map(obj=> obj.state);
        // //   var Avg_drinks= testData.map(obj=> obj.average_num_of_drinks);
        // //   var percentage= testData.map(obj=> obj.percentage);
        // //   var health= testData.map(obj=> obj.health_percent);
        //   var drop_drinks = data.filter(obj => obj.stateList == optionValue)[0];
        //   d3.select('.panel-body').append('h4').text(`Total Cost: $ ${drop_drinks.total_cost}`)
        //   d3.select('.panel-body').append('h4').text(`Cost per Capita: $ ${stateList.cost_per_capita}`)
        //   d3.select('.panel-body').append('h4').text(`Cost per Drink: $ ${state_test.cost_per_drink}`)
        //   d3.select('.panel-body').append('h4').text(`Average number of Drinks:  ${state_test.average_num_of_drinks}`)
        //   d3.select('.panel-body').append('h4').text(`Percentage:${state_test.percentage}%`)
        //   d3.select('.panel-body').append('h4').text(`Health percentage:${state_test.health_percent}%`)
          



=======
          .text(`${key}: ${value}`);    
>>>>>>> 9c619016fc2000158be8c1e49637bf15243d3459
=======
          .text(`${key}: ${value}`);    
>>>>>>> 9c619016fc2000158be8c1e49637bf15243d3459
        });
    }).catch(function(error) {
    console.log(error);
});
}
function optionChanged() {
    showOptions()
}
showOptions()
<<<<<<< HEAD:static/js/app.js


<<<<<<< HEAD
=======


<<<<<<< HEAD
>>>>>>> 99f95dc05d5da455dd7c6df4dc3d61f56cfa0f6f:static/js/app2.js
        // var cost = testData.map(obj=> +obj.total_cost);
        // var capita = testData.map(obj=> +obj.cost_per_capita);
        // var drinks = testData.map(obj=> +obj.cost_per_drink);
        // var state = testData.map(obj=> obj.state);
        // var Avg_drinks= testData.map(obj=> obj.average_num_of_drinks);
        // var percentage= testData.map(obj=> obj.percentage);
        // var health= testData.map(obj=> obj.health_percent);
        // var state_test = data.filter(obj => obj.state == sel)[0];
        // d3.select('.panel-body').append('h5').text(`Total Cost: $ ${state_test.total_cost}`)
        // d3.select('.panel-body').append('h5').text(`Cost per Capita: $ ${state_test.cost_per_capita}`)
        // d3.select('.panel-body').append('h5').text(`Cost per Drink: $ ${state_test.cost_per_drink}`)
        // d3.select('.panel-body').append('h5').text(`Average number of Drinks:  ${state_test.average_num_of_drinks}`)
        // d3.select('.panel-body').append('h5').text(`Percentage:${state_test.percentage}%`)
        // d3.select('.panel-body').append('h5').text(`Health percentage:${state_test.health_percent}%`)
        // // console.log(state)
    // });

=======
>>>>>>> 9c619016fc2000158be8c1e49637bf15243d3459
=======
>>>>>>> 9c619016fc2000158be8c1e49637bf15243d3459
function showData2() {
    d3.csv('Data/merged_data.csv').then(data => {

        var drink0 = [];
        var capita1 = [];
        var total2= [];
        for (var i = 0; i <data.length; i ++) {
            drink0.push(data[i].cost_per_drink);
            capita1.push(data[i].cost_per_capita);
            total2.push(data[i].total_cost);
        }
        console.log(drink);
        var capita = {
            y:capita1,
            type: 'box',
            name:'Capita'
        };
        var drink = {
            y: drink0,
            type: 'box',
            name:'Drinks'
        };
        var total ={
            y:total2,
            type:'box',
            name:'Total Cost',
            // title:"Number of Breweries per State"
        };
        var data = [capita,drink,total];
        var layout ={
            title:'Costs of Excessive Drinking in the USA',
            yaxis: {
             title:"Cost",
             zeroline:false
         },
         boxmode: 'group'
         };
        Plotly.newPlot('bar', data, layout);
    }).catch(function(error){
        console.log(error);
    });
}
showData2();


function resize(){
    var svgArea = d3.select("#chart").select("svg");
    var svgWidth= parseInt(d3.select("#chart").style("width"));
    var svgHeight= svgWidth - svgWidth / 3.9;
    if (!svgArea.empty()) {
      svgArea.remove();
    }

  var margin = {
    top: 20,
    right: 100,
    bottom: 100,
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

  var chosenXAxis = "health_percent";
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

        if (chosenXAxis === "health_percent") {
            label = "Poor Health:";
        }
        else {
            label = "Prevalence:";
        }

        var toolTip = d3.tip()
            .attr("class", "tooltip")
            .offset([80, -60])
            .html(function (d) {
                return (`State: ${d.state}<br>${label} ${d[chosenXAxis]}<br>
                Number of Breweries: ${d[name]}`);
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
        data.health_percent = +data.health_percent;
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
        .classed("y-axis", true)
        .call(leftAxis);

    // append initial circles
    var circlesGroup = chartGroup.selectAll("circle")
        .data(alcoholData)
        .enter()
        .append("circle")
        .attr("cx", d => xLinearScale(d[chosenXAxis]))
        .attr("cy", d => yLinearScale(d.name))
        .attr("r", 15)
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
        .attr("value", "health_percent") // value to grab for event listener
        .attr("dy", "1em")
        .classed("active", true)
        .text("Percentage of Adults Who Reported Fair or Poor Health");


    var prevalenceLabel = labelsGroup.append("text")
        .attr("x", 0)
        .attr("y", 50)
        .attr("value", "percentage") // value to grab for event listener
        .attr("dy", "1em")
        .classed("inactive", true)
        .text("Prevalence Percentage of Bringe Drinking Among US Adults, 2015");

    // append y axis
    chartGroup.append("text")
        .attr("transform", "rotate(-90)")
        .attr("y", 0 - margin.left)
        .attr("x", 0 - (height / 2))
        .attr("dy", "2em")
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
                if (chosenXAxis === "health_percent") {
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
showOptions()
d3.select(window).on("resize", resize)
