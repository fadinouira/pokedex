import { LocalesIdEnum } from '@/config';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { en } from './en';
import { fr } from './fr';

i18n.use(initReactI18next).init({
  resources: {
    en,
    fr,
  },
  lng: LocalesIdEnum.EN,
  fallbackLng: LocalesIdEnum.FR,

  interpolation: {
    escapeValue: false,
  },
});
