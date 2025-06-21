import React, { useState } from 'react';
import { listings as data } from '../data/listings';
import ListingCard from '../components/ListingCard';
import { useLocale } from '../contexts/LocaleContext';
import { t } from '../i18n';

const uniqueCategories = Array.from(new Set(data.map((l) => l.category)));
const uniqueLocations = Array.from(new Set(data.map((l) => l.location)));

const ListingsPage: React.FC = () => {
  const { locale } = useLocale();
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('All');
  const [location, setLocation] = useState('All');

  const filtered = data.filter((l) => {
    const matchesSearch = l.name.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = category === 'All' || l.category === category;
    const matchesLocation = location === 'All' || l.location === location;
    return matchesSearch && matchesCategory && matchesLocation;
  });

  return (
    <div className="container mx-auto px-4 py-12">
      <h2 className="text-2xl font-bold mb-6">{t(locale, 'browse')}</h2>

      <div className="glass-card p-4 flex flex-col md:flex-row gap-4 mb-8 items-center">
        <input
          type="text"
          placeholder={t(locale, 'searchPlaceholder')}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="flex-1 bg-transparent focus:outline-none px-3 py-2 rounded-md border border-white/30 backdrop-blur-sm"
        />
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="bg-transparent border border-white/30 px-3 py-2 rounded-md backdrop-blur-sm"
        >
          <option>All</option>
          {uniqueCategories.map((c) => (
            <option key={c}>{c}</option>
          ))}
        </select>
        <select
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="bg-transparent border border-white/30 px-3 py-2 rounded-md backdrop-blur-sm"
        >
          <option>All</option>
          {uniqueLocations.map((loc) => (
            <option key={loc}>{loc}</option>
          ))}
        </select>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((listing) => (
          <ListingCard key={listing.id} listing={listing} />
        ))}
        {filtered.length === 0 && (
          <p className="text-gray-600">No listings found.</p>
        )}
      </div>
    </div>
  );
};

export default ListingsPage;