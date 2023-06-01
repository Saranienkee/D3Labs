var data = [25, 20, 15, 10, 5, 0];//array data, data source

var svg = d3.select("#chart-area").append("svg")//add svg area to div tag

	.attr("width", 400)

	.attr("height", 400);


var rect=svg.selectAll("rect")
    .data(data);

rect.enter()
    .append("rect")
        
        .attr("x",(d, i)=>{
            console.log("Item: " + d + "Index: " + i);
            return (i*50)+25;
        })

        .attr("width",40)
        .attr("height",(d)=>{return d;})
        .attr("fill", "purple");
