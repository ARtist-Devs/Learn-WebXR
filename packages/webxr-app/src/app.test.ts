// packages/webxr-app/src/app.test.ts
// describe, it, expect are available globally due to Vitest config
import { cube } from './main'; // Import the cube from main.ts
import * as THREE from 'three';

describe('WebXR App Basics (TypeScript)', () => {
    it('should create a cube mesh', () => {
        expect(cube).toBeDefined();
        expect(cube).toBeInstanceOf(THREE.Mesh);
    });

    it('should have geometry and material', () => {
        // Explicit type checks are good practice in TS tests
        expect(cube.geometry).toBeDefined();
        expect(cube.material).toBeDefined();
        expect(cube.geometry).toBeInstanceOf(THREE.BoxGeometry);
        expect(cube.material).toBeInstanceOf(THREE.MeshStandardMaterial);

        // Example: Accessing a property safely (if material could be an array)
        if (cube.material instanceof THREE.Material)
        {
            expect(cube.material.type).toEqual('MeshStandardMaterial');
        }
    });
});