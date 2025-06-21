import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import SearchBar from '../components/SearchBar';
import { listings as allListings } from '../data/listings';
import ListingCard from '../components/ListingCard';

const Browse: React.FC = () => {
  const { t } = useTranslation();
  const [filtered, setFiltered] = useState(allListings);

  const handleSearch = (query: string, location: string) => {
    const lowerQ = query.toLowerCase();
    const lowerLoc = location.toLowerCase();
    const res = allListings.filter(
      (l) =>
        l.name.toLowerCase().includes(lowerQ) &&
        l.location.toLowerCase().includes(lowerLoc)
    );
    setFiltered(res);
  };

  return (
    <div className="mx-auto max-w-7xl px-4 space-y-6">
      <h1 className="mt-8 text-3xl font-bold">{t('browse')}</h1>
      <SearchBar onSearch={handleSearch} />
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((item) => (
          <ListingCard key={item.id} item={item} />
        ))}
        {filtered.length === 0 && (
          <p className="col-span-full text-center text-secondary">
            {t('noResults')}
          </p>
        )}
      </div>
    </div>
  );
};

export default Browse;