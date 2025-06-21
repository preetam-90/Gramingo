import { FC, useState } from 'react';
import { useParams } from 'react-router-dom';
import { listings } from '@/data/listings';
import { useLocale } from '@/contexts/LocaleContext';
import { t } from '@/i18n';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { addBooking } from '@/utils/bookings';

const ListingDetailPage: FC = () => {
  const { id } = useParams();
  const listing = listings.find((l) => l.id === id);
  const { locale } = useLocale();
  const [name, setName] = useState('');
  const [contact, setContact] = useState('');
  const [date, setDate] = useState<Date | null>(null);
  const [submitted, setSubmitted] = useState(false);

  if (!listing) return <p className="p-8">Listing not found.</p>;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!date) return;
    addBooking({ listingId: listing.id, name, contact, date });
    setSubmitted(true);
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="grid md:grid-cols-2 gap-10">
        <img src={listing.image} alt={listing.name} className="w-full h-64 md:h-full object-cover rounded-lg" />
        <div>
          <h2 className="text-3xl font-bold mb-2">{listing.name}</h2>
          <p className="text-primary text-xl font-semibold mb-4">₹{listing.pricePerHour}/hr</p>
          <p className="mb-4 text-gray-700">{listing.description}</p>

          {submitted ? (
            <div className="glass-card p-6">
              <h3 className="text-xl font-semibold mb-2">Thank you!</h3>
              <p>We have received your booking request.</p>
            </div>
          ) : (
            <form className="glass-card p-6 flex flex-col gap-4" onSubmit={handleSubmit}>
              <h3 className="text-xl font-semibold mb-4">{t(locale, 'bookingFormTitle')}</h3>
              <input
                type="text"
                placeholder={t(locale, 'name')}
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="bg-transparent border border-white/30 px-3 py-2 rounded-md backdrop-blur-sm"
              />
              <input
                type="tel"
                placeholder={t(locale, 'contactNumber')}
                value={contact}
                onChange={(e) => setContact(e.target.value)}
                required
                className="bg-transparent border border-white/30 px-3 py-2 rounded-md backdrop-blur-sm"
              />
              <DatePicker
                selected={date}
                onChange={(d: Date | null) => setDate(d)}
                minDate={new Date()}
                placeholderText={t(locale, 'bookingDates')}
                className="bg-transparent border border-white/30 px-3 py-2 rounded-md backdrop-blur-sm w-full"
                dateFormat="dd/MM/yyyy"
                required
              />
              <button type="submit" className="px-4 py-2 bg-primary text-white rounded-md hover:bg-primary-dark">
                {t(locale, 'submit')}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default ListingDetailPage;