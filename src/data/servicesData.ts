export interface ServiceOption {
  id: string;
  name: string;
  price: number;
  description: string;
}

export interface Service {
  id: string;
  name: string;
  category: string;
  icon: string;
  description: string;
  options: ServiceOption[];
  estimatedTime: string;
  availability: string;
}

export const servicesData: Service[] = [
  {
    id: 'car-wash',
    name: 'Car Wash',
    category: 'Cleaning',
    icon: '🚿',
    description: 'Professional car washing services tailored to your needs',
    options: [
      {
        id: 'basic-wash',
        name: 'Basic Wash',
        price: 499,
        description: 'Standard exterior wash with water and soap'
      },
      {
        id: 'premium-wash',
        name: 'Premium Wash',
        price: 799,
        description: 'Exterior and interior cleaning with wax polish'
      },
      {
        id: 'doorstep-wash',
        name: 'Doorstep Wash',
        price: 999,
        description: 'Professional wash service at your location'
      }
    ],
    estimatedTime: '30-45 minutes',
    availability: 'Monday - Sunday, 8 AM - 6 PM'
  },
  {
    id: 'car-repair',
    name: 'Car Repair',
    category: 'Maintenance',
    icon: '🔧',
    description: 'Comprehensive car repair services for all types of issues',
    options: [
      {
        id: 'engine-repair',
        name: 'Engine Repair',
        price: 2999,
        description: 'Engine diagnostics and repair services'
      },
      {
        id: 'electrical-repair',
        name: 'Electrical Repair',
        price: 1999,
        description: 'Electrical system repairs and troubleshooting'
      },
      {
        id: 'mechanical-repair',
        name: 'Mechanical Repair',
        price: 1499,
        description: 'General mechanical repairs and maintenance'
      }
    ],
    estimatedTime: '1-4 hours (depends on issue)',
    availability: 'Monday - Saturday, 9 AM - 5 PM'
  },
  {
    id: 'car-paint',
    name: 'Car Paint',
    category: 'Cosmetics',
    icon: '🎨',
    description: 'Professional car paint services for a fresh look',
    options: [
      {
        id: 'full-body-paint',
        name: 'Full Body Paint',
        price: 4999,
        description: 'Complete car repainting with professional finish'
      },
      {
        id: 'scratch-repair',
        name: 'Scratch Repair',
        price: 999,
        description: 'Professional scratch repair and touch-up'
      }
    ],
    estimatedTime: '2-4 days (full body)',
    availability: 'Monday - Friday, 9 AM - 5 PM'
  },
  {
    id: 'oil-change',
    name: 'Oil Change & Fluid Check',
    category: 'Maintenance',
    icon: '🛢️',
    description: 'Regular oil changes and fluid level checks',
    options: [
      {
        id: 'standard-oil',
        name: 'Standard Oil Change',
        price: 399,
        description: 'Standard oil and filter replacement'
      },
      {
        id: 'premium-oil',
        name: 'Premium Oil Change',
        price: 599,
        description: 'Premium synthetic oil and filter change'
      },
      {
        id: 'fluid-check',
        name: 'Fluid Check',
        price: 199,
        description: 'Comprehensive fluid level and quality check'
      }
    ],
    estimatedTime: '30-45 minutes',
    availability: 'Monday - Sunday, 8 AM - 6 PM'
  },
  {
    id: 'tire-services',
    name: 'Tire Services',
    category: 'Maintenance',
    icon: '🛞',
    description: 'Complete tire care solutions',
    options: [
      {
        id: 'tire-replacement',
        name: 'Tire Replacement',
        price: 1499,
        description: 'Professional tire replacement (per tire)'
      },
      {
        id: 'tire-alignment',
        name: 'Tire Alignment',
        price: 799,
        description: 'Wheel alignment service for better handling'
      },
      {
        id: 'tire-balancing',
        name: 'Tire Balancing',
        price: 499,
        description: 'Wheel balancing for smooth ride'
      }
    ],
    estimatedTime: '1-1.5 hours',
    availability: 'Monday - Sunday, 8 AM - 6 PM'
  },
  {
    id: 'battery-replacement',
    name: 'Battery Replacement',
    category: 'Maintenance',
    icon: '🔋',
    description: 'Battery replacement and maintenance services',
    options: [
      {
        id: 'standard-battery',
        name: 'Standard Battery',
        price: 1999,
        description: 'Standard car battery replacement'
      },
      {
        id: 'premium-battery',
        name: 'Premium Battery',
        price: 2999,
        description: 'High-performance premium battery'
      },
      {
        id: 'battery-test',
        name: 'Battery Test',
        price: 199,
        description: 'Battery health check and diagnostics'
      }
    ],
    estimatedTime: '30-45 minutes',
    availability: 'Monday - Sunday, 8 AM - 6 PM'
  },
  {
    id: 'doorstep-service',
    name: 'Doorstep Servicing',
    category: 'Premium',
    icon: '🏠',
    description: 'We come to you - pickup and drop service',
    options: [
      {
        id: 'pickup-drop',
        name: 'Pickup & Drop',
        price: 399,
        description: 'Vehicle pickup and drop-off service'
      },
      {
        id: 'lounge-access',
        name: 'Premium Lounge',
        price: 599,
        description: 'Complimentary lounge access while we service'
      }
    ],
    estimatedTime: 'Varies by service',
    availability: 'Monday - Sunday, 7 AM - 7 PM'
  },
  {
    id: 'roadside-assistance',
    name: 'Emergency Roadside Assistance',
    category: 'Emergency',
    icon: '🚨',
    description: 'Emergency assistance when you need it most',
    options: [
      {
        id: 'flat-tire',
        name: 'Flat Tire Assistance',
        price: 299,
        description: 'Emergency flat tire repair and assistance'
      },
      {
        id: 'battery-jump',
        name: 'Battery Jump Start',
        price: 199,
        description: 'Emergency battery jump start service'
      },
      {
        id: 'fuel-delivery',
        name: 'Fuel Delivery',
        price: 399,
        description: 'Emergency fuel delivery service'
      }
    ],
    estimatedTime: '20-30 minutes (from location)',
    availability: '24/7 Emergency Support'
  }
];
