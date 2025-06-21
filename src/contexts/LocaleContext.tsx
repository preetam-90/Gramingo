import { createContext, useContext, useState, FC, ReactNode } from 'react';
import { Locale } from '@/types';

interface LocaleContextProps {
  locale: Locale;
  setLocale: (loc: Locale) => void;
}

const LocaleContext = createContext<LocaleContextProps | undefined>(undefined);

interface ProviderProps { children: ReactNode; }

export const LocaleProvider: FC<ProviderProps> = ({ children }) => {
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