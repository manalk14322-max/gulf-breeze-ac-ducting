/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { SystemService, Project, CompanyStat, Brand } from './types';

const publicPath = (path: string) => `${import.meta.env.BASE_URL}${path}`;

// Exact generated image asset paths from our image-generation runs
export const ASSET_PATHS = {
  heroChiller: publicPath('assets/images/hero_dubai_chiller_1779714256893.png'),
  aboutTechnicians: publicPath('assets/images/about_technicians_1779714281307.png'),
  aboutDuctwork: publicPath('assets/images/about_ductwork_1779714306648.png'),
  projectOffice: publicPath('assets/images/project_office_1779714329550.png'),
  projectVilla: publicPath('assets/images/project_villa_1779714355444.png'),
  contactPipesBg: publicPath('assets/images/contact_pipes_bg_1779714379116.png'),
  clientPackageUnit: publicPath('assets/client-work/industrial-package-unit-platform.jpeg'),
  clientCeilingDucting: publicPath('assets/client-work/warehouse-ducting-ceiling.jpeg'),
  clientDuctBox: publicPath('assets/client-work/gi-duct-box-fabrication.jpeg'),
  clientHallDucting: publicPath('assets/client-work/ducting-installation-hall.jpeg'),
  clientDuctRepair: publicPath('assets/client-work/duct-repair-access.jpeg'),
  clientIndustrialNetwork: publicPath('assets/client-work/industrial-duct-network.jpeg'),
  clientSiteVideo: publicPath('assets/client-work/site-ducting-video.mp4'),
  
  // High-quality placeholder fallbacks for other gallery items to ensure zero-broken links
  projectWarehouse: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80', // Beautiful modern warehouse with structure
  projectMall: 'https://images.unsplash.com/photo-1519501025264-65ba15a82390?auto=format&fit=crop&w=800&q=80', // modern glowing Abu Dhabi style skyline/mall architecture
  projectHotel: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80', // modern glowing hotel & resort facade
};

export const SERVICES: SystemService[] = [
  {
    id: 'ac-install',
    title: 'AC Installation',
    description: 'Expert sizing and premium installation of energy-efficient central VRF & split systems.',
    longDescription: 'Our certified engineers deliver professional load calculations, duct layouts, and custom central cooling assemblies tailored for premium residential villas, office spaces, and commercial complexes across the UAE.',
    iconName: 'Wrench',
  },
  {
    id: 'hvac-maintenance',
    title: 'HVAC Maintenance',
    description: 'Comprehensive preventative diagnostics, coil cleaning, and precision gas recharging.',
    longDescription: 'Ensure high performance and energy-savings under extreme gulf summers. Includes dual-coil deep sanitation, thermostat recalibration, filter swaps, and electrical integrity analyses.',
    iconName: 'Settings',
  },
  {
    id: 'duct-fab',
    title: 'Duct Fabrication',
    description: 'In-house precision manufacturing of high-quality GI and PI supply air duct systems.',
    longDescription: 'Operating a state-of-the-art sheet metal workshop, we construct bespoke, high-pressure ducts compliant with SMACNA & DW144 standards, raising airflow efficiency while decreasing mechanical transmission noise.',
    iconName: 'Layers',
  },
  {
    id: 'chiller-services',
    title: 'Chiller Services',
    description: 'Specialist maintenance and overhauling of water-cooled and air-cooled industrial chillers.',
    longDescription: 'High-capacity cooling solutions for massive complexes. We maintain water circulation pumps, repair compressor units, clear condensers, and manage digital automation controllers for minimal downtime.',
    iconName: 'Cpu',
  },
  {
    id: 'ventilation',
    title: 'Ventilation Systems',
    description: 'Heavy-duty fresh air induction, kitchen exhaust hoods, and smoke management layout.',
    longDescription: 'Providing vital positive ventilation, extraction designs, carbon scrubbing systems, and fire-rated escape exhaust solutions for industrial factories, hotels, and subterranean parking structures.',
    iconName: 'Wind',
  },
  {
    id: 'air-quality',
    title: 'Air Quality Solutions',
    description: 'High-end HEPA filtration, UV sterilizer integration, and electronic air scrubbers.',
    longDescription: 'Eradicate microdust, volatile compounds, pollen, and airborne organic elements. Essential for commercial high-rises and healthcare zones requiring spotless indoor wellness environments.',
    iconName: 'ShieldAlert',
  },
  {
    id: 'commercial',
    title: 'Commercial Cooling',
    description: 'Design-build HVAC packages for commercial skyscrapers, retail malls, and warehouses.',
    longDescription: 'Complete single-point responsibility. We design complex VRF distribution hubs and cooling towers to cope with intensive operational parameters and peak thermal strain profiles.',
    iconName: 'Building',
  },
  {
    id: 'amc-contracts',
    title: 'AMC Contracts',
    description: 'Tailored Annual Maintenance Contracts featuring 24/7 priority emergency callouts.',
    longDescription: 'Sleep soundly with our customizable commercial, corporate, and private estate Annual Maintenance packages. Enjoy priority dispatching, discounted spare parts, and recurring status audit reports.',
    iconName: 'FileText',
  }
];

export const STATS: CompanyStat[] = [
  {
    value: '10+',
    label: 'Years of Experience',
    description: 'Delivering cooling engineering across Dubai and the Northern Emirates.',
    iconName: 'Calendar'
  },
  {
    value: '1500+',
    label: 'Projects Completed',
    description: 'Successfully commissioned residential villas, corporate offices, and factories.',
    iconName: 'Briefcase'
  },
  {
    value: '100+',
    label: 'Skilled Professionals',
    description: 'Fully certified engineers, duct fabricators, and emergency support technicians.',
    iconName: 'Users'
  },
  {
    value: '100%',
    label: 'Client Satisfaction',
    description: 'Backed by performance guarantees, quick SLAs, and top quality spare brand sourcing.',
    iconName: 'CheckCircle'
  }
];

export const PROJECTS: Project[] = [
  {
    id: 'proj-1',
    title: 'Package Unit Platform',
    location: 'Sharjah Sajaa Industrial Area',
    category: 'Industrial',
    image: ASSET_PATHS.clientPackageUnit,
  },
  {
    id: 'proj-2',
    title: 'Warehouse Ducting Network',
    location: 'Sharjah, UAE',
    category: 'Industrial',
    image: ASSET_PATHS.clientCeilingDucting,
  },
  {
    id: 'proj-3',
    title: 'GI Duct Fabrication',
    location: 'UAE Workshop Site',
    category: 'Industrial',
    image: ASSET_PATHS.clientDuctBox,
  },
  {
    id: 'proj-4',
    title: 'Industrial Hall Ducting',
    location: 'UAE Industrial Facility',
    category: 'Commercial',
    image: ASSET_PATHS.clientHallDucting,
  },
  {
    id: 'proj-5',
    title: 'Duct Repair & Access Work',
    location: 'UAE Facility Site',
    category: 'Commercial',
    image: ASSET_PATHS.clientDuctRepair,
  },
  {
    id: 'proj-6',
    title: 'Installed Duct Network',
    location: 'UAE Warehouse Site',
    category: 'Industrial',
    image: ASSET_PATHS.clientIndustrialNetwork,
  },
];

export const CLIENT_WORK_MEDIA = {
  video: ASSET_PATHS.clientSiteVideo,
  poster: ASSET_PATHS.clientPackageUnit,
};

export const BRANDS: Brand[] = [
  { name: 'DAIKIN' },
  { name: 'LG' },
  { name: 'Carrier' },
  { name: 'SAMSUNG' },
  { name: 'GREE' },
  { name: 'MITSUBISHI ELECTRIC' },
  { name: 'TRANE' },
  { name: 'YORK' }
];

export const FAQS = [
  {
    question: 'How often should a commercial AC system undergo maintenance in the Gulf?',
    answer: 'Due to elevated outdoor ambient temperatures and heavy sand load in the UAE, we recommend a dynamic maintenance program consisting of basic coil washes quarterly and dual deep cleaning twice a year.'
  },
  {
    question: 'What energy efficiency ratings do you supply?',
    answer: 'All our VRF and Churn compressor installations come with high ESMA star energy indicators, providing up to 35% savings in electrical billings compared to legacy low-rating cooling assemblies.'
  },
  {
    question: 'Are your emergency HVAC technicians available 24/7?',
    answer: 'Yes! We run dedicated round-the-clock emergency callout lines across Dubai, Sharjah, and Abu Dhabi for active Annual Maintenance Contract (AMC) subscribers.'
  }
];
