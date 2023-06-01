var svg = d3.select("#chart-area").append("svg")//add svg area to div tag

	.attr("width", 1000)

	.attr("height", 1000);



d3.json("data/buildings.json").then((data)=> {

	
    data.forEach((d) => {
        d.height=+d.height 
        
    });
    console.log(data);

    var rect=svg.selectAll("rect")
        .data(data);

    rect.enter()//create many data
        .append("rect")//add atributes
        
            .attr("x",(d, i)=>{
                console.log("Item: " + d + "Index: " + i);
                return (i*45)+25;
            })
            .attr("y", (d) => { return 1000-d.height; })
            .attr("width", 40) 
            .attr("height", (d)=>{return d.height;}) 
            .attr("fill", "purple");
});