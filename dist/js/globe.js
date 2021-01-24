//import * as THREE from "three";

//import { BackSide } from "three";
// import { DirectionalLight } from "three";

/* Button Listeners for APIs */

// COVID Data Per Country
const COVID_API_URL = "https://disease.sh/v3/covid-19/countries?yesterday=true&twoDaysAgo=false&sort=cases&allowNull=true";

window.addEventListener("load", (event) => {
  var covid_button = document.getElementById("covid_button");

  // Event Listeners for buttons
  covid_button.addEventListener('click', () => {
    callAPI(COVID_API_URL);
  });
});

/* Three.js */

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

var pointLight = new THREE.PointLight(0xffffff, 2.0, 30);
pointLight.position.set(10, 10, 10);
scene.add(pointLight);

var ambient = new THREE.AmbientLight(0xffffff, 0.1);
scene.add(ambient);


controls = new THREE.OrbitControls(camera, renderer.domElement);

var texture = new THREE.TextureLoader().load("assets/earthmap2k.jpg");
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
  transparent: true,
  opacity: 1,
});
var globe = new THREE.Mesh(geometry, material);

var geoSky = new THREE.SphereGeometry(30, 32, 32);
var matSky = new THREE.MeshBasicMaterial({
  map: BG,
  side: THREE.BackSide,
})
var sky = new THREE.Mesh(geoSky, matSky);

//geometry, texture and material for the Sky 
var cloudsTexture = new THREE.TextureLoader().load("assets/clouds2k.jpg");
var cloudGeo = new THREE.SphereGeometry(2.01, 32, 32);
var cloudMaterial = new THREE.MeshPhongMaterial({
  map: cloudsTexture,

  wireframe: false,
  color: new THREE.Color("white"),
  transparent: true,
  opacity: 0.3,

});

//render the earth
var clouds = new THREE.Mesh(cloudGeo, cloudMaterial);

scene.add(clouds);
scene.add(globe);
scene.add(sky);

camera.position.z = 4;
animate();

// Animates WebGL Canvas
function animate() {
  requestAnimationFrame(animate);
  clouds.rotation.y += 0.001;

  controls.update();
  renderer.render(scene, camera);
}

// Converts latitude and longitude to Vector3 values which can be rendered on the globe
function latLongToVector3(latitude, longitude, radius) {
  var phi = (latitude) * Math.PI / 180;
  var theta = (longitude - 180) * Math.PI / 180;

  var x = -((radius) * Math.cos(phi)) * Math.cos(theta);
  var y = (radius) * Math.sin(phi);
  var z = ((radius) * Math.cos(phi)) * Math.sin(theta);

  return new THREE.Vector3(x, y, z);
}

function plotDataPoints(data, scene) {
  data.map((d, i) => {
    var latitude = d[1];
    var longitude = d[2];
    var vector3 = latLongToVector3(latitude, longitude, 2);

    // Have Three.js generate planes at the data points
    var pointGeometry = new THREE.SphereGeometry(0.01, 10, 10);
    var pointMaterial = new THREE.MeshBasicMaterial({
      color: new THREE.Color("red")
    })
    var pointMesh = new THREE.Mesh(pointGeometry, pointMaterial);

    // Set the plane in 3D space
    pointMesh.position.set(vector3.x, vector3.y, vector3.z);
    pointMesh.lookAt(new THREE.Vector3(0, 0, 0));
    scene.add(pointMesh);
  });
}

/* API Functions */
function callAPI(api_url) {
  fetch(api_url)
    .then(
      (response) => {
        if (response.status !== 200) {
          console.log('Oops! Error retrieving API data with status code: ' + response.status);
          return;
        }
        response.json().then(
          (data) => {
            parseCovidJSON(data);
          });
      })
    .catch((err) => {
      console.log('Oops! An error occurred during the fetch:-S', err);
    });
}

// [country, lat, long]
function parseCovidJSON(jsonData) {
  var covidData = new Array();
  for (var i = 0; i < jsonData.length; i++) {
    country = jsonData[i].country;
    lat = jsonData[i].countryInfo.lat;
    long = jsonData[i].countryInfo.long;
    covidData[i] = [country, lat, long];
  }
  plotDataPoints(covidData, scene);
}
