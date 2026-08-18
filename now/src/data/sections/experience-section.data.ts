import type { ExperienceSection } from '@/types/sections/experience-section.types';
import type { ReadonlyDeep } from 'type-fest';
import { linkedin, website } from '../helpers/links';
import {
  react,
  tailwindCss,
  postman,
  git,
  trello,
  playwright,
  mapbox,
  recharts,
  shadcn,
  html5,
  css,
} from '../helpers/skills';

const experienceSectionData = {
  config: {
    title: 'Experiencia',
    slug: 'experience',
    icon: 'fa6-solid:suitcase',
    visible: true,
  },
  jobs: [
    {
      role: 'Frontend Developer',
      company: 'No Country',
      image: import('@/assets/logos/nocountry-logo.jpg'),
      dates: [new Date('2026-05'), null],
      description: `
        - Simulación laboral como Frontend Developer con metodologías ágiles Kanban y Scrum
        - Desarrollo de interfaces con React y Tailwind CSS
        - Coordinación de sprints y code reviews
      `,
      tagsList: {
        title: 'Technologies',
        tags: [react(), tailwindCss(), git(), trello(), mapbox(), recharts(), shadcn()],
      },
      links: [website({ url: 'https://talent.nocountry.tech/dashboard' })],
    },
    {
      role: 'Frontend Developer',
      company: 'TalentlyLab',
      image: import('@/assets/logos/talentlylab-logo.png'),
      dates: [new Date('2026-06'), null],
      description: `
        - Simulación laboral como Frontend Developer con metodologías ágiles Kanban y Scrum
        - Desarrollo de interfaces con React y Tailwind CSS
        - Trabajo en equipo colaborativo
      `,
      tagsList: {
        title: 'Technologies',
        tags: [react(), tailwindCss(), git()],
      },
      links: [website({ url: 'https://talentlylab.com.ar/' })],
    },
    {
      role: 'QA Tester',
      company: 'TalentlyLab',
      image: import('@/assets/logos/talentlylab-logo.png'),
      dates: [new Date('2026-06'), null],
      description: `
        - Simulación laboral como QA Tester con metodologías ágiles Kanban y Scrum
        - Testing de APIs con Postman
        - Reportes de bugs con evidencia
        - Validación de criterios de aceptación en ciclos ágiles
      `,
      tagsList: {
        title: 'Technologies',
        tags: [postman(), playwright(), git(), trello()],
      },
      links: [website({ url: 'https://talentlylab.com.ar/' })],
    },
    {
      role: 'QA Tester',
      company: 'Adopta un Junior',
      image: import('@/assets/logos/adoptaunjunior-logo.png'),
      dates: [new Date('2026-03'), null],
      description: `
        - Simulación laboral como QA Tester con metodologías ágiles Kanban y Scrum
        - Testing funcional en escenarios reales Web y Mobile
        - Reportes de bugs precisos con steps to reproduce
        - Participación en ciclos de prueba colaborativos
      `,
      tagsList: {
        title: 'Technologies',
        tags: [postman(), git(), { name: 'uTest', url: 'https://www.utest.com/' }],
      },
      links: [linkedin({ url: 'https://www.linkedin.com/company/adoptaunjunior/posts/?feedView=all' })],
    },
    {
      role: 'Tester',
      company: 'uTest',
      image: import('@/assets/logos/utest-logo.png'),
      dates: [new Date('2025-08'), null],
      description: `
        - Exploratory testing on web and mobile applications
        - Bug documentation with steps to reproduce
        - Functionality validation in real environments
      `,
      tagsList: {
        title: 'Technologies',
        tags: [
          { icon: 'simple-icons:windows', name: 'Windows', iconColor: '#0078D4', url: 'https://www.microsoft.com/windows' },
          { icon: 'simple-icons:linux', name: 'Linux', iconColor: '#FCC624', url: 'https://www.linux.org/' },
          { icon: 'simple-icons:android', name: 'Android', iconColor: '#3DDC84', url: 'https://www.android.com/' },
        ],
      },
      links: [website({ url: 'https://www.utest.com/' })],
    },
    {
      role: 'Maquetado Web & Marketing Digital',
      company: 'ElRincónDelFriki.net',
      dates: [new Date('2023-01'), new Date('2024-12')],
      description: `
        - Maquetado y gestión integral del sitio web con WordPress
        - Diseño de páginas y contenido
        - SEO on-page y marketing digital
        - Monetización con Google Ads
      `,
      tagsList: {
        title: 'Technologies',
        tags: [
          { icon: 'simple-icons:wordpress', name: 'WordPress', iconColor: '#21759B', url: 'https://wordpress.org/' },
          { icon: 'simple-icons:php', name: 'PHP', iconColor: '#777BB4', url: 'https://www.php.net/' },
          html5(),
          css(),
          { icon: 'fa6-solid:rectangle-ad', name: 'Google AdSense', iconColor: '#4285F4', url: 'https://adsense.google.com/' },
        ],
      },
      links: [],
    },
  ],
} satisfies ReadonlyDeep<ExperienceSection>;

export default experienceSectionData;
