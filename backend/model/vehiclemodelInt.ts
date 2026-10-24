export interface Vehicle {
  _id: string;
  sellerId: string; // Add sellerId property
  identification_number: string;
  registration_number: string;
  location: string;
  brandName: string;
  carName: string;
  manufYear: number;
  ownerShip: 'First' | 'Second' | 'Third';
  carImg?: string[]; // Array of image URLs
  color?: string;
  seatingCapacity: number;
  price: number;
  engine?: string;
  torque?: string;
  driveType?: 'FWD' | 'RWD' | 'AWD' | '4WD';
  fuelType?: string;
  power?: string;
  mileage?: string;
  description?: string;
  bodyType: string;
  status: string;
}
