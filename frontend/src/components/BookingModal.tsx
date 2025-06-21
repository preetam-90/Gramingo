import React, { useState } from 'react';
import { Listing } from '../data/listings';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { useTranslation } from 'react-i18next';

interface Props {
  listing: Listing;
  onClose: () => void;
}

const BookingModal: React.FC<Props> = ({ listing, onClose }) => {
  const { t } = useTranslation();
  const [dateRange, setDateRange] = useState<Date[] | null>(null);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here we would send data to backend.
    alert(`Booking confirmed for ${listing.name}!`);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
      <div className="glass-card max-h-[90vh] w-full max-w-lg overflow-y-auto p-6">
        <h2 className="mb-4 text-xl font-semibold">{listing.name}</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm mb-1" htmlFor="name">
              {t('name')}
            </label>
            <input
              id="name"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full rounded border border-gray-300 bg-white/60 p-2 backdrop-blur-xs focus:outline-primary"
            />
          </div>
          <div>
            <label className="block text-sm mb-1" htmlFor="phone">
              {t('phone')}
            </label>
            <input
              id="phone"
              required
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full rounded border border-gray-300 bg-white/60 p-2 backdrop-blur-xs focus:outline-primary"
            />
          </div>
          <div>
            <p className="mb-1 text-sm">{t('bookingDates')}</p>
            <Calendar
              selectRange
              value={dateRange as any}
              onChange={(val) => setDateRange(val as Date[])}
              className="rounded-lg border border-gray-200 p-2"
            />
          </div>
          <button
            type="submit"
            className="w-full rounded-lg bg-primary py-3 text-white hover:opacity-90"
          >
            {t('submit')}
          </button>
          <button
            type="button"
            onClick={onClose}
            className="w-full rounded-lg border border-red-400 py-2 text-red-600 hover:bg-red-50"
          >
            Close
          </button>
        </form>
      </div>
    </div>
  );
};

export default BookingModal;