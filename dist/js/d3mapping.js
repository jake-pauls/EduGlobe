// // D3 Data Mapping
// d3.json("https://raw.githubusercontent.com/baronwatts/data/master/world.json", 

//         (error, data) => {

//             // Projecting equirectangular data
//             var projection = d3.geo
//                 .equirectangular()
//                 .translate([8192, 4096])
//                 .scale(326);

//             // Retrieve polygonal information from topographical json file
//             var countries = topojson.feature(data, data.objects.countries);
            
//             // Add a d3 canvas
//             var canvas = d3
//                 .select("body")
//                 .append("canvas")
//                 .style("display", "none")
//                 .attr("width", "16384px")
//                 .attr("height", "8192px");
            
//             var context = canvas.node().getContext("2d");

//             var path = d3.geo
//                 .path()
//                 .projection(projection)
//                 .context(context);

//             context.strokeStyle = "white";
//             context.lineWidth = 5;
//             context.fillStyle = "#000";

//             context.beginPath();

//             path(countries);

//             context.fill();
//             context.stroke();

//             console.log(data.objects.countries);
//         }
// );