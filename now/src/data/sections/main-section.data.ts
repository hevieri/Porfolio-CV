import type { MainSection } from '@/types/sections/main-section.types';
import type { ReadonlyDeep } from 'type-fest';
import { github, linkedin, website } from '../helpers/links';

const mainSectionData = {
  config: {
    icon: 'fa6-solid:user',
    title: 'Profile',
    slug: 'profile',
    visible: true,
  },
  fullName: 'Erika Helfenstern',
  role: 'Dev & QA',
  location: 'Buenos Aires, Argentina',
  details: [
    { label: 'Phone', value: '+54 9 11 6217-8105', url: 'https://wa.me/5491162178105', icon: 'fa6-solid:phone' },
    { label: 'Email', value: 'hevieri.dev@gmail.com', url: 'mailto:hevieri.dev@gmail.com', icon: 'fa6-solid:envelope' },
  ],
  pdfDetails: [
    { label: 'Phone', value: '+54 9 11 6217-8105' },
    { label: 'Email', value: 'hevieri.dev@gmail.com' },
    { label: 'LinkedIn', value: '/in/hevieri', url: 'https://www.linkedin.com/in/hevieri/' },
    { label: 'GitHub', value: '/hevieri', url: 'https://github.com/hevieri' },
  ],
  description:
    'Desarrollo web y testing QA. Me gusta crear interfaces limpias con **React** y **Tailwind**, y asegurar la calidad con testing manual y automatizado. Experiencia en equipos ágiles con **Scrum** y **Kanban**. Never stop learning.',
  action: {
    label: 'Download CV',
    url: '#',
    icon: 'fa6-solid:download',
  },
  links: [
    github({ url: 'https://github.com/hevieri' }),
    linkedin({ url: 'https://www.linkedin.com/in/hevieri/' }),
    website({ name: 'Email', icon: 'fa6-solid:envelope', url: 'mailto:hevieri.dev@gmail.com' }),
    website({ name: 'WhatsApp', icon: 'fa6-brands:whatsapp', url: 'https://wa.me/5491162178105' }),
  ],
} as const satisfies ReadonlyDeep<MainSection>;

export default mainSectionData;
