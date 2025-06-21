import { FC } from 'react';
import { Link } from 'react-router-dom';
import { useLocale } from '@/contexts/LocaleContext';
import { t } from '@/i18n';

const HomePage: FC = () => {
  const { locale } = useLocale();

  return (
    <section className="container mx-auto px-4 py-12 flex flex-col items-center text-center gap-8">
      <h1 className="text-4xl md:text-6xl font-extrabold max-w-3xl leading-tight">
        {t(locale, 'heroTitle')}
      </h1>
      <p className="text-lg md:text-2xl max-w-2xl text-gray-700">
        {t(locale, 'heroSubtitle')}
      </p>
      <div className="flex gap-6">
        <Link
          to="/listings"
          className="px-6 py-3 rounded-full bg-primary text-white hover:bg-primary-dark transition shadow-lg"
        >
          {t(locale, 'getStarted')}
        </Link>
        <a
          href="#about"
          className="px-6 py-3 rounded-full border border-primary text-primary hover:bg-primary hover:text-white transition"
        >
          {t(locale, 'browse')}
        </a>
      </div>
    </section>
  );
};

export default HomePage;