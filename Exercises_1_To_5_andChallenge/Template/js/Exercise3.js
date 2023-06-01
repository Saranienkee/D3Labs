var svg = d3.select("#chart-area").append("svg")//add svg area to div tag

	.attr("width", 400)

	.attr("height", 400);


d3.csv("data/ages.csv").then((data)=> {

	console.log(data);

});

d3.tsv("data/ages.tsv").then((data)=> {

	console.log(data);

});

d3.json("data/ages.json").then((data)=> {

	
    data.forEach((d) => {
        d.age=+d.age 
     
    });
    console.log(data);
    var circles=svg.selectAll("circle")//update circle of d3
        .data(data);
    circles.enter()//create many data
        .append("circle")//add atributes
        
            .attr("cx",(d, i)=>{
                console.log("Item: " + d + "Index: " + i);
                return (i*25)+25;
            })

            .attr("cy",250)
            .attr("r",(d)=>{return d.age;})
            .attr("fill", "purple");
});





