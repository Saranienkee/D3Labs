var data = [25, 20, 15, 10, 5, 0];//array data, data source

var svg = d3.select("#chart-area").append("svg")//add svg area to div tag

	.attr("width", 400)

	.attr("height", 400);




/*var circle = svg.append("circle")

    .attr("cx", 200)

    .attr("cy", 250)

    .attr("r", 70)

    .attr("fill", "purple");

*/


var circles=svg.selectAll("circle")//update circle of d3
    .data(data);

circles.enter()//create many data
    .append("circle")//add atributes
        
        .attr("cx",(d, i)=>{
            console.log("Item: " + d + "Index: " + i);
            return (i*50)+25;
        })

        .attr("cy",250)
        .attr("r",(d)=>{return d;})
        .attr("fill", "purple");



     

var rect = svg.append("rect")

	.attr("x", 20)

	.attr("y", 20)

	.attr("width", 40)

	.attr("height", 20)

	.attr("fill","red");



