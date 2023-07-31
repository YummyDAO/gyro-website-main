import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

i18n
  // detect user language
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    debug: true,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false // not needed for react as it escapes by default
    },
    resources: {
      en: {
        translation: {
          menu: {
            'what-is-gyro': 'What is Gyro',
            'how-it-works': 'How it Works',
            'how-to-join': 'How to Join',
            'join-community': 'Community'
          },
          hero: {
            heading: 'Join Akido Dex',
            description: 'Custom-built liquidity infrastructure to support builders & generate real yield.',
            'start-app': 'Enter App',
            'buy-gyro': 'Buy AKIDO'
          }
        }
      },
      cn: {
        translation: {
          menu: {
            'what-is-gyro': '什么是 Gyro',
            'how-it-works': '运作方式',
            'how-to-join': '如何加入',
            'join-community': '参与社区'
          }
        }
      }
    }
  })

export default i18n
