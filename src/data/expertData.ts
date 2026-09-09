export type ExpertDiscipline = 'Repair' | 'Diagnostics' | 'Body & Paint' | 'Design' | 'Roadside';

export interface ExpertProfile {
  id: string;
  name: string;
  role: string;
  discipline: ExpertDiscipline;
  specialty: string;
  experience: string;
  certifications: string[];
  bio: string;
  contactPhone?: string;
  startingCharge: number;
  rating: number;
  reviewCount: number;
  review: string;
  performance: {
    completedJobs: number;
    responseTime: string;
    repeatCustomerRate: string;
  };
}

const expertSeeds = [
  { id: 'engine-specialist', name: 'Arif Rahman', role: 'Senior Engine Specialist', discipline: 'Repair', specialty: 'Engine overhaul and performance tuning', experience: '12 years', certifications: ['ASE Engine Performance', 'Toyota Hybrid Systems'], bio: 'Leads complex engine inspections, rebuilds, and preventive maintenance plans.' },
  { id: 'transmission-specialist', name: 'Nabil Hossain', role: 'Transmission Specialist', discipline: 'Repair', specialty: 'Automatic and CVT transmission repair', experience: '10 years', certifications: ['CVT Diagnostics', 'Aisin Transmission Training'], bio: 'Diagnoses shifting problems and restores smooth, reliable transmission performance.' },
  { id: 'brake-specialist', name: 'Sadia Karim', role: 'Brake Systems Technician', discipline: 'Repair', specialty: 'Disc, drum, ABS, and brake hydraulics', experience: '8 years', certifications: ['Bosch Brake Systems', 'ABS Service Level 2'], bio: 'Focuses on safe braking systems, pad and rotor service, and ABS fault repair.' },
  { id: 'suspension-specialist', name: 'Tanvir Ahmed', role: 'Suspension Technician', discipline: 'Repair', specialty: 'Shock absorbers, steering, and wheel alignment', experience: '9 years', certifications: ['Hunter Alignment', 'Suspension Geometry'], bio: 'Improves ride quality and handling through precise suspension inspections.' },
  { id: 'ac-specialist', name: 'Maliha Sultana', role: 'Climate Control Technician', discipline: 'Repair', specialty: 'AC compressors, cooling, and cabin climate systems', experience: '7 years', certifications: ['Denso Climate Systems', 'Refrigerant Handling'], bio: 'Keeps cabin comfort systems efficient, leak-free, and ready for demanding weather.' },
  { id: 'battery-specialist', name: 'Rafiul Islam', role: 'Battery and Charging Technician', discipline: 'Repair', specialty: 'Batteries, alternators, and starting systems', experience: '8 years', certifications: ['Battery Management', 'AGM and EFB Systems'], bio: 'Handles no-start issues, charging faults, battery tests, and replacement planning.' },
  { id: 'tire-specialist', name: 'Shuvo Das', role: 'Tire and Wheel Technician', discipline: 'Repair', specialty: 'Tire fitting, balancing, and TPMS', experience: '6 years', certifications: ['Michelin Tire Care', 'TPMS Programming'], bio: 'Keeps tires correctly fitted, balanced, and ready for safe daily driving.' },
  { id: 'diesel-specialist', name: 'Imran Kabir', role: 'Diesel Systems Technician', discipline: 'Repair', specialty: 'Diesel injection and turbo systems', experience: '11 years', certifications: ['Common Rail Diesel', 'Bosch Injection Systems'], bio: 'Works on diesel fuel delivery, turbocharging, smoke issues, and efficiency.' },
  { id: 'hybrid-specialist', name: 'Nusrat Jahan', role: 'Hybrid Vehicle Technician', discipline: 'Repair', specialty: 'Hybrid batteries, inverters, and motor systems', experience: '9 years', certifications: ['Toyota Hybrid Safety', 'High-Voltage Vehicle Safety'], bio: 'Provides safety-first diagnosis for hybrid powertrains and high-voltage components.' },
  { id: 'ev-specialist', name: 'Fahim Chowdhury', role: 'EV Service Technician', discipline: 'Repair', specialty: 'EV charging and electric drivetrain systems', experience: '5 years', certifications: ['EV High Voltage Level 2', 'Charging Equipment Service'], bio: 'Supports modern electric vehicles with careful electrical testing and service.' },
  { id: 'electrical-diagnostic', name: 'Mehedi Hasan', role: 'Automotive Electrician', discipline: 'Diagnostics', specialty: 'Wiring, sensors, and electrical fault tracing', experience: '10 years', certifications: ['Automotive Electrical Level 3', 'CAN Bus Fundamentals'], bio: 'Traces difficult electrical faults and repairs wiring without guesswork.' },
  { id: 'scan-diagnostic', name: 'Jannatul Ferdous', role: 'Diagnostic Lead', discipline: 'Diagnostics', specialty: 'OBD scanning and fault-code analysis', experience: '8 years', certifications: ['Autel Advanced Diagnostics', 'OBD-II Systems'], bio: 'Turns warning lights and scan data into clear repair recommendations.' },
  { id: 'adas-specialist', name: 'Omar Faruk', role: 'ADAS Calibration Specialist', discipline: 'Diagnostics', specialty: 'Camera, radar, and driver-assistance calibration', experience: '6 years', certifications: ['ADAS Calibration', 'Post-Repair Safety Checks'], bio: 'Calibrates safety sensors after glass, bumper, suspension, and collision work.' },
  { id: 'inspector', name: 'Mou Rani', role: 'Vehicle Inspection Expert', discipline: 'Diagnostics', specialty: 'Pre-purchase and condition inspections', experience: '9 years', certifications: ['Used Vehicle Inspection', 'Roadworthiness Assessment'], bio: 'Creates structured inspection reports for cars being bought, sold, or reserved.' },
  { id: 'noise-vibration', name: 'Sakib Ahmed', role: 'NVH Diagnostic Technician', discipline: 'Diagnostics', specialty: 'Noise, vibration, and harshness diagnosis', experience: '8 years', certifications: ['NVH Troubleshooting', 'Chassis Diagnostics'], bio: 'Finds the source of difficult rattles, vibration, wind noise, and road harshness.' },
  { id: 'collision-repair', name: 'Rashedul Haque', role: 'Collision Repair Specialist', discipline: 'Body & Paint', specialty: 'Frame alignment and accident repair', experience: '14 years', certifications: ['I-CAR Collision Repair', 'Frame Measurement'], bio: 'Restores body structure and panel alignment after collisions.' },
  { id: 'body-panel', name: 'Ayesha Akter', role: 'Body Panel Technician', discipline: 'Body & Paint', specialty: 'Dent removal and panel replacement', experience: '8 years', certifications: ['Paintless Dent Repair', 'Panel Fitment'], bio: 'Repairs dents and restores clean panel gaps with careful finishing.' },
  { id: 'paint-matcher', name: 'Kamal Uddin', role: 'Paint and Color Matching Expert', discipline: 'Body & Paint', specialty: 'OEM color matching and refinishing', experience: '13 years', certifications: ['PPG Refinishing', 'Color Spectrophotometry'], bio: 'Matches factory colors and blends repairs into the surrounding finish.' },
  { id: 'paint-prep', name: 'Tania Sultana', role: 'Paint Preparation Technician', discipline: 'Body & Paint', specialty: 'Sanding, priming, and surface preparation', experience: '7 years', certifications: ['Refinish Surface Prep', 'Paint Booth Safety'], bio: 'Prepares surfaces for durable, smooth, and consistent refinishing.' },
  { id: 'detailing', name: 'Rayhan Kabir', role: 'Detailing Specialist', discipline: 'Body & Paint', specialty: 'Interior restoration and paint correction', experience: '7 years', certifications: ['Ceramic Coating', 'Interior Restoration'], bio: 'Revives vehicle interiors and paintwork with disciplined detailing processes.' },
  { id: 'glass-specialist', name: 'Sumi Rahman', role: 'Auto Glass Technician', discipline: 'Body & Paint', specialty: 'Windshield replacement and ADAS-safe glass work', experience: '6 years', certifications: ['Auto Glass Safety', 'ADAS Glass Replacement'], bio: 'Installs vehicle glass carefully while protecting seals and camera systems.' },
  { id: 'fabrication', name: 'Nayeem Hasan', role: 'Custom Fabrication Technician', discipline: 'Design', specialty: 'Metal fabrication and custom brackets', experience: '10 years', certifications: ['MIG and TIG Welding', 'Automotive Fabrication'], bio: 'Builds strong, practical custom components for restoration and modification work.' },
  { id: 'exterior-designer', name: 'Farzana Yasmin', role: 'Exterior Design Consultant', discipline: 'Design', specialty: 'Body kits, stance, and exterior styling', experience: '8 years', certifications: ['Automotive Design Studio', '3D Surface Modeling'], bio: 'Turns styling ideas into balanced, road-ready exterior design proposals.' },
  { id: 'interior-designer', name: 'Sabbir Ahmed', role: 'Automotive Interior Designer', discipline: 'Design', specialty: 'Cabin layout, upholstery, and comfort upgrades', experience: '9 years', certifications: ['Automotive Trim Design', 'Material Selection'], bio: 'Designs practical interior refreshes that balance comfort, durability, and style.' },
  { id: 'wrap-specialist', name: 'Lamia Islam', role: 'Wrap and Graphics Specialist', discipline: 'Design', specialty: 'Vehicle wraps, decals, and brand graphics', experience: '6 years', certifications: ['3M Vehicle Graphics', 'Wrap Installation'], bio: 'Creates clean, removable visual transformations for personal and commercial vehicles.' },
  { id: 'lighting-designer', name: 'Adnan Karim', role: 'Automotive Lighting Designer', discipline: 'Design', specialty: 'Headlamp upgrades and ambient lighting', experience: '7 years', certifications: ['LED Retrofit Safety', '12V Lighting Systems'], bio: 'Designs tasteful lighting upgrades while keeping wiring and beam alignment safe.' },
  { id: 'restoration-designer', name: 'Mithila Noor', role: 'Classic Car Restoration Designer', discipline: 'Design', specialty: 'Originality-focused restoration planning', experience: '12 years', certifications: ['Classic Vehicle Restoration', 'Trim and Finish Research'], bio: 'Plans restorations that respect a vehicle’s original character and period details.' },
  { id: 'roadside-lead', name: 'Hasan Mahmud', role: 'Roadside Response Lead', discipline: 'Roadside', specialty: 'Breakdown support, towing, and recovery', experience: '11 years', certifications: ['Emergency Vehicle Recovery', 'Roadside Safety'], bio: 'Coordinates safe roadside assistance for no-starts, flat tires, and recovery calls.' },
  { id: 'mobile-technician', name: 'Riya Kabir', role: 'Mobile Service Technician', discipline: 'Roadside', specialty: 'Doorstep diagnostics and minor repairs', experience: '7 years', certifications: ['Mobile Workshop Safety', 'Field Diagnostics'], bio: 'Brings essential tools and practical repairs to customers at their location.' },
  { id: 'service-advisor', name: 'Nafisa Ahmed', role: 'Service Planning Advisor', discipline: 'Roadside', specialty: 'Repair estimates and maintenance planning', experience: '8 years', certifications: ['Service Estimation', 'Customer Care Operations'], bio: 'Connects customer concerns with clear work scopes, timelines, and service options.' },
] satisfies Omit<ExpertProfile, 'startingCharge' | 'rating' | 'reviewCount' | 'review' | 'performance'>[];

const startingCharges: Record<ExpertDiscipline, number> = {
  Repair: 800,
  Diagnostics: 1000,
  'Body & Paint': 1200,
  Design: 1500,
  Roadside: 600,
};

const reviewTemplates: Record<ExpertDiscipline, string> = {
  Repair: 'Customers value the careful inspection and clear repair estimate before work begins.',
  Diagnostics: 'Customers appreciate the clear fault explanation and evidence-based recommendations.',
  'Body & Paint': 'Customers highlight the clean finish, attention to detail, and accurate delivery updates.',
  Design: 'Customers appreciate practical design options that balance appearance, safety, and budget.',
  Roadside: 'Customers value the calm communication and fast response when they are stuck on the road.',
};

export const expertProfiles: ExpertProfile[] = expertSeeds.map((expert, index) => ({
  ...expert,
  startingCharge: startingCharges[expert.discipline] + (index % 4) * 250,
  rating: Number((4.6 + (index % 4) * 0.1).toFixed(1)),
  reviewCount: 24 + index * 7,
  review: reviewTemplates[expert.discipline],
  performance: {
    completedJobs: 120 + index * 13,
    responseTime: index % 3 === 0 ? 'Under 30 minutes' : index % 3 === 1 ? 'Under 1 hour' : 'Same-day response',
    repeatCustomerRate: `${72 + (index % 6) * 3}%`,
  },
}));

export const getExpertProfile = (id: string | undefined) => expertProfiles.find((expert) => expert.id === id);