//import * as THREE from "three";

//import { BackSide } from "three";
// import { DirectionalLight } from "three";

//creates scene and camera
var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(
  //fov
  90,
  //aspect
  window.innerWidth/window.innerHeight,
  //near, far
  0.1,
  1000
);

//sets renderer
var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

controls = new THREE.OrbitControls(camera, renderer.domElement);
//far light source
var pointLight = new THREE.PointLight(0xffffff, 5.0, 30);
pointLight.position.set(10,10,10);
scene.add(pointLight);




 
//ambient light source
var ambient = new THREE.AmbientLight(0xffffff, 0.1);
scene.add(ambient);

//laod textures
var texture = new THREE.TextureLoader().load("assets/worldMapHD.jpg");
texture.wrapS = THREE.RepeatWrapping;
texture.wrapT = THREE.RepeatWrapping;
texture.repeat.set(1,1);

var bump = new THREE.TextureLoader().load("assets/bump4k.jpg");
var spec = new THREE.TextureLoader().load("assets/spec4k.jpg");
var nightLight = new THREE.TextureLoader().load("assets/city.jpg");
var city = new THREE.Color('orange');


//geometry and material
var geometry = new THREE.SphereGeometry(2,32,32);
var material = new THREE.MeshPhongMaterial({
  map:texture,
  bumpMap: bump,
  bumpScale: 0.05,
  specularMap: spec,
  shininess: 10,
  emissiveMap: nightLight,
  emissive: city,
  emissiveIntensity: 0.2,
  
});

var globe = new THREE.Mesh(geometry, material);
scene.add(globe);


var BG = new THREE.TextureLoader().load("assets/spaceBG.jpg");

var geoSky = new THREE.SphereGeometry(30,32,32);
var matSky = new THREE.MeshBasicMaterial({
  map:BG,
  side:THREE.BackSide,
})

var sky = new THREE.Mesh(geoSky, matSky);

scene.add(sky);








camera.position.z = 4;

var animate = function(controls){
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}

animate();