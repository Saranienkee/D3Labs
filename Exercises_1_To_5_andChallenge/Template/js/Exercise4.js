var svg = d3.select("#chart-area").append("svg")//add svg area to div tag

	.attr("width", 500)

	.attr("height", 500);



d3.json("data/buildings.json").then((data)=> {

	
    data.forEach((d) => {
        d.height=+d.height 
        
    });
    console.log(data);

    var x = d3.scaleBand()
        .domain(data.map((d) => d.height)) 
        .range([0, 400]) 
        .paddingInner(0.1) 
        .paddingOuter(0.3); 

    var y = d3.scaleLinear()
        .domain([0,828])
	    .range([0, 400]);

    /*var colores = d3.scaleLinear()
        .domain(data.map((d) => d.height))
        .range(["rgb(70, 170, 160)", "rgb(115, 215, 210)"]);*/
    
    var colorScale = d3.scaleOrdinal(d3.schemeSet3)
    
    var rect=svg.selectAll("rect")
        .data(data);

    rect.enter()//create many data
        .append("rect")//add atributes
        
            .attr("x",(d, i)=>{
                console.log("Item: " + d + "Index: " + i);
                return (i*45)+25;
            })
            
            .attr("width", (d)=>y(40)) 
            .attr("height", (d) => x(d.height))            
            .attr("fill", (d) => colorScale(d.height));
});