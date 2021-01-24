//import * as THREE from "three";
var scene = THREE.Scene();
var camera = THREE.PerspectiveCamera(
  90,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerWidth);
document.body.appendChild(renderer.domElement);

var texture = new THREE.TextureLoader().load("img/earthmap.jpg");

texture.wrapS = THREE.RepeatWrapping;
texture.wrapT = THREE.RepeatWrapping;
texture.repeat.set(1, 1);

controls = new THREE.OrbitControls(camera, renderer.domElement);
var geometry = new THREE.SphereGeometry(5, 32, 32);
var material = new THREE.MeshBasicMaterial({
  map: texture,
});

var globe = new THREE.Mesh(geometry, material);

camera.position.z = 10;

var animate = function (controls) {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
};
