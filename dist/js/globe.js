//import * as THREE from "three";
// import { DirectionalLight } from "three";
var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(
  90,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

var pointLight = new THREE.PointLight(0xffffff, 5.0, 30);
pointLight.position.set(10, 10, 10);
scene.add(pointLight);

var ambient = new THREE.AmbientLight(0xffffff, 0.1);
scene.add(ambient);


// D3 Data Mapping
d3.json("https://raw.githubusercontent.com/baronwatts/data/master/world.json",

  (error, data) => {

    // Projecting equirectangular data
    var projection = d3.geo
      .equirectangular()
      .translate([8192, 4096])
      .scale(326);

    console.log(data.objects.countries);

    // Retrieve polygonal information from topographical json file
    var countries = topojson.feature(data, data.objects.countries);

    // Add a d3 canvas
    var canvas = d3
      .select("body")
      .append("canvas")
      .style("display", "none")
      .attr("width", "16384px")
      .attr("height", "8192px");

    var context = canvas.node().getContext("2d");

    var path = d3.geo
      .path()
      .projection(projection)
      .context(context);

    context.strokeStyle = "white";
    context.lineWidth = 0.5;
    context.fillStyle = "#000";

    context.beginPath();

    path(countries);

    context.fill();
    context.stroke();

    // var texture = new THREE.TextureLoader().load("assets/worldMapHD.jpg");
    var texture = new THREE.Texture(canvas.node());
    texture.needsUpdate = true;
    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.RepeatWrapping;
    texture.repeat.set(1, 1);

    controls = new THREE.OrbitControls(camera, renderer.domElement);
    var geometry = new THREE.SphereGeometry(2, 32, 32);
    var material = new THREE.MeshBasicMaterial({
      map: texture,
      transparent: false,
      opacity: 1,
      color: new THREE.Color("white")
    });
    var globe = new THREE.Mesh(geometry, material);
    scene.add(globe);

    camera.position.z = 5;
    
    var animate = function (controls) {
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
    }
    
    animate();
  }
);
