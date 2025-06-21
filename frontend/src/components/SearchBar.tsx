import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

interface Props {
  onSearch: (query: string, location: string) => void;
}

const SearchBar: React.FC<Props> = ({ onSearch }) => {
  const { t } = useTranslation();
  const [query, setQuery] = useState('');
  const [location, setLocation] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(query, location);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 sm:flex-row">
      <input
        type="text"
        placeholder={t('searchPlaceholder')}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="flex-1 rounded-lg border border-gray-300 bg-white/60 p-3 backdrop-blur-xs focus:outline-primary"
      />
      <input
        type="text"
        placeholder={t('location')}
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        className="flex-1 rounded-lg border border-gray-300 bg-white/60 p-3 backdrop-blur-xs focus:outline-primary"
      />
      <button
        type="submit"
        className="rounded-lg bg-primary px-6 py-3 text-white hover:opacity-90"
      >
        {t('browse')}
      </button>
    </form>
  );
};

export default SearchBar;