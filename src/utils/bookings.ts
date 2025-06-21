export interface Booking {
  listingId: string;
  name: string;
  contact: string;
  date: Date;
}

const STORAGE_KEY = 'gramin-go-bookings';

export const getBookings = (): Booking[] => {
  const raw = localStorage.getItem(STORAGE_KEY);
  return raw ? (JSON.parse(raw) as Booking[]) : [];
};

export const addBooking = (booking: Booking) => {
  const existing = getBookings();
  existing.push(booking);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(existing));
};