// Boat Design Module
// Three.js Jet Ski Implementation

class BoatDesign {
  constructor() {
    this.boat = null;
    this.movingParts = []; // For impeller or other animated parts
  }

  createBoat(scene) {
    // Create main jet ski group
    this.boat = new THREE.Group();
    scene.add(this.boat);

    // Main hull - sleek jet ski body
    const hullGeometry = new THREE.CylinderGeometry(0.12, 0.08, 1.2, 12);
    const hullMaterial = new THREE.MeshLambertMaterial({ color: 0x6a0dad }); // Purple jet ski hull
    const hull = new THREE.Mesh(hullGeometry, hullMaterial);
    hull.rotation.x = Math.PI / 2; // Rotate to point forward (along Z axis)
    hull.scale.y = 0.4; // Flatten for jet ski profile
    this.boat.add(hull);

    // Bow (front nose) - pointed for cutting through water
    const bowGeometry = new THREE.ConeGeometry(0.08, 0.25, 12);
    const bowMaterial = new THREE.MeshLambertMaterial({ color: 0x530b8a }); // Darker purple bow
    const bow = new THREE.Mesh(bowGeometry, bowMaterial);
    bow.position.set(0, 0, 0.725);
    bow.rotation.x = Math.PI / 2;
    bow.scale.y = 0.4;
    this.boat.add(bow);

    // Deck - riding platform
    const deckGeometry = new THREE.BoxGeometry(0.22, 0.02, 1.0);
    const deckMaterial = new THREE.MeshLambertMaterial({ color: 0xf5f5f5 }); // White deck
    const deck = new THREE.Mesh(deckGeometry, deckMaterial);
    deck.position.set(0, 0.06, -0.1);
    this.boat.add(deck);

    // Seat - comfortable riding seat
    const jetSkiSeatGeometry = new THREE.BoxGeometry(0.15, 0.08, 0.25);
    const jetSkiSeatMaterial = new THREE.MeshLambertMaterial({ color: 0x6a0dad }); // Purple seat to match
    const seat = new THREE.Mesh(jetSkiSeatGeometry, jetSkiSeatMaterial);
    seat.position.set(0, 0.11, -0.1);
    this.boat.add(seat);

    // Handlebars - steering mechanism
    const handlebarPoleGeometry = new THREE.CylinderGeometry(0.008, 0.008, 0.15, 8);
    const handlebarPoleMaterial = new THREE.MeshLambertMaterial({ color: 0x333333 });
    const handlebarPole = new THREE.Mesh(handlebarPoleGeometry, handlebarPoleMaterial);
    handlebarPole.position.set(0, 0.225, 0.15);
    this.boat.add(handlebarPole);

    // Handlebar grips
    const handlebarGeometry = new THREE.CylinderGeometry(0.01, 0.01, 0.25, 8);
    const handlebar = new THREE.Mesh(handlebarGeometry, handlebarPoleMaterial);
    handlebar.position.set(0, 0.3, 0.15);
    handlebar.rotation.z = Math.PI / 2;
    this.boat.add(handlebar);

    // Engine compartment - rear section
    const engineGeometry = new THREE.BoxGeometry(0.18, 0.12, 0.3);
    const engineMaterial = new THREE.MeshLambertMaterial({ color: 0x222222 }); // Dark engine cover
    const engine = new THREE.Mesh(engineGeometry, engineMaterial);
    engine.position.set(0, 0.03, -0.45);
    this.boat.add(engine);

    // Jet pump intake - bottom of hull
    const intakeGeometry = new THREE.BoxGeometry(0.08, 0.02, 0.12);
    const intakeMaterial = new THREE.MeshLambertMaterial({ color: 0x444444 });
    const intake = new THREE.Mesh(intakeGeometry, intakeMaterial);
    intake.position.set(0, -0.05, -0.3);
    this.boat.add(intake);

    // Jet nozzle - rear propulsion
    const nozzleGeometry = new THREE.CylinderGeometry(0.03, 0.025, 0.08, 8);
    const nozzleMaterial = new THREE.MeshLambertMaterial({ color: 0x555555 });
    const nozzle = new THREE.Mesh(nozzleGeometry, nozzleMaterial);
    nozzle.position.set(0, 0, -0.64);
    nozzle.rotation.x = Math.PI / 2;
    this.boat.add(nozzle);

    // Impeller (inside jet pump) - spinning part
    const impellerGeometry = new THREE.CylinderGeometry(0.035, 0.035, 0.06, 6);
    const impellerMaterial = new THREE.MeshLambertMaterial({ color: 0x888888 });
    const impeller = new THREE.Mesh(impellerGeometry, impellerMaterial);
    impeller.position.set(0, 0, -0.5);
    impeller.rotation.x = Math.PI / 2;
    this.boat.add(impeller);
    this.movingParts.push(impeller);

    // Racing stripes - aggressive jet ski graphics
    const stripeGeometry = new THREE.BoxGeometry(0.03, 0.01, 0.8);
    const stripeMaterial = new THREE.MeshLambertMaterial({ color: 0xc0c0c0 }); // Silver racing stripes
    const stripe1 = new THREE.Mesh(stripeGeometry, stripeMaterial);
    const stripe2 = new THREE.Mesh(stripeGeometry, stripeMaterial);
    stripe1.position.set(-0.04, 0.07, 0);
    stripe2.position.set(0.04, 0.07, 0);
    this.boat.add(stripe1);
    this.boat.add(stripe2);

    // Side hull graphics - sport design
    const graphicGeometry = new THREE.BoxGeometry(0.01, 0.03, 0.6);
    const graphicMaterial = new THREE.MeshLambertMaterial({ color: 0xffffff }); // White graphics
    const graphicLeft = new THREE.Mesh(graphicGeometry, graphicMaterial);
    const graphicRight = new THREE.Mesh(graphicGeometry, graphicMaterial);
    graphicLeft.position.set(-0.11, 0.02, 0.1);
    graphicRight.position.set(0.11, 0.02, 0.1);
    this.boat.add(graphicLeft);
    this.boat.add(graphicRight);

    // Footrests - rider foot placement
    const footrestGeometry = new THREE.BoxGeometry(0.06, 0.01, 0.08);
    const footrestMaterial = new THREE.MeshLambertMaterial({ color: 0x333333 }); // Dark footrests
    const footrestLeft = new THREE.Mesh(footrestGeometry, footrestMaterial);
    const footrestRight = new THREE.Mesh(footrestGeometry, footrestMaterial);
    footrestLeft.position.set(-0.08, 0.08, 0.2);
    footrestRight.position.set(0.08, 0.08, 0.2);
    this.boat.add(footrestLeft);
    this.boat.add(footrestRight);

    // Navigation lights - compact jet ski style
    const navLightGeometry = new THREE.SphereGeometry(0.01, 8, 6);
    const redLightMaterial = new THREE.MeshLambertMaterial({ 
      color: 0xff0000, 
      emissive: 0x330000 
    });
    const greenLightMaterial = new THREE.MeshLambertMaterial({ 
      color: 0x00ff00, 
      emissive: 0x003300 
    });
    
    const redLight = new THREE.Mesh(navLightGeometry, redLightMaterial);
    const greenLight = new THREE.Mesh(navLightGeometry, greenLightMaterial);
    
    redLight.position.set(-0.1, 0.07, 0.6); // Port side (left - red)
    greenLight.position.set(0.1, 0.07, 0.6); // Starboard side (right - green)
    
    this.boat.add(redLight);
    this.boat.add(greenLight);

    // Rear grab handles - safety features
    const handleGeometry = new THREE.CylinderGeometry(0.005, 0.005, 0.1, 8);
    const handleMaterial = new THREE.MeshLambertMaterial({ color: 0x333333 });
    const handleLeft = new THREE.Mesh(handleGeometry, handleMaterial);
    const handleRight = new THREE.Mesh(handleGeometry, handleMaterial);
    handleLeft.position.set(-0.08, 0.12, -0.35);
    handleRight.position.set(0.08, 0.12, -0.35);
    handleLeft.rotation.z = Math.PI / 2;
    handleRight.rotation.z = Math.PI / 2;
    this.boat.add(handleLeft);
    this.boat.add(handleRight);

    return this.boat;
  }

  getVehicle() {
    return this.boat;
  }

  getMovingParts() {
    return this.movingParts;
  }
}

// Export for use in main script
window.BoatDesign = BoatDesign;
