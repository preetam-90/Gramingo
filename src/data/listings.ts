export interface Listing {
  id: string;
  name: string;
  image: string;
  pricePerHour: number;
  location: string;
  available: boolean;
  category: string;
  description: string;
}

export const listings: Listing[] = [
  {
    id: '1',
    name: 'Mahindra 575 DI Tractor',
    image: '/images/tractor1.jpg',
    pricePerHour: 600,
    location: 'Lucknow, UP',
    available: true,
    category: 'Tractor',
    description: 'A reliable tractor suitable for ploughing and hauling.',
  },
  {
    id: '2',
    name: 'John Deere Harvester',
    image: '/images/harvester1.jpg',
    pricePerHour: 1500,
    location: 'Indore, MP',
    available: false,
    category: 'Harvester',
    description: 'High efficiency combine harvester for wheat and rice.',
  },
  {
    id: '3',
    name: 'Kubota Power Tiller',
    image: '/images/tiller1.jpg',
    pricePerHour: 400,
    location: 'Nashik, MH',
    available: true,
    category: 'Tiller',
    description: 'Compact tiller for small to medium farms.',
  },
];