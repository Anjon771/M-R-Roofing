export type RoofingMaterial = 'asphalt' | 'metal' | 'tile' | 'tpo' | 'slate';

export type RoofPitch = 'standard' | 'steep' | 'complex';

export interface MaterialOption {
  id: RoofingMaterial;
  name: string;
  category: 'Residential' | 'Commercial' | 'Luxury';
  pricePerSqFt: number;
  lifespan: string;
  warrantyYears: number;
  windRating: string;
  description: string;
  recommendedFor: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  category: 'residential' | 'commercial' | 'metal' | 'restoration';
  location: string;
  sqFt: number;
  duration: string;
  material: string;
  image: string;
  description: string;
  highlights: string[];
}

export interface ReviewItem {
  id: string;
  name: string;
  role: string;
  location: string;
  projectType: string;
  rating: number;
  date: string;
  quote: string;
  verified: boolean;
}

export interface EstimateBookingData {
  fullName: string;
  phone: string;
  email: string;
  address: string;
  serviceType: string;
  approxSqFt?: string;
  preferredDate: string;
  preferredTime: string;
  notes: string;
}
