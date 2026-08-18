import type { SkillsSection } from '@/types/sections/skills-section.types';
import type { ReadonlyDeep } from 'type-fest';
import {
  react,
  tailwindCss,
  javascript,
  typescript,
  nodeJs,
  python,
  jest,
  cypress,
  playwright,
  postman,
  git,
  docker,
  linux,
  jira,
  trello,
  html5,
  css,
  vue,
  nextJs,
  mapbox,
  recharts,
  shadcn,
  sql,
} from '../helpers/skills';

const skillsSectionData = {
  config: {
    title: 'Skills',
    slug: 'skills',
    icon: 'fa6-solid:bars-progress',
    visible: true,
  },
  skillSets: [
    {
      title: 'QA',
      skills: [
        playwright({ level: 4 }),
        postman({ level: 4 }),
        { icon: 'simple-icons:selenium', name: 'Selenium', iconColor: '#43B02A', url: 'https://www.selenium.dev/', level: 3 },
        cypress({ level: 3 }),
        jest({ level: 3 }),
        { icon: 'simple-icons:pytest', name: 'Pytest', iconColor: '#0A9EDC', url: 'https://docs.pytest.org/', level: 3 },
        { icon: 'fa6-solid:clipboard-check', name: 'Test Cases', iconColor: '#3B82F6', url: '#' },
        { icon: 'fa6-solid:bug', name: 'Bug Reports', iconColor: '#EF4444', url: '#' },
      ],
    },
    {
      title: 'Frontend',
      skills: [
        javascript({ level: 4 }),
        typescript({ level: 3 }),
        html5({ level: 5 }),
        css({ level: 4 }),
        react({ level: 4 }),
        vue({ level: 3 }),
        nextJs({ level: 3 }),
        tailwindCss({ level: 4 }),
        { icon: 'simple-icons:bootstrap', name: 'Bootstrap', iconColor: '#7952B3', url: 'https://getbootstrap.com/', level: 3 },
        { icon: 'simple-icons:jquery', name: 'jQuery', iconColor: '#0769AD', url: 'https://jquery.com/', level: 3 },
        shadcn({ level: 3 }),
        recharts({ level: 3 }),
        mapbox({ level: 3 }),
      ],
    },
    {
      title: 'Back',
      skills: [
        python({ level: 3 }),
        { icon: 'simple-icons:php', name: 'PHP', iconColor: '#777BB4', url: 'https://www.php.net/', level: 3 },
        nodeJs({ level: 3 }),
        sql({ level: 3 }),
      ],
    },
    {
      title: 'Tools',
      skills: [
        git({ level: 4 }),
        { icon: 'fa6-brands:github', name: 'GitHub', iconColor: '#FFFFFF', url: 'https://github.com/', level: 4 },
        docker({ level: 2 }),
        linux({ level: 3 }),
        { icon: 'simple-icons:xampp', name: 'XAMPP', iconColor: '#FB7A24', url: 'https://www.apachefriends.org/', level: 3 },
        { icon: 'simple-icons:vercel', name: 'Vercel', iconColor: '#FFFFFF', url: 'https://vercel.com/', level: 3 },
        jira({ level: 4 }),
        trello({ level: 4 }),
      ],
    },
    {
      title: 'Agile',
      skills: [
        { icon: 'fa6-solid:arrows-rotate', name: 'Scrum', iconColor: '#0079BF', url: '#' },
        { icon: 'fa6-solid:columns', name: 'Kanban', iconColor: '#0079BF', url: '#' },
      ],
    },
    {
      title: 'Idiomas',
      skills: [
        { icon: 'circle-flags:ar', name: 'Español - Nativo' },
        { icon: 'circle-flags:us', name: 'Inglés - B2' },
      ],
    },
  ],
} as const satisfies ReadonlyDeep<SkillsSection>;

export default skillsSectionData;
