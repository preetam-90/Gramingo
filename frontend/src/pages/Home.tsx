import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import SearchBar from '../components/SearchBar';
import ListingCard from '../components/ListingCard';
import { listings } from '../data/listings';

const Home: React.FC = () => {
  const { t } = useTranslation();

  const handleSearch = () => {
    // Not implemented for landing; navigate to browse
  };

  return (
    <div className="mx-auto max-w-7xl px-4 space-y-12">
      {/* Hero Section */}
      <section className="mt-8 flex flex-col items-center text-center space-y-6">
        <h1 className="text-4xl sm:text-5xl font-extrabold max-w-2xl">
          {t('welcome')}
        </h1>
        <p className="max-w-xl text-lg text-secondary">
          Book tractors, harvesters, and more – delivered when you need them.
        </p>
        <div className="w-full sm:w-auto">
          <SearchBar onSearch={handleSearch} />
        </div>
        <Link
          to="/browse"
          className="rounded-lg bg-primary px-6 py-3 text-white hover:opacity-90"
        >
          {t('browse')}
        </Link>
      </section>

      {/* Featured Listings */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">{t('featured')}</h2>
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {listings.slice(0, 3).map((item) => (
            <ListingCard key={item.id} item={item} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;