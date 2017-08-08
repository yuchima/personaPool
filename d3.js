d3.select('#avatars')
  .append('svg')
  .attr("width",100)
  .attr("height",100)
  .style("background-color","#5c66ff")

d3.select("svg")
  .on("mouseover",function(d){
      d3.select(this)
        .style("opacity", .5)
  })
  .on("mouseout",function(d){
      d3.select(this)
        .style("opacity", 1)
  })
