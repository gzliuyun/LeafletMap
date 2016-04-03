var width = document.body.clientWidth -20  ;
var height = document.body.clientHeight -20;   

var projection = d3.geo.mercator()
					.center([107,31])
					.scale(600)
					.translate([width/2,height/2]);
var path = d3.geo.path()
				.projection(projection);

var color = d3.scale.category20();

d3.json("json/china.json",function(error,root){
	if (error){
		return console.log(error)
	}
	svg = d3.select("body")
			.append("svg")
			.attr("width",width)
			.attr("height",height);

	var groups = svg.append("g");
	groups.selectAll("path")
			.data(root.features)
			.enter()
			.append("path")
			.attr("class","province")
			.style("fill",function(d,i){
				return color(i);
			})
			.attr("d",path);
})
