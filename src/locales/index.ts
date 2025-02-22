import { LocalesIdEnum } from '@/config';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { en } from './en';
import { fr } from './fr';

const localeConfig = i18n.createInstance();

localeConfig.use(initReactI18next).init({
  resources: {
    [LocalesIdEnum.EN]: { translation: en },
    [LocalesIdEnum.FR]: { translation: fr },
  },
  lng: LocalesIdEnum.EN,
  fallbackLng: LocalesIdEnum.FR,
});

export default localeConfig;
