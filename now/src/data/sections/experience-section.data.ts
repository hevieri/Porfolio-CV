import type { ExperienceSection } from '@/types/sections/experience-section.types';
import type { ReadonlyDeep } from 'type-fest';
import { linkedin, website } from '../helpers/links';
import {
  react,
  tailwindCss,
  postman,
  git,
  trello,
  jira,
  excel,
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
    subtitle: 'Dónde apliqué todo esto en la práctica, en equipos ágiles y proyectos reales.',
    visible: true,
  },
  jobs: [
    {
      role: 'Frontend Developer',
      company: 'No Country',
      companyUrl: 'https://www.nocountry.tech/',
      image: import('@/assets/logos/nocountry-logo.jpg'),
      dates: [new Date('2026-05'), null],
      description: `
        - Simulación laboral como Frontend Developer con metodologías ágiles Kanban y Scrum
        - Desarrollo de interfaces con React y Tailwind CSS
        - Coordinación de sprints y code reviews
      `,
      tagsList: {
        title: 'Technologies',
        tags: [react(), tailwindCss(), git(), jira(), trello(), mapbox(), recharts(), shadcn()],
      },
      links: [website({ url: 'https://talent.nocountry.tech/dashboard' })],
    },
    {
      role: 'Frontend Developer & QA Tester',
      company: 'TalentlyLab',
      companyUrl: 'https://talentlylab.com.ar/',
      image: import('@/assets/logos/talentlylab-logo.png'),
      dates: [new Date('2026-06'), null],
      positions: [
        {
          role: 'Frontend Developer',
          description: `
            - Simulación laboral como Frontend Developer con metodologías ágiles Kanban y Scrum
            - Desarrollo de interfaces con React y Tailwind CSS
            - Trabajo en equipo colaborativo
          `,
        },
        {
          role: 'QA Tester',
          description: `
            - Testing de APIs con Postman
            - Reportes de bugs con evidencia y pasos para reproducir
            - Validación de criterios de aceptación en ciclos ágiles
          `,
        },
      ],
      description: `
        - Simulación laboral con metodologías ágiles Kanban y Scrum
        - Desarrollo de interfaces con React y Tailwind CSS
        - Testing de APIs con Postman y reportes de bugs con evidencia
      `,
      tagsList: {
        title: 'Technologies',
        tags: [react(), tailwindCss(), git(), jira(), trello(), postman(), playwright(), excel()],
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
        tags: [postman(), git(), excel(), { name: 'uTest', url: 'https://www.utest.com/' }],
      },
      links: [linkedin({ url: 'https://www.linkedin.com/company/adoptaunjunior/posts/?feedView=all' })],
    },
    {
      role: 'Tester',
      company: 'uTest',
      companyUrl: 'https://www.utest.com/',
      image: import('@/assets/logos/utest-logo.png'),
      dates: [new Date('2025-08'), new Date('2026-08')],
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
          excel(),
        ],
      },
      links: [website({ url: 'https://www.utest.com/' })],
    },
    {
      role: 'Maquetado Web & Marketing Digital',
      company: 'ElRincónDelFriki.net',
      companyUrl: 'https://web.archive.org/web/20180317134754/http://elrincondelfriki.net/',
      image: import('@/assets/logos/rincondelfriki-logo.png'),
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
      links: [website({ url: 'https://web.archive.org/web/20180317134754/http://elrincondelfriki.net/' })],
    },
  ],
} satisfies ReadonlyDeep<ExperienceSection>;

export default experienceSectionData;
