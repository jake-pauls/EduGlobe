//import * as THREE from "three";

//import { BackSide } from "three";
// import { DirectionalLight } from "three";

//creates scene and camera
var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(
  //fov
  75,
  //aspect
  window.innerWidth / window.innerHeight,
  //near, far
  0.1,
  1000
);

//sets renderer
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
      .translate([1024, 512])
      .scale(326);

    console.log(data.objects.countries);

    // Retrieve polygonal information from topographical json file
    var countries = topojson.feature(data, data.objects.countries);

    // Add a d3 canvas
    var canvas = d3
      .select("body")
      .append("canvas")
      .style("display", "none")
      .attr("width", "2048px")
      .attr("height", "1024px");

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

    controls = new THREE.OrbitControls(camera, renderer.domElement);
  
    var texture = new THREE.TextureLoader().load("assets/worldMapHD.jpg");
    texture.needsUpdate = true;
    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.RepeatWrapping;
    texture.repeat.set(1, 1);

    var bump = new THREE.TextureLoader().load("assets/bump4k.jpg");
    var spec = new THREE.TextureLoader().load("assets/spec4k.jpg");
    var nightLight = new THREE.TextureLoader().load("assets/city.jpg");
    var city = new THREE.Color('orange');
    var BG = new THREE.TextureLoader().load("assets/spaceBG.jpg");

    //geometry and material
    var geometry = new THREE.SphereGeometry(2, 32, 32);
    var material = new THREE.MeshPhongMaterial({
      map: texture,
      bumpMap: bump,
      bumpScale: 0.05,
      specularMap: spec,
      shininess: 10,
      emissiveMap: nightLight,
      emissive: city,
      emissiveIntensity: 0.2,
      color: new THREE.Color("white"),
      transparent: false,
      opacity: 1,
    });
    var globe = new THREE.Mesh(geometry, material);

    var geoSky = new THREE.SphereGeometry(30, 32, 32);
    var matSky = new THREE.MeshBasicMaterial({
      map: BG,
      side: THREE.BackSide,
    })
    var sky = new THREE.Mesh(geoSky, matSky);

    scene.add(globe);
    scene.add(sky);

    camera.position.z = 4;

    var animate = function (controls) {
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
    }

    animate();

    // Vector Math -> Rendering Data as Points on the Globe


  }
);

// helper function to convert latitude and longitude to Vector3 values which can be rendered on the globe
function latLongToVector3(lat, lon, radius) {
  var phi = (lat)*Math.PI/180;
  var theta = (lon-180)*Math.PI/180;

  var x = -(radius) * Math.cos(phi) * Math.cos(theta);
  var y = (radius) * Math.sin(phi);
  var z = (radius) * Math.cos(phi) * Math.sin(theta);

  return new THREE.Vector3(x,y,z);
}