//import * as THREE from "three";
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

var texture = new THREE.TextureLoader().load("assets/earthmap.jpg");
texture.wrapS = THREE.RepeatWrapping;
texture.wrapT = THREE.RepeatWrapping;
texture.repeat.set(1,1);

controls = new THREE.OrbitControls(camera, renderer.domElement);
var geometry = new THREE.SphereGeometry(5,32,32);
var material = new THREE.MeshBasicMaterial({
  map:texture,
});
var globe = new THREE.Mesh(geometry, material);
scene.add(globe);

camera.position.z = 10;

var animate = function(controls){
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}

animate();