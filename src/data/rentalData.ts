export type RentalCategory = 'recovery' | 'ride-home';
export type RentalAvailability = 'Available' | 'Limited availability' | 'On trip';

export interface RecoveryTruck {
  id: string;
  type: 'recovery';
  name: string;
  vehicleClass: string;
  capacity: string;
  bedDimensions: string;
  suitableFor: string[];
  serviceArea: string;
  pricePerTrip: number;
  availability: RentalAvailability;
  images: string[];
  description: string;
  features: string[];
}

export interface RideHomeVehicle {
  id: string;
  type: 'ride-home';
  name: string;
  vehicleClass: string;
  seats: number;
  luggageCapacity: string;
  suitableFor: string[];
  serviceArea: string;
  pricePerTrip: number;
  availability: RentalAvailability;
  images: string[];
  description: string;
  features: string[];
}

export type RentalListing = RecoveryTruck | RideHomeVehicle;

const imagePath = '/assets/pic_for_gallary';

export const recoveryTrucks: RecoveryTruck[] = [
  {
    id: 'compact-flatbed', type: 'recovery', name: 'Compact Flatbed', vehicleClass: 'Light-duty flatbed', capacity: 'Up to 1.5 tonnes', bedDimensions: '4.6m x 2.0m', suitableFor: ['Hatchbacks', 'Sedans', 'Small SUVs'], serviceArea: 'Dhaka metro', pricePerTrip: 1800, availability: 'Available',
    images: [`${imagePath}/man-working-car-detailing-coating-car.jpg`], description: 'A low-angle flatbed for safely moving compact cars, sedans, and small crossovers to a repair shop.', features: ['Hydraulic loading ramp', 'Wheel straps included', 'Trained recovery driver'],
  },
  {
    id: 'standard-flatbed', type: 'recovery', name: 'Standard Flatbed', vehicleClass: 'Medium-duty flatbed', capacity: 'Up to 3 tonnes', bedDimensions: '5.5m x 2.2m', suitableFor: ['Sedans', 'SUVs', 'MPVs', 'Small vans'], serviceArea: 'Dhaka and nearby districts', pricePerTrip: 2600, availability: 'Available',
    images: [`${imagePath}/alexis-amz-da-cruz-qVnkGg7hHlI-unsplash.jpg`], description: 'The everyday recovery option for most family vehicles when the car cannot be driven safely.', features: ['Extended wheelbase', 'Winch-assisted loading', 'Day and night dispatch'],
  },
  {
    id: 'suv-recovery-truck', type: 'recovery', name: 'SUV Recovery Truck', vehicleClass: 'Heavy-duty flatbed', capacity: 'Up to 4.5 tonnes', bedDimensions: '6.2m x 2.4m', suitableFor: ['Large SUVs', 'Pickup trucks', 'Luxury vehicles'], serviceArea: 'Dhaka metro and highways', pricePerTrip: 3800, availability: 'Limited availability',
    images: [`${imagePath}/maxim-tolchinskiy-bDerlrw72-g-unsplash.jpg`], description: 'A longer, stronger flatbed with extra clearance for heavy SUVs, pickups, and premium vehicles.', features: ['Heavy-duty winch', 'Extra-wide bed', 'Protective loading pads'],
  },
  {
    id: 'wheel-lift-tow', type: 'recovery', name: 'Wheel-Lift Tow Truck', vehicleClass: 'Urban wheel-lift', capacity: 'Up to 2 tonnes', bedDimensions: 'Adjustable wheel cradle', suitableFor: ['Front-wheel-drive cars', 'Short-distance moves', 'Tight parking areas'], serviceArea: 'Central Dhaka', pricePerTrip: 1400, availability: 'Available',
    images: [`${imagePath}/vehicle-parts.jpg`], description: 'A compact urban tow option for quick moves when access is tight and a full flatbed is not required.', features: ['Fast dispatch', 'Works in narrow lanes', 'Short-distance pricing'],
  },
  {
    id: 'motorcycle-carrier', type: 'recovery', name: 'Multi-vehicle Carrier', vehicleClass: 'Vehicle carrier', capacity: 'Up to 5 tonnes', bedDimensions: '6.8m x 2.5m', suitableFor: ['Multiple vehicles', 'Fleet moves', 'Cars with damaged wheels'], serviceArea: 'Bangladesh-wide by booking', pricePerTrip: 6500, availability: 'Limited availability',
    images: [`${imagePath}/vehicle-parts.jpg`], description: 'A scheduled carrier for moving multiple cars or vehicles with serious wheel and suspension damage.', features: ['Multiple tie-down points', 'Fleet transport support', 'Scheduled dispatch'],
  },
  {
    id: 'emergency-recovery-van', type: 'recovery', name: 'Emergency Recovery Van', vehicleClass: 'Rapid-response recovery van', capacity: 'Up to 1 tonne', bedDimensions: 'Wheel-lift platform', suitableFor: ['Battery failures', 'Flat tires', 'Small hatchbacks'], serviceArea: 'Dhaka 24/7 zone', pricePerTrip: 1200, availability: 'Available',
    images: [`${imagePath}/car-maintenance.jpg`], description: 'A fast response vehicle for simple breakdowns, roadside assistance, and small-car transport.', features: ['24/7 response', 'Jump-start equipment', 'Basic roadside tools'],
  },
];

export const rideHomeVehicles: RideHomeVehicle[] = [
  {
    id: 'safe-ride-sedan', type: 'ride-home', name: 'Safe Ride Sedan', vehicleClass: 'Private sedan', seats: 4, luggageCapacity: '2 medium bags', suitableFor: ['1-3 passengers', 'City return trips', 'Small luggage'], serviceArea: 'Dhaka metro', pricePerTrip: 900, availability: 'Available',
    images: [`${imagePath}/nina-mercado-e9YFrEBWit8-unsplash.jpg`], description: 'A private, comfortable ride home for a driver and a small group after a vehicle breakdown.', features: ['Verified driver', 'Door-to-door drop-off', 'Air conditioning'],
  },
  {
    id: 'family-mpv', type: 'ride-home', name: 'Family MPV', vehicleClass: 'Private 6-seat MPV', seats: 6, luggageCapacity: '4 medium bags', suitableFor: ['4-6 passengers', 'Families', 'Extra luggage'], serviceArea: 'Dhaka and nearby districts', pricePerTrip: 1500, availability: 'Available',
    images: [`${imagePath}/deniz-demirci-dlJelFmdpOc-unsplash.jpg`], description: 'A spacious private vehicle for families or groups who need to travel home together.', features: ['Six passenger seats', 'Flexible luggage space', 'Child-friendly boarding'],
  },
  {
    id: 'executive-suv', type: 'ride-home', name: 'Executive SUV', vehicleClass: 'Private premium SUV', seats: 5, luggageCapacity: '3 large bags', suitableFor: ['1-4 passengers', 'Longer journeys', 'Premium comfort'], serviceArea: 'Dhaka and highways', pricePerTrip: 2200, availability: 'Limited availability',
    images: [`${imagePath}/maxim-tolchinskiy-bDerlrw72-g-unsplash.jpg`], description: 'A premium private transfer when you need more space and comfort after leaving your damaged car.', features: ['Premium cabin', 'Highway-ready', 'Professional driver'],
  },
  {
    id: 'group-van', type: 'ride-home', name: 'Group Transfer Van', vehicleClass: 'Private 10-seat van', seats: 10, luggageCapacity: '8 medium bags', suitableFor: ['7-10 passengers', 'Large families', 'Team travel'], serviceArea: 'Dhaka and regional routes', pricePerTrip: 3000, availability: 'Available',
    images: [`${imagePath}/clement-m-Ng3xrviPrhk-unsplash.jpg`], description: 'A private van for larger groups who need to leave the breakdown location together and safely.', features: ['Ten passenger seats', 'Large luggage zone', 'Group pickup coordination'],
  },
  {
    id: 'late-night-safe-ride', type: 'ride-home', name: 'Late-night Safe Ride', vehicleClass: 'Private sedan with priority dispatch', seats: 4, luggageCapacity: '2 medium bags', suitableFor: ['1-3 passengers', 'Late-night breakdowns', 'Priority pickup'], serviceArea: 'Dhaka 24/7 zone', pricePerTrip: 1200, availability: 'Available',
    images: [`${imagePath}/car-maintenance.jpg`], description: 'A priority private ride for customers who need to get home safely after an evening or overnight breakdown.', features: ['24/7 dispatch', 'Live trip coordination', 'Verified driver'],
  },
];

export const rentalListings: RentalListing[] = [...recoveryTrucks, ...rideHomeVehicles];

export const getRentalListing = (type: string | undefined, id: string | undefined) => rentalListings.find((listing) => listing.type === type && listing.id === id);
