// Vehicle Controller Module
// Three.js Vehicle Movement and Controls Implementation (works with any vehicle type)

class VehicleController {
  constructor(vehicleType = 'plane') { // Default to plane now
    // Three.js Vehicle Setup
    this.scene = null;
    this.camera = null;
    this.renderer = null;
    this.vehicle = null;
    this.movingParts = [];
    this.keys = {};
    this.vehiclePosition = { x: 0, y: 0 };
    this.vehicleRotation = Math.PI; // Start facing upwards (180 degrees)
    this.vehicleSpeed = 0;
    this.vehicleContainer = null;
    this.vehicleDesign = null;
    this.vehicleType = vehicleType;
  }

  initVehicle() {
    this.vehicleContainer = document.getElementById('car-container'); // Keep same container name for compatibility
    
    // Scene setup
    this.scene = new THREE.Scene();
    this.camera = new THREE.OrthographicCamera(-2, 2, 1.5, -1.5, 0.1, 1000);
    this.renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    this.renderer.setSize(120, 80);
    this.renderer.setClearColor(0x000000, 0);
    this.vehicleContainer.appendChild(this.renderer.domElement);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    this.scene.add(ambientLight);
    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight.position.set(0, 10, 0);
    this.scene.add(directionalLight);

    // Create vehicle using the factory system
    const vehicleData = VehicleFactory.createVehicle(this.vehicleType, this.scene);
    this.vehicle = vehicleData.vehicle;
    this.movingParts = vehicleData.movingParts;
    this.vehicleDesign = vehicleData.design;

    // Position camera for angled down view
    this.camera.position.set(0, 3, 2.5);
    this.camera.lookAt(0, 0, 0);

    // Keyboard events for vehicle movement
    document.addEventListener('keydown', (event) => this.onKeyDown(event));
    document.addEventListener('keyup', (event) => this.onKeyUp(event));

    this.animate();
  }

  onKeyDown(event) {
    this.keys[event.code] = true;
  }

  onKeyUp(event) {
    this.keys[event.code] = false;
  }

  updateVehicleMovement() {
    const moveSpeed = 3; // Increased speed for faster movement
    const turnSpeed = 0.03;
    
    let isMoving = false;
    
    // Forward/Backward movement (W/S or Up/Down arrows)
    if (this.keys['KeyW'] || this.keys['ArrowUp']) {
      this.vehicleSpeed = moveSpeed;
      isMoving = true;
    } else if (this.keys['KeyS'] || this.keys['ArrowDown']) {
      this.vehicleSpeed = -moveSpeed;
      isMoving = true;
    } else {
      this.vehicleSpeed = 0;
    }
    
    // Steering (A/D or Left/Right arrows) - only when moving
    if (isMoving) {
      if (this.keys['KeyA'] || this.keys['ArrowLeft']) {
        this.vehicleRotation += turnSpeed; // Left turn
      }
      if (this.keys['KeyD'] || this.keys['ArrowRight']) {
        this.vehicleRotation -= turnSpeed; // Right turn
      }
    }
    
    // Calculate movement based on vehicle's rotation and speed
    const moveX = Math.sin(this.vehicleRotation) * this.vehicleSpeed;
    const moveY = Math.cos(this.vehicleRotation) * this.vehicleSpeed;
    
    // Update vehicle position
    this.vehiclePosition.x += moveX;
    this.vehiclePosition.y += moveY;
    
    // Keep vehicle within screen bounds
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;
    const vehicleSize = 60;
    
    if (this.vehiclePosition.x < vehicleSize) this.vehiclePosition.x = vehicleSize;
    if (this.vehiclePosition.x > screenWidth - vehicleSize) this.vehiclePosition.x = screenWidth - vehicleSize;
    if (this.vehiclePosition.y < vehicleSize) this.vehiclePosition.y = vehicleSize;
    if (this.vehiclePosition.y > screenHeight - vehicleSize) this.vehiclePosition.y = screenHeight - vehicleSize;
    
    // Update vehicle container position on screen
    this.vehicleContainer.style.left = this.vehiclePosition.x + 'px';
    this.vehicleContainer.style.top = this.vehiclePosition.y + 'px';
    this.vehicleContainer.style.transform = 'translate(-50%, -50%)';
  }

  animate() {
    requestAnimationFrame(() => this.animate());
    
    // Update vehicle movement based on keyboard input
    this.updateVehicleMovement();
    
    // Update vehicle rotation in 3D scene
    this.vehicle.rotation.y = this.vehicleRotation;
    
    // Moving parts stay static for now (can be extended for specific vehicle animations)
    
    this.renderer.render(this.scene, this.camera);
  }

  setInitialPosition(x, y) {
    this.vehiclePosition.x = x;
    this.vehiclePosition.y = y;
  }

  // Method to switch vehicle type dynamically
  switchVehicle(newVehicleType) {
    // Remove current vehicle from scene
    if (this.vehicle) {
      this.scene.remove(this.vehicle);
    }
    
    // Create new vehicle
    this.vehicleType = newVehicleType;
    const vehicleData = VehicleFactory.createVehicle(this.vehicleType, this.scene);
    this.vehicle = vehicleData.vehicle;
    this.movingParts = vehicleData.movingParts;
    this.vehicleDesign = vehicleData.design;
    
    // Maintain current position and rotation
    this.vehicle.rotation.y = this.vehicleRotation;
  }
}

// Export for use in main script (keeping CarController name for compatibility)
window.CarController = VehicleController;
window.VehicleController = VehicleController;
