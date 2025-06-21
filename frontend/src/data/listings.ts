export type Listing = {
  id: string;
  name: string;
  image: string;
  pricePerDay: number;
  location: string;
  available: boolean;
  category: string;
};

export const listings: Listing[] = [
  {
    id: '1',
    name: 'Mahindra 575 DI XP Plus Tractor',
    image: 'https://images.unsplash.com/photo-1558979158-65a1eaa08691?auto=format&fit=crop&w=600&q=60',
    pricePerDay: 2500,
    location: 'Lucknow, UP',
    available: true,
    category: 'Tractor',
  },
  {
    id: '2',
    name: 'New Holland Combine Harvester',
    image: 'https://images.unsplash.com/photo-1605810235971-5ca433a5fe84?auto=format&fit=crop&w=600&q=60',
    pricePerDay: 4500,
    location: 'Nagpur, MH',
    available: false,
    category: 'Harvester',
  },
  {
    id: '3',
    name: 'Kubota Rice Transplanter',
    image: 'https://images.unsplash.com/photo-1576556355338-8c9cb9b6d138?auto=format&fit=crop&w=600&q=60',
    pricePerDay: 1800,
    location: 'Patna, BR',
    available: true,
    category: 'Transplanter',
  },
];