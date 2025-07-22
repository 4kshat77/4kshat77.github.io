// Vehicle Factory Module
// System for creating different vehicle types

class VehicleFactory {
  static createVehicle(type, scene) {
    switch(type.toLowerCase()) {
      case 'car':
      case 'sportscar':
        const carDesign = new SportsCarDesign();
        return {
          vehicle: carDesign.createSportsCar(scene),
          movingParts: carDesign.getWheels(),
          design: carDesign
        };
      
      case 'plane':
      case 'jet':
      case 'fighter':
        const planeDesign = new PlaneDesign();
        return {
          vehicle: planeDesign.createPlane(scene),
          movingParts: planeDesign.getMovingParts(),
          design: planeDesign
        };
      
      case 'boat':
      case 'speedboat':
      case 'ship':
        const boatDesign = new BoatDesign();
        return {
          vehicle: boatDesign.createBoat(scene),
          movingParts: boatDesign.getMovingParts(),
          design: boatDesign
        };
      
      default:
        console.warn(`Unknown vehicle type: ${type}. Defaulting to car.`);
        const defaultCarDesign = new SportsCarDesign();
        return {
          vehicle: defaultCarDesign.createSportsCar(scene),
          movingParts: defaultCarDesign.getWheels(),
          design: defaultCarDesign
        };
    }
  }

  static getAvailableVehicles() {
    return ['car', 'sportscar', 'plane', 'jet', 'fighter'];
  }
}

// Export for use in main script
window.VehicleFactory = VehicleFactory;
