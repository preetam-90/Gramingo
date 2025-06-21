import React from 'react';
import { useTranslation } from 'react-i18next';

const About: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div className="mx-auto max-w-4xl px-4 space-y-6">
      <h1 className="mt-8 text-3xl font-bold">{t('aboutUs')}</h1>
      <p>{t('aboutP1')}</p>
      <p>{t('aboutP2')}</p>
    </div>
  );
};

export default About;