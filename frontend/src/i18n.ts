import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      welcome: 'Welcome to Gramin Go',
      browse: 'Browse Equipment',
      bookNow: 'Book Now',
      aboutUs: 'About Us',
      contactUs: 'Contact Us',
      searchPlaceholder: 'Search for tractors, harvesters…',
      location: 'Location',
      category: 'Category',
      name: 'Name',
      phone: 'Contact Number',
      bookingDates: 'Booking Dates',
      submit: 'Submit',
    },
  },
  hi: {
    translation: {
      welcome: 'ग्रामीण गो में आपका स्वागत है',
      browse: 'उपकरण देखें',
      bookNow: 'बुक करें',
      aboutUs: 'हमारे बारे में',
      contactUs: 'संपर्क करें',
      searchPlaceholder: 'ट्रैक्टर, हार्वेस्टर खोजें…',
      location: 'स्थान',
      category: 'श्रेणी',
      name: 'नाम',
      phone: 'संपर्क नंबर',
      bookingDates: 'बुकिंग तिथियां',
      submit: 'सबमिट',
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'en',
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;