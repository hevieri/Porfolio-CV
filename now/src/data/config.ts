import type { Config } from '@/types/data';
import { enUS } from 'date-fns/locale';
import type { ReadonlyDeep } from 'type-fest';

const config = {
  i18n: {
    locale: enUS,
    dateFormat: 'MMMM yyyy',
    translations: {
      now: 'now',
    },
  },
  meta: {
    title: 'Erika Helfenstern - Dev & QA',
    description:
      'Portfolio de Erika Helfenstern. Desarrollo web frontend con React y Tailwind, testing QA manual y automatizado. Experiencia en equipos ágiles.',
    faviconPath: '/src/assets/my-image.jpeg',
  },
  pdf: {},
} as const satisfies ReadonlyDeep<Config>;

export default config;
