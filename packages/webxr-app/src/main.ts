// packages/webxr-app/src/main.ts
import * as THREE from 'three';
import { VRButton } from 'three/addons/webxr/VRButton.js'; // Keep .js extension for addon imports

// --- Basic Scene Setup ---
const scene: THREE.Scene = new THREE.Scene();
const camera: THREE.PerspectiveCamera = new THREE.PerspectiveCamera(
    75, // Field of View
    window.innerWidth / window.innerHeight, // Aspect Ratio
    0.1, // Near clipping plane
    1000 // Far clipping plane
);
camera.position.z = 3;

const renderer: THREE.WebGLRenderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(window.devicePixelRatio);
document.body.appendChild(renderer.domElement);

// --- Lighting ---
const ambientLight: THREE.AmbientLight = new THREE.AmbientLight(0x404040); // Soft white light
scene.add(ambientLight);
const directionalLight: THREE.DirectionalLight = new THREE.DirectionalLight(0xffffff, 1);
directionalLight.position.set(1, 1, 1).normalize();
scene.add(directionalLight);

// --- Cube ---
const geometry: THREE.BoxGeometry = new THREE.BoxGeometry(1, 1, 1);
const material: THREE.MeshStandardMaterial = new THREE.MeshStandardMaterial({ color: 0x00ff00 });
export const cube: THREE.Mesh = new THREE.Mesh(geometry, material); // Exported cube
scene.add(cube);

// --- WebXR Setup ---
renderer.xr.enabled = true;
// Type assertion for createButton result if needed, though usually inferred correctly
document.body.appendChild(VRButton.createButton(renderer));

// --- Handle Window Resize ---
function onWindowResize (): void { // Added void return type
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}
window.addEventListener('resize', onWindowResize);

// --- Animation Loop ---
// Define the animation callback function type
type AnimationCallback = (timestamp: number, frame?: THREE.XRFrame) => void;

const animateCallback: AnimationCallback = (timestamp, frame) => {
    // Rotate the cube
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;

    // Render the scene
    renderer.render(scene, camera);
};

function startAnimation (): void { // Added void return type
    // Use renderer's built-in loop for XR compatibility
    renderer.setAnimationLoop(animateCallback);
}

startAnimation(); // Start the animation loop

console.log('Three.js scene initialized with WebXR support (TypeScript).');