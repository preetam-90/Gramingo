import React, { createContext, useContext, useState } from 'react';
import { Locale } from '../i18n';

interface LocaleContextProps {
  locale: Locale;
  setLocale: (loc: Locale) => void;
}

const LocaleContext = createContext<LocaleContextProps | undefined>(undefined);

export const LocaleProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [locale, setLocale] = useState<Locale>('en');
  return (
    <LocaleContext.Provider value={{ locale, setLocale }}>
      {children}
    </LocaleContext.Provider>
  );
};

export const useLocale = () => {
  const ctx = useContext(LocaleContext);
  if (!ctx) throw new Error('LocaleContext not found');
  return ctx;
};