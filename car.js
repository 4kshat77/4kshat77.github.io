// Car Design Module
// Three.js Sports Car Implementation

class SportsCarDesign {
  constructor() {
    this.car = null;
    this.wheels = [];
  }

  createSportsCar(scene) {
    // Create main car group
    this.car = new THREE.Group();
    scene.add(this.car);

    // Sports car body - low and wide (oriented so front is pointing in positive Z direction)
    const bodyGeometry = new THREE.BoxGeometry(1.0, 0.2, 1.8);
    const bodyMaterial = new THREE.MeshLambertMaterial({ color: 0x6a0dad }); // Purple color
    const body = new THREE.Mesh(bodyGeometry, bodyMaterial);
    this.car.add(body);

    // Sports car windshield/cockpit - sleek and low
    const cockpitGeometry = new THREE.BoxGeometry(0.8, 0.25, 1.0);
    const cockpitMaterial = new THREE.MeshLambertMaterial({ color: 0x111111 }); // Dark tinted
    const cockpit = new THREE.Mesh(cockpitGeometry, cockpitMaterial);
    cockpit.position.set(0, 0.22, -0.1); // Slightly back from center (negative Z is now back)
    this.car.add(cockpit);

    // Front spoiler/nose
    const spoilerGeometry = new THREE.BoxGeometry(0.7, 0.05, 0.15);
    const spoilerMaterial = new THREE.MeshLambertMaterial({ color: 0x333333 });
    const spoiler = new THREE.Mesh(spoilerGeometry, spoilerMaterial);
    spoiler.position.set(0, -0.08, 0.95); // At the very front (positive Z is now front)
    this.car.add(spoiler);

    // Headlamps - bright white LED style
    const headlampGeometry = new THREE.CylinderGeometry(0.08, 0.08, 0.05, 8);
    const headlampMaterial = new THREE.MeshLambertMaterial({ 
      color: 0xffffff, 
      emissive: 0x444444 // Slight glow effect
    });
    const headlamp1 = new THREE.Mesh(headlampGeometry, headlampMaterial);
    const headlamp2 = new THREE.Mesh(headlampGeometry, headlampMaterial);
    headlamp1.position.set(0.25, -0.05, 0.88); // Right headlamp (front now positive Z)
    headlamp2.position.set(-0.25, -0.05, 0.88); // Left headlamp (front now positive Z)
    headlamp1.rotation.x = Math.PI / 2; // Point forward
    headlamp2.rotation.x = Math.PI / 2; // Point forward
    this.car.add(headlamp1);
    this.car.add(headlamp2);

    // Side air intakes - sporty vents
    const intakeGeometry = new THREE.BoxGeometry(0.15, 0.08, 0.3);
    const intakeMaterial = new THREE.MeshLambertMaterial({ color: 0x222222 });
    const intake1 = new THREE.Mesh(intakeGeometry, intakeMaterial);
    const intake2 = new THREE.Mesh(intakeGeometry, intakeMaterial);
    intake1.position.set(0.42, -0.06, 0.2); // Right side intake (moved to positive Z)
    intake2.position.set(-0.42, -0.06, 0.2); // Left side intake (moved to positive Z)
    this.car.add(intake1);
    this.car.add(intake2);

    // Rear spoiler - aggressive wing
    const rearSpoilerGeometry = new THREE.BoxGeometry(0.8, 0.03, 0.12);
    const rearSpoilerMaterial = new THREE.MeshLambertMaterial({ color: 0x222222 });
    const rearSpoiler = new THREE.Mesh(rearSpoilerGeometry, rearSpoilerMaterial);
    rearSpoiler.position.set(0, 0.15, -0.85); // At the back (negative Z is now back)
    this.car.add(rearSpoiler);

    // Exhaust pipes
    const exhaustGeometry = new THREE.CylinderGeometry(0.03, 0.03, 0.1, 8);
    const exhaustMaterial = new THREE.MeshLambertMaterial({ color: 0x333333 });
    const exhaust1 = new THREE.Mesh(exhaustGeometry, exhaustMaterial);
    const exhaust2 = new THREE.Mesh(exhaustGeometry, exhaustMaterial);
    exhaust1.position.set(0.15, -0.12, -0.9); // Right exhaust (back now negative Z)
    exhaust2.position.set(-0.15, -0.12, -0.9); // Left exhaust (back now negative Z)
    exhaust1.rotation.x = Math.PI / 2; // Point backward
    exhaust2.rotation.x = Math.PI / 2; // Point backward
    this.car.add(exhaust1);
    this.car.add(exhaust2);

    // Racing stripes - now silver to complement purple
    const stripeGeometry = new THREE.BoxGeometry(0.15, 0.01, 1.8);
    const stripeMaterial = new THREE.MeshLambertMaterial({ color: 0xc0c0c0 }); // Silver stripes
    const stripe1 = new THREE.Mesh(stripeGeometry, stripeMaterial);
    const stripe2 = new THREE.Mesh(stripeGeometry, stripeMaterial);
    stripe1.position.set(-0.1, 0.11, 0);
    stripe2.position.set(0.1, 0.11, 0);
    this.car.add(stripe1);
    this.car.add(stripe2);

    // Side mirrors
    const mirrorGeometry = new THREE.BoxGeometry(0.05, 0.05, 0.08);
    const mirrorMaterial = new THREE.MeshLambertMaterial({ color: 0x222222 });
    const mirror1 = new THREE.Mesh(mirrorGeometry, mirrorMaterial);
    const mirror2 = new THREE.Mesh(mirrorGeometry, mirrorMaterial);
    mirror1.position.set(0.52, 0.15, -0.3);
    mirror2.position.set(-0.52, 0.15, -0.3);
    this.car.add(mirror1);
    this.car.add(mirror2);

    // Sports car wheels - lower profile
    this.createWheels();

    return this.car;
  }

  createWheels() {
    // Lower profile sport wheels
    const wheelGeometry = new THREE.CylinderGeometry(0.12, 0.12, 0.06, 8);
    const wheelMaterial = new THREE.MeshLambertMaterial({ color: 0x111111 });
    
    // Performance rims - larger and more detailed
    const rimGeometry = new THREE.CylinderGeometry(0.09, 0.09, 0.07, 6);
    const rimMaterial = new THREE.MeshLambertMaterial({ color: 0x999999 }); // Brighter silver
    
    const wheelPositions = [
      { x: 0.45, y: -0.15, z: 0.6 },   // Front right (positive Z is now front)
      { x: -0.45, y: -0.15, z: 0.6 },  // Front left (positive Z is now front)
      { x: 0.45, y: -0.15, z: -0.6 },   // Rear right (negative Z is now back)
      { x: -0.45, y: -0.15, z: -0.6 }   // Rear left (negative Z is now back)
    ];

    wheelPositions.forEach(pos => {
      // Create wheel
      const wheel = new THREE.Mesh(wheelGeometry, wheelMaterial);
      wheel.position.set(pos.x, pos.y, pos.z);
      wheel.rotation.x = Math.PI / 2;
      this.car.add(wheel);
      this.wheels.push(wheel);
      
      // Create rim
      const rim = new THREE.Mesh(rimGeometry, rimMaterial);
      rim.position.set(pos.x, pos.y, pos.z);
      rim.rotation.x = Math.PI / 2;
      this.car.add(rim);
    });
  }

  getCar() {
    return this.car;
  }

  getWheels() {
    return this.wheels;
  }
}

// Export for use in main script
window.SportsCarDesign = SportsCarDesign;
