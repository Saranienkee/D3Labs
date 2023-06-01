
var margin = {top: 10, right: 10, bottom: 100, left:100};//Margin

//Group____________________________________________________________________________________________
var width = 600-margin.left-margin.right;

var height = 400-margin.top-margin.bottom;

var g = d3.select("body")

	.append("svg")

		.attr("width", width + margin.right + margin.left)

		.attr("height", height + margin.top + margin.bottom)

	.append("g")

		.attr("transform", "translate(" + margin.left + ", " + margin.top + ")");

//Obtain data________________________________________________________________________________________
d3.json("data/buildings.json").then((data)=> {

	
    data.forEach((d) => {
        d.height=+d.height 
        
    });
    console.log(data);
//Scale data_________________________________________________________________________________________
    var x = d3.scaleBand()
        .domain(data.map((d) => d.height)) 
        .range([0, 400]) 
        .paddingInner(0.1) 
        .paddingOuter(0.3); 

    var xAxix = d3.scaleBand()
        .domain(data.map((d) => d.name)) 
        .range([0, 400]) 
        .paddingInner(0.1) 
        .paddingOuter(0.3);

    var y = d3.scaleLinear()
        .domain([0,828])
	    .range([height, 0]);
    
    var colorScale = d3.scaleOrdinal(d3.schemeSet3)

// Bottom Axis X______________________________________________________________________________________
    var bottomAxis = d3.axisBottom(xAxix).ticks(7);
    
    g.append("g")
    .attr("class", "bottom axis")
    .attr("transform", "translate(0," + height + ")")
    .call(bottomAxis)
    .selectAll("text")
        .attr("y", "10")
        .attr("x", "-5")
        .attr("text-anchor", "end")
        .attr("transform", "rotate(-25)");

//bulidings Label
    g.append("text")
    .attr("class", "x axis-label")
    .attr("x", 200)
    .attr("y", height+100)
    .attr("font-size", "20px")
    .attr("text-anchor", "middle")
    .style("fill","black")
    .text("The word's tallest buildings");

// Left Axis Y______________________________________________________________________________________
    var leftAxis = d3.axisLeft(y).ticks(5)
        .tickFormat((d, i) => {
            var value = i * 200; 
            return value + "m";
        });

    g.append("g")
    .attr("class", "left axis")
    .attr("transform", "translate(0," + height + "")
    .call(leftAxis);

//Height Label
    g.append("text")
	.attr("class", "y axis-label")
	.attr("x", - (height / 2))
	.attr("y", -60)
	.attr("font-size", "20px")
	.attr("text-anchor", "middle")
	.attr("transform", "rotate(-90)")
	.style("fill","black")
	.text("Height (m)");
    
//Create Rectangles_________________________________________________________________________________
    var rect=g.selectAll("rect").data(data)
        .data(data);

    rect.enter()//create many data
        .append("rect")//add atributes
            
            .attr("x", (d) => { return xAxix(d.name); })
            .attr("y", (d) => { return y(d.height); })
            .attr("width", xAxix.bandwidth)
            .attr("height", (d) => { return height - y(d.height); })
            .attr("fill", "grey");
});