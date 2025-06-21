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
  {
    id: '4',
    name: 'John Deere Baler',
    image: 'https://images.unsplash.com/photo-1518384401463-d3876163c195?auto=format&fit=crop&w=600&q=60',
    pricePerDay: 3200,
    location: 'Karnal, HR',
    available: true,
    category: 'Baler',
  },
  {
    id: '5',
    name: 'Sonalika 60 RX Sikander Tractor',
    image: 'https://images.unsplash.com/photo-1596568354614-e00a8a28ade0?auto=format&fit=crop&w=600&q=60',
    pricePerDay: 2600,
    location: 'Jaipur, RJ',
    available: false,
    category: 'Tractor',
  },
  {
    id: '6',
    name: 'VST Shakti Power Tiller',
    image: 'https://images.unsplash.com/photo-1595703849790-e915253b4e56?auto=format&fit=crop&w=600&q=60',
    pricePerDay: 900,
    location: 'Coimbatore, TN',
    available: true,
    category: 'Tiller',
  },
];