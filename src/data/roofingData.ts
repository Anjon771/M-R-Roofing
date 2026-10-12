import { MaterialOption, ProjectItem, ReviewItem } from '../types/roofing';

export const ROOFING_MATERIALS: MaterialOption[] = [
  {
    id: 'asphalt',
    name: 'GAF Timberline HDZ Architectural Shingles',
    category: 'Residential',
    pricePerSqFt: 5.75,
    lifespan: '30 - 50 Years',
    warrantyYears: 50,
    windRating: 'Infinite Wind (LayerLock™)',
    description: 'America’s #1 selling architectural shingle. Dual-layer composite construction with superior algae resistance and striking dimensional shadow lines.',
    recommendedFor: 'Best overall value for residential homes and storm-prone regions.'
  },
  {
    id: 'metal',
    name: '24-Gauge Standing Seam Architectural Metal',
    category: 'Residential',
    pricePerSqFt: 11.25,
    lifespan: '50 - 70 Years',
    warrantyYears: 50,
    windRating: '140+ MPH Extreme',
    description: 'Concealed fastener interlocking panels with Kynar 500® resin finish. Energy Star cool-roof coating reflecting up to 70% of solar heat gain.',
    recommendedFor: 'Modern architecture, mountain homes, and lifetime zero-maintenance durability.'
  },
  {
    id: 'tile',
    name: 'Spanish Concrete & Clay Barrel Tile',
    category: 'Luxury',
    pricePerSqFt: 13.50,
    lifespan: '50 - 100 Years',
    warrantyYears: 50,
    windRating: '130 MPH Class A',
    description: 'Timeless Mediterranean silhouette offering supreme thermal insulation, Class A fire rating, and unmatched resilience against rot and insect decay.',
    recommendedFor: 'Spanish, Tuscan, and Mediterranean homes with reinforced roof trussing.'
  },
  {
    id: 'tpo',
    name: 'Single-Ply 60-Mil TPO Flat Commercial System',
    category: 'Commercial',
    pricePerSqFt: 7.20,
    lifespan: '25 - 35 Years',
    warrantyYears: 30,
    windRating: '120 MPH Commercial',
    description: 'Heat-welded thermoplastic polyolefin membrane engineered for flat and low-slope roofs. UV-resistant white reflective surface lowers cooling overhead.',
    recommendedFor: 'Commercial buildings, flat additions, multi-family units, and modern flat roofs.'
  },
  {
    id: 'slate',
    name: 'Synthetic Composite Designer Slate',
    category: 'Luxury',
    pricePerSqFt: 15.80,
    lifespan: '75+ Years',
    warrantyYears: 50,
    windRating: '150 MPH Class 4 Impact',
    description: 'Quarried slate aesthetics without the excessive structural weight. Virgin polymer composite engineered to resist severe hail up to 2-inch diameter.',
    recommendedFor: 'Heritage homes, luxury estates, and maximum impact resistance.'
  }
];

export const GALLERY_PROJECTS: ProjectItem[] = [
  {
    id: 'project-1',
    title: 'Highland Crest Craftsman Replacement',
    category: 'residential',
    location: 'Highland Park Estates',
    sqFt: 3400,
    duration: '2 Days',
    material: 'GAF Timberline HDZ Charcoal',
    image: '/src/assets/images/hero_roofing_craft_1791816503559.jpg',
    description: 'Full tear-off of double-layer failing 3-tab shingles, replacement of 4 rotten decking sheets, installation of WeatherWatch ice/water barrier and copper drip edges.',
    highlights: ['Golden Pledge 50-Yr Warranty', 'Seamless Copper Flashing', '130 MPH LayerLock System']
  },
  {
    id: 'project-2',
    title: 'Meridian Tech Innovation Center',
    category: 'commercial',
    location: 'Westlake Commercial Corridor',
    sqFt: 16500,
    duration: '5 Days',
    material: 'Standing Seam Metal & TPO Membrane',
    image: '/src/assets/images/commercial_metal_roof_1791816542456.jpg',
    description: 'Commercial dual-plane design integrating standing seam dark bronze metal canopy with an energy-reflective 60-mil white TPO roof membrane.',
    highlights: ['30-Year NDL Manufacturer Warranty', 'Internal Scupper Drainage', 'Solar-Ready Anchor Fasteners']
  },
  {
    id: 'project-3',
    title: 'Oakridge Storm Recovery & Restyle',
    category: 'restoration',
    location: 'Oakridge Valley',
    sqFt: 2850,
    duration: '1.5 Days',
    material: 'Architectural Shingles (Pewter Gray)',
    image: '/src/assets/images/roof_after_restored_1791816530532.jpg',
    description: 'Comprehensive emergency restoration following golf ball-sized hail storm. M-R Roofing handled direct insurance adjuster coordination and approved 100% replacement.',
    highlights: ['Zero Out-of-Pocket Insurance Claim', 'Cobra Ridge Ventilation Added', 'Class 4 Impact Resistance']
  },
  {
    id: 'project-4',
    title: 'Pinehurst Estate Metal Conversion',
    category: 'metal',
    location: 'Pinehurst Woods',
    sqFt: 4200,
    duration: '3 Days',
    material: '24-Gauge Matte Charcoal Standing Seam',
    image: '/src/assets/images/hero_roofing_craft_1791816503559.jpg',
    description: 'Converted dated cedar shake roof to fire-resistant modern standing seam metal with concealed clips and snow-guard retention brackets.',
    highlights: ['Class A Fire Resistance', '70% Solar Reflectance', '50-Year Non-Fading Finish']
  }
];

export const REVIEWS: ReviewItem[] = [
  {
    id: 'rev-1',
    name: 'Sarah Mitchell',
    role: 'Homeowner',
    location: 'Highland Park, CA',
    projectType: '3,200 sq ft Shingle Replacement',
    rating: 5,
    date: '3 weeks ago',
    quote: 'M-R Roofing finished our complete roof replacement in just under two days. The crew protected our landscaping, ran magnetic sweeps four times so not a single nail remained in the driveway, and the roof looks stunning. Absolute master craftsmen.',
    verified: true
  },
  {
    id: 'rev-2',
    name: 'Marcus Vance',
    role: 'Managing Director, Vantage Real Estate',
    location: 'Westlake Business Park',
    projectType: '18,500 sq ft Commercial TPO',
    rating: 5,
    date: '1 month ago',
    quote: 'We needed a commercial flat roof replacement without disrupting tenant operations. M-R Roofing organized crane lifts on a Saturday and finished on schedule. Their warranty documentation and drone inspection reports were remarkably thorough.',
    verified: true
  },
  {
    id: 'rev-3',
    name: 'Elena Rostova',
    role: 'Homeowner & Interior Designer',
    location: 'Oakridge Glen',
    projectType: 'Emergency Hail Restoration',
    rating: 5,
    date: '2 months ago',
    quote: 'After the severe hail storm, other roofers knocked on doors with vague promises. M-R Roofing sent a licensed project manager with high-res drone footage. They coordinated directly with our insurance adjuster and our claim was approved for full replacement within 48 hours.',
    verified: true
  }
];

export const FAQS = [
  {
    question: 'How much does a new roof cost in 2026?',
    answer: 'Typical residential roof replacements range between $8,500 and $22,000 depending on total square footage, pitch steepness, decking condition, and chosen material. Architectural asphalt shingles cost around $5.50–$7.50/sq ft installed, while standing seam metal ranges from $10.50–$14.00/sq ft. Use our interactive calculator above for an immediate customized estimate.'
  },
  {
    question: 'How do you handle storm damage and insurance claims?',
    answer: 'Our certified roofing inspectors conduct a comprehensive 21-point drone and physical inspection, cataloging shingle granule loss, hail bruising, and flashing damage. We draft an itemized Xactimate® report (the exact standard insurance companies use) and meet your insurance adjuster on-site to ensure all legitimate damage is included.'
  },
  {
    question: 'How long does a roof replacement take once work begins?',
    answer: 'Most single-family residential replacements (up to 3,500 sq ft) are completed in 1 to 2 days. We arrive promptly at 7:00 AM, tarp perimeter landscaping, complete tear-off, inspect and replace damaged decking, lay weather barrier underlayment, and install new shingles by late afternoon.'
  },
  {
    question: 'What warranty is included with M-R Roofing installations?',
    answer: 'As a certified GAF Master Elite® contractor (top 2% in the country), we provide the 50-Year Golden Pledge® warranty. This includes 50 years of non-prorated material protection and 25 years of full workmanship coverage backed directly by the manufacturer, transferable to the next homeowner.'
  },
  {
    question: 'Do you offer flexible financing options?',
    answer: 'Yes! We offer 0% APR financing for up to 18 months, as well as low-monthly payment plans starting at $129/month with no prepayment penalties, subject to credit approval. Quick pre-qualification takes less than 2 minutes without affecting your credit score.'
  }
];
