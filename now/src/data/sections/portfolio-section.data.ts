import type { PortfolioSection } from '@/types/sections/portfolio-section.types';
import type { ReadonlyDeep } from 'type-fest';
import { demo, github, website } from '../helpers/links';
import {
  react,
  tailwindCss,
  nextJs,
  postman,
  playwright,
  nodeJs,
  excel,
} from '../helpers/skills';

const portfolioSectionData = {
  config: {
    title: 'Proyectos',
    slug: 'projects',
    icon: 'fa6-solid:rocket',
    subtitle: 'Proyectos donde junté desarrollo frontend y testing.',
    visible: true,
    screenshots: {
      title: 'Screenshots',
      icon: 'fa6-solid:images',
    },
  },
  projects: [
    {
      name: 'PhysaFlow',
      details: [
        { label: 'Team', value: 'NoCountry' },
        { label: 'Role', value: 'Frontend Developer' },
      ],
      pdfDetails: [
        { label: 'Demo', value: 'physaflow.com', url: 'https://demo-s07-26-team-04.vercel.app/' },
      ],
      description:
        'Public report on stranded capacity in data centers. Interactive visualizations with academic authority.',
      tagsList: {
        title: 'Technologies',
        tags: [nextJs(), tailwindCss(), react()],
      },
      links: [demo({ url: 'https://demo-s07-26-team-04.vercel.app/' }), github({ url: 'https://github.com/No-Country-simulation/S07-26-Team-04' })],
    },
    {
      name: 'BiT — Panel de Datos Públicos',
      details: [
        { label: 'Team', value: 'NoCountry' },
        { label: 'Role', value: 'Frontend Developer' },
      ],
      pdfDetails: [
        { label: 'Demo', value: 'vercel.app', url: 'https://s06-26-nc-equipo-69-b2g-frontend.vercel.app/' },
      ],
      description:
        'AI-powered app for public managers. Interactive 2D/3D map, RAG chat and PDF reports for digital inequalities.',
      tagsList: {
        title: 'Technologies',
        tags: [react(), tailwindCss(), nodeJs()],
      },
      links: [demo({ url: 'https://s06-26-nc-equipo-69-b2g-frontend.vercel.app/' }), github({ url: 'https://github.com/hevieri/s06-26-nc-equipo-69-b2g' })],
    },
    {
      name: 'Nova-Market',
      details: [
        { label: 'Team', value: 'TalentlyLab' },
        { label: 'Role', value: 'QA Tester' },
      ],
      pdfDetails: [
        { label: 'Demo', value: 'vercel.app', url: 'https://nova-market-g8-i2906-frontend-two.vercel.app/' },
      ],
      description:
        'Functional testing and validation of e-commerce: purchase flow, cart, checkout and forms.',
      tagsList: {
        title: 'Technologies',
        tags: [postman(), playwright(), excel()],
      },
      links: [demo({ url: 'https://nova-market-g8-i2906-frontend-two.vercel.app/' })],
    },
    {
      name: 'uTest',
      details: [
        { label: 'Role', value: 'Tester' },
      ],
      description:
        'Exploratory testing on web and Android apps. Documentation with text and screenshots. Confidential.',
      tagsList: {
        title: 'Technologies',
        tags: [
          { icon: 'simple-icons:windows', name: 'Windows', iconColor: '#0078D4', url: 'https://www.microsoft.com/windows' },
          { icon: 'simple-icons:linux', name: 'Linux', iconColor: '#FCC624', url: 'https://www.linux.org/' },
          { icon: 'simple-icons:android', name: 'Android', iconColor: '#3DDC84', url: 'https://www.android.com/' },
          excel(),
        ],
      },
      links: [website({ url: 'https://www.utest.com/' })],
    },
  ],
} satisfies ReadonlyDeep<PortfolioSection>;

export default portfolioSectionData;
