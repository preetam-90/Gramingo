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
      featured: 'Featured Equipment',
      available: 'Available',
      unavailable: 'Unavailable',
      noResults: 'No results found.',
      close: 'Close',
      home: 'Home',
      send: 'Send',
      email: 'Email',
      message: 'Message',
      messageSent: 'Message sent!',
      bookingConfirmed: 'Booking confirmed for {{name}}!',
      perDay: '/ day',
      about: 'About',
      contact: 'Contact',
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
      featured: 'विशेष उपकरण',
      available: 'उपलब्ध',
      unavailable: 'अनुपलब्ध',
      noResults: 'कोई परिणाम नहीं मिला।',
      close: 'बंद करें',
      home: 'होम',
      send: 'भेजें',
      email: 'ईमेल',
      message: 'संदेश',
      messageSent: 'संदेश भेजा गया!',
      bookingConfirmed: '{{name}} के लिए बुकिंग की पुष्टि हुई!',
      perDay: '/ दिन',
      about: 'के बारे में',
      contact: 'संपर्क',
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