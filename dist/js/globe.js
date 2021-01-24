//import * as THREE from "three";
// import { DirectionalLight } from "three";
var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(
  90,
  window.innerWidth/window.innerHeight,
  0.1,
  1000
);

var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

var pointLight = new THREE.PointLight(0xffffff, 5.0, 30);
pointLight.position.set(10,10,10);
scene.add(pointLight);
 
var ambient = new THREE.AmbientLight(0xffffff, 0.1);
scene.add(ambient);


var texture = new THREE.TextureLoader().load("assets/worldMapHD.jpg");
texture.wrapS = THREE.RepeatWrapping;
texture.wrapT = THREE.RepeatWrapping;
texture.repeat.set(1,1);

controls = new THREE.OrbitControls(camera, renderer.domElement);
var geometry = new THREE.SphereGeometry(2,32,32);
var material = new THREE.MeshPhongMaterial({
  map:texture,
});
var globe = new THREE.Mesh(geometry, material);
scene.add(globe);

camera.position.z = 5;

var animate = function(controls){
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}

animate();