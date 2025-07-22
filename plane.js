// Plane Design Module
// Three.js Fighter Jet Implementation

class PlaneDesign {
  constructor() {
    this.plane = null;
    this.movingParts = []; // For propellers or other animated parts
  }

  createPlane(scene) {
    // Create main plane group
    this.plane = new THREE.Group();
    scene.add(this.plane);

    // Main fuselage - Cessna 172 style civilian aircraft
    const fuselageGeometry = new THREE.CylinderGeometry(0.12, 0.08, 1.5, 8);
    const fuselageMaterial = new THREE.MeshLambertMaterial({ color: 0x6a0dad }); // Blue fuselage
    const fuselage = new THREE.Mesh(fuselageGeometry, fuselageMaterial);
    fuselage.rotation.x = Math.PI / 2; // Rotate to point forward (along Z axis)
    this.plane.add(fuselage);

    // Nose cone
    const noseGeometry = new THREE.ConeGeometry(0.08, 0.2, 8);
    const noseMaterial = new THREE.MeshLambertMaterial({ color: 0x530b8a }); // Darker blue nose
    const nose = new THREE.Mesh(noseGeometry, noseMaterial);
    nose.position.set(0, 0, 0.85);
    nose.rotation.x = Math.PI / 2;
    this.plane.add(nose);

    // Propeller hub
    const propHubGeometry = new THREE.CylinderGeometry(0.04, 0.04, 0.08, 8);
    const propHubMaterial = new THREE.MeshLambertMaterial({ color: 0x333333 });
    const propHub = new THREE.Mesh(propHubGeometry, propHubMaterial);
    propHub.position.set(0, 0, 0.98);
    propHub.rotation.x = Math.PI / 2;
    this.plane.add(propHub);

    // Propeller blades
    const propBladeGeometry = new THREE.BoxGeometry(0.5, 0.02, 0.03);
    const propBladeMaterial = new THREE.MeshLambertMaterial({ color: 0x654321 }); // Brown wood
    const propBlade1 = new THREE.Mesh(propBladeGeometry, propBladeMaterial);
    const propBlade2 = new THREE.Mesh(propBladeGeometry, propBladeMaterial);
    propBlade1.position.set(0, 0, 1.02);
    propBlade2.position.set(0, 0, 1.02);
    propBlade2.rotation.z = Math.PI / 2;
    this.plane.add(propBlade1);
    this.plane.add(propBlade2);
    this.movingParts.push(propBlade1, propBlade2);

    // High wings (characteristic of Cessna 172)
    const wingGeometry = new THREE.BoxGeometry(2.0, 0.08, 0.3);
    const wingMaterial = new THREE.MeshLambertMaterial({ color: 0xf5f5f5 }); // Light gray wings
    const wing = new THREE.Mesh(wingGeometry, wingMaterial);
    wing.position.set(0, 0.15, 0.1); // Positioned high above fuselage
    this.plane.add(wing);

    // Wing struts (support struts from fuselage to wings)
    const strutGeometry = new THREE.CylinderGeometry(0.008, 0.008, 0.15, 6);
    const strutMaterial = new THREE.MeshLambertMaterial({ color: 0x666666 }); // Dark gray struts
    const strut1 = new THREE.Mesh(strutGeometry, strutMaterial);
    const strut2 = new THREE.Mesh(strutGeometry, strutMaterial);
    const strut3 = new THREE.Mesh(strutGeometry, strutMaterial);
    const strut4 = new THREE.Mesh(strutGeometry, strutMaterial);
    strut1.position.set(0.4, 0.075, 0.2);
    strut2.position.set(-0.4, 0.075, 0.2);
    strut3.position.set(0.4, 0.075, -0.1);
    strut4.position.set(-0.4, 0.075, -0.1);
    this.plane.add(strut1);
    this.plane.add(strut2);
    this.plane.add(strut3);
    this.plane.add(strut4);

    // Cockpit windows
    const windowGeometry = new THREE.BoxGeometry(0.15, 0.15, 0.4);
    const windowMaterial = new THREE.MeshLambertMaterial({ 
      color: 0x1a1a2e, 
      transparent: true, 
      opacity: 0.8 
    });
    const cockpitWindow = new THREE.Mesh(windowGeometry, windowMaterial);
    cockpitWindow.position.set(0, 0.08, 0.3);
    this.plane.add(cockpitWindow);

    // Horizontal stabilizer (tail wing)
    const tailWingGeometry = new THREE.BoxGeometry(0.6, 0.06, 0.12);
    const tailWing = new THREE.Mesh(tailWingGeometry, wingMaterial);
    tailWing.position.set(0, 0, -0.6);
    this.plane.add(tailWing);

    // Vertical stabilizer (tail fin)
    const tailFinGeometry = new THREE.BoxGeometry(0.12, 0.25, 0.06);
    const tailFin = new THREE.Mesh(tailFinGeometry, wingMaterial);
    tailFin.position.set(0, 0.125, -0.6);
    this.plane.add(tailFin);

    // Rudder (red and white stripe pattern)
    const rudderGeometry = new THREE.BoxGeometry(0.1, 0.15, 0.02);
    const rudderMaterial = new THREE.MeshLambertMaterial({ color: 0xff6b35 }); // Orange accent
    const rudder = new THREE.Mesh(rudderGeometry, rudderMaterial);
    rudder.position.set(0, 0.125, -0.68);
    this.plane.add(rudder);

    // Landing gear - fixed tricycle gear (characteristic of Cessna 172)
    const gearStrutGeometry = new THREE.CylinderGeometry(0.01, 0.01, 0.15, 6);
    const gearStrutMaterial = new THREE.MeshLambertMaterial({ color: 0x555555 });
    
    // Main landing gear
    const mainGear1 = new THREE.Mesh(gearStrutGeometry, gearStrutMaterial);
    const mainGear2 = new THREE.Mesh(gearStrutGeometry, gearStrutMaterial);
    mainGear1.position.set(0.6, -0.075, 0.1);
    mainGear2.position.set(-0.6, -0.075, 0.1);
    this.plane.add(mainGear1);
    this.plane.add(mainGear2);

    // Nose gear
    const noseGear = new THREE.Mesh(gearStrutGeometry, gearStrutMaterial);
    noseGear.position.set(0, -0.075, 0.6);
    this.plane.add(noseGear);

    // Wheels
    const wheelGeometry = new THREE.CylinderGeometry(0.04, 0.04, 0.02, 8);
    const wheelMaterial = new THREE.MeshLambertMaterial({ color: 0x222222 });
    const wheel1 = new THREE.Mesh(wheelGeometry, wheelMaterial);
    const wheel2 = new THREE.Mesh(wheelGeometry, wheelMaterial);
    const wheel3 = new THREE.Mesh(wheelGeometry, wheelMaterial);
    wheel1.position.set(0.6, -0.15, 0.1);
    wheel2.position.set(-0.6, -0.15, 0.1);
    wheel3.position.set(0, -0.15, 0.6);
    wheel1.rotation.z = Math.PI / 2;
    wheel2.rotation.z = Math.PI / 2;
    wheel3.rotation.z = Math.PI / 2;
    this.plane.add(wheel1);
    this.plane.add(wheel2);
    this.plane.add(wheel3);

    // Navigation lights
    const navLightGeometry = new THREE.SphereGeometry(0.015, 6, 4);
    const redLightMaterial = new THREE.MeshLambertMaterial({ 
      color: 0xff0000, 
      emissive: 0x220000 
    });
    const greenLightMaterial = new THREE.MeshLambertMaterial({ 
      color: 0x00ff00, 
      emissive: 0x002200 
    });
    const whiteLightMaterial = new THREE.MeshLambertMaterial({ 
      color: 0xffffff, 
      emissive: 0x222222 
    });
    
    const redLight = new THREE.Mesh(navLightGeometry, redLightMaterial);
    const greenLight = new THREE.Mesh(navLightGeometry, greenLightMaterial);
    const tailLight = new THREE.Mesh(navLightGeometry, whiteLightMaterial);
    
    redLight.position.set(-1.0, 0.15, 0.1); // Left wing tip (red)
    greenLight.position.set(1.0, 0.15, 0.1); // Right wing tip (green)
    tailLight.position.set(0, 0.25, -0.7); // Tail (white)
    
    this.plane.add(redLight);
    this.plane.add(greenLight);
    this.plane.add(tailLight);

    // Registration numbers (N-number style)
    const numberGeometry = new THREE.BoxGeometry(0.3, 0.05, 0.01);
    const numberMaterial = new THREE.MeshLambertMaterial({ color: 0x000000 });
    const regNumber = new THREE.Mesh(numberGeometry, numberMaterial);
    regNumber.position.set(-0.15, 0.08, -0.2);
    this.plane.add(regNumber);

    return this.plane;
  }

  getVehicle() {
    return this.plane;
  }

  getMovingParts() {
    return this.movingParts;
  }
}

// Export for use in main script
window.PlaneDesign = PlaneDesign;
