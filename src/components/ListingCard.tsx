import { FC } from 'react';
import { Link } from 'react-router-dom';
import type { Listing } from '@/types';
import { useLocale } from '@/contexts/LocaleContext';
import { t } from '@/i18n';

interface Props {
  listing: Listing;
}

export const ListingCard: FC<Props> = ({ listing }) => {
  const { locale } = useLocale();

  return (
    <div className="glass-card overflow-hidden hover:shadow-lg transition-shadow">
      <img src={listing.image} alt={listing.name} className="h-48 w-full object-cover" />
      <div className="p-4 flex flex-col gap-2">
        <h3 className="text-lg font-semibold">{listing.name}</h3>
        <p className="text-primary font-bold">
          ₹{listing.pricePerHour}/hr
        </p>
        <p className="text-sm text-gray-600">{listing.location}</p>
        <span
          className={`inline-block px-3 py-1 text-xs rounded-full w-max ${listing.available ? 'bg-primary/20 text-primary' : 'bg-red-200 text-red-700'}`}
        >
          {listing.available ? t(locale, 'available') : t(locale, 'notAvailable')}
        </span>
        <Link
          to={`/listings/${listing.id}`}
          className="mt-3 inline-block text-center px-4 py-2 bg-primary text-white rounded-md hover:bg-primary-dark transition"
        >
          {t(locale, 'bookNow')}
        </Link>
      </div>
    </div>
  );
};