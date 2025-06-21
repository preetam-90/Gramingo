import React, { useState } from 'react';
import { Listing } from '../data/listings';
import { useTranslation } from 'react-i18next';
import BookingModal from './BookingModal';

interface Props {
  item: Listing;
}

const ListingCard: React.FC<Props> = ({ item }) => {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);

  return (
    <div className="glass-card overflow-hidden transition-transform hover:scale-[1.02]">
      <img src={item.image} alt={item.name} className="h-48 w-full object-cover" />
      <div className="p-4 space-y-2">
        <h3 className="text-lg font-semibold">{item.name}</h3>
        <p className="text-sm text-secondary">{item.location}</p>
        <p className="text-sm">
          ₹{item.pricePerDay.toLocaleString()} / day
        </p>
        <span
          className={`inline-block rounded-full px-2 py-0.5 text-xs ${
            item.available ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
          }`}
        >
          {item.available ? 'Available' : 'Unavailable'}
        </span>
        <button
          disabled={!item.available}
          onClick={() => setOpen(true)}
          className="mt-3 w-full rounded-lg bg-primary py-2 text-center text-white transition-opacity disabled:cursor-not-allowed disabled:opacity-50"
        >
          {t('bookNow')}
        </button>
      </div>
      {open && <BookingModal listing={item} onClose={() => setOpen(false)} />}
    </div>
  );
};

export default ListingCard;