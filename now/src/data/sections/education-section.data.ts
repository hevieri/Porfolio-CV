import type { EducationSection } from '@/types/sections/education-section.types';
import type { ReadonlyDeep } from 'type-fest';
import { website } from '../helpers/links';

const educationSectionData = {
  config: {
    title: 'Formación',
    slug: 'education',
    icon: 'fa6-solid:graduation-cap',
    visible: true,
  },
  diplomas: [
    {
      title: 'Desarrollo Web',
      institution: 'Autodidacta + Cursos',
      dates: [new Date('2023.01'), null],
      description: 'Frontend con React, Tailwind, Vue. Backend con Node.js. Metodologías ágiles.',
      links: [website({ url: '#' })],
    },
    {
      title: 'QA Manual',
      institution: 'Talento Tech',
      dates: [new Date('2024.01'), new Date('2024.06')],
      description: 'Testing manual, diseño de casos de prueba, reporte de bugs.',
      links: [website({ url: '#' })],
    },
    {
      title: 'QA Automation',
      institution: 'Talento Tech',
      dates: [new Date('2024.06'), new Date('2024.12')],
      description: 'Automatización con Selenium, Pytest, BDD, API testing.',
      links: [website({ url: '#' })],
    },
    {
      title: 'QA Academy',
      institution: 'Academia QA',
      dates: [new Date('2025.01'), new Date('2025.06')],
      description: 'Carrera completa de QA con enfoque en testing manual y automatizado.',
      links: [website({ url: '#' })],
    },
    {
      title: 'Desarrollo Full Stack',
      institution: 'Technology with Purpose Foundation',
      dates: [new Date('2025.01'), new Date('2025.06')],
      description: 'Desarrollo web full stack con React, Node.js y bases de datos.',
      links: [website({ url: '#' })],
    },
    {
      title: 'QA Manual',
      institution: 'Technology with Purpose Foundation',
      dates: [new Date('2025.01'), new Date('2025.06')],
      description: 'Testing manual, diseño de casos de prueba, reporte de bugs.',
      links: [website({ url: '#' })],
    },
    {
      title: 'QA con IA',
      institution: 'Technology with Purpose Foundation',
      dates: [new Date('2025.01'), new Date('2025.06')],
      description: 'Testing asistido por inteligencia artificial, herramientas de QA con IA.',
      links: [website({ url: '#' })],
    },
    {
      title: 'Diseño Gráfico Digital',
      institution: 'ORT',
      dates: [new Date('2022.01'), new Date('2022.12')],
      description: 'Diseño gráfico digital, Adobe Creative Suite, UI/UX fundamentals.',
      links: [website({ url: '#' })],
    },
  ],
} satisfies ReadonlyDeep<EducationSection>;

export default educationSectionData;
