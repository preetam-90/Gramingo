export type Locale = 'en' | 'hi';

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

export interface Booking {
  listingId: string;
  name: string;
  contact: string;
  date: Date;
}