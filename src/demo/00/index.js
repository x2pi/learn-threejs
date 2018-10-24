import * as THREE from 'three'
import ThreeOC from 'three-orbit-controls'
var OrbitControls = ThreeOC(THREE);

// Create a scene which will hold all our meshes to be rendered
var scene = new THREE.Scene();

// Create and position a camera
var camera = new THREE.PerspectiveCamera(
  60, // Field of view
  window.innerWidth / window.innerHeight, // Aspect ratio
  0.1, // Near clipping pane
  1000 // Far clipping pane
);

// Reposition the camera
camera.position.set(5, 5, 0);

// Point the camera at a given coordinate
camera.lookAt(new THREE.Vector3(0, 0, 0));

// Create a renderer
var renderer = new THREE.WebGLRenderer({ antialias: true });

// Size should be the same as the window
renderer.setSize(window.innerWidth, window.innerHeight);

// Set a near white clear color (default is black)
renderer.setClearColor(0xfff6e6);

// Append to the document
document.body.appendChild(renderer.domElement);

// A mesh is created from the geometry and material, then added to the scene
var plane = new THREE.Mesh(
  new THREE.PlaneGeometry(5, 5, 5, 5),
  new THREE.MeshBasicMaterial({ color: 0x393839, wireframe: true })
);
plane.rotateX(Math.PI / 2);
scene.add(plane);

// Render the scene/camera combination
renderer.render(scene, camera);

// Add an orbit control which allows us to move around the scene. See the three.js example for more details
// https://github.com/mrdoob/three.js/blob/dev/examples/js/controls/OrbitControls.
var controls = new OrbitControls(camera, renderer.domElement);
controls.addEventListener("change", function() {
  renderer.render(scene, camera);
}); // add this only if there is no animation loop (requestAnimationFrame)
