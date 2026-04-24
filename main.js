import * as THREE from 'https://unpkg.com/three@0.150.1/build/three.module.js';
// Optional: Controls to allow you to move the camera with the mouse
import { OrbitControls } from 'https://unpkg.com/three@0.150.1/examples/jsm/controls/OrbitControls.js';

// --- 1. THE SETUP ---
const scene = new THREE.Scene();
scene.background = new THREE.Color(0xa0a0a0); // Set a background color (light grey)

// 2. THE CAMERA (Field of view, Aspect Ratio, Near Clip, Far Clip)
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.set(0, 5, 10); // Move the camera back and up so we can see the floor

// 3. THE RENDERER
const renderer = new THREE.WebGLRenderer({
    canvas: document.querySelector('#bg'), // Draw onto our specific canvas
    antialias: true // Makes the edges smooth
});
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(window.devicePixelRatio); // Looks sharp on high-res screens

// Add Orbit Controls so you can drag the mouse to look around
const controls = new OrbitControls(camera, renderer.domElement);

// --- 2. ADDING OBJECTS ---

// A. THE FLOOR (PlaneGeometry)
const floorGeometry = new THREE.PlaneGeometry(20, 20); // Width, Height
// Material: Use MeshStandardMaterial to respond to light
const floorMaterial = new THREE.MeshStandardMaterial({ color: 0x808080, side: THREE.DoubleSide });
const floor = new THREE.Mesh(floorGeometry, floorMaterial);
floor.rotation.x = -Math.PI / 2; // Rotate it so it's flat on the ground
floor.position.y = 0; // Keep it at Y=0
scene.add(floor);

// B. THE WALLS (PlaneGeometry)
// We create a function to quickly place walls
function createWall(w, h, color, posX, posZ, rotY) {
    const geo = new THREE.PlaneGeometry(w, h);
    const mat = new THREE.MeshStandardMaterial({ color: color });
    const wall = new THREE.Mesh(geo, mat);
    wall.position.set(posX, h / 2, posZ); // Set the base of the wall on the floor
    wall.rotation.y = rotY; // Rotate the wall to face the right way
    scene.add(wall);
}

// createWall(Width, Height, Color, X position, Z position, Y rotation)
createWall(20, 10, 0xbfbfbf, 0, -10, 0);       // Back wall
createWall(20, 10, 0xbfbfbf, -10, 0, Math.PI / 2); // Left wall
createWall(20, 10, 0xbfbfbf, 10, 0, -Math.PI / 2); // Right wall

// C. THE LIGHTS (Crucial for MeshStandardMaterial)
const ambientLight = new THREE.AmbientLight(0xffffff, 0.5); // Soft overall light
scene.add(ambientLight);

const pointLight = new THREE.PointLight(0xffffff, 1); // A light source, like a bulb
pointLight.position.set(5, 5, 5); // Place it in the scene
scene.add(pointLight);

// Optional: Light helper to see where the PointLight is
// const lightHelper = new THREE.PointLightHelper(pointLight);
// scene.add(lightHelper);

// Optional: Grid Helper for reference
const gridHelper = new THREE.GridHelper(20, 20);
scene.add(gridHelper);


// --- 3. THE GAME LOOP ---
function animate() {
    requestAnimationFrame(animate); // Keep re-running this function (game loop)

    // Optional: Make the pointLight rotate slowly
    pointLight.position.x = 5 * Math.sin(Date.now() * 0.001);
    pointLight.position.z = 5 * Math.cos(Date.now() * 0.001);

    controls.update(); // Update the OrbitControls on every frame

    renderer.render(scene, camera); // Finally draw the scene from the camera's perspective
}

// --- 4. HANDLE WINDOW RESIZING ---
window.addEventListener('resize', onWindowResize, false);
function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix(); // Recalculate camera view
    renderer.setSize(window.innerWidth, window.innerHeight);
}

// Start the animation loop
animate();