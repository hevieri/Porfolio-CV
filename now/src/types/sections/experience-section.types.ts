import type { DateRange, LinkButton, Photo, Section, TagsList } from '../shared';

export interface JobPosition {
  /**
   * Title of the position within the company.
   */
  role: string;

  /**
   * Short overview of what you did in this position. You can use markdown syntax.
   */
  description: string;
}

export interface Job {
  /**
   * Your position in the company.
   *
   * When `positions` is provided, [WEB] renders each position separately instead of this value.
   */
  role: string;

  /**
   * [WEB] Split the job into separate positions, each with its own title and description.
   *
   * Useful when you held two roles in the same company at the same time.
   */
  positions?: JobPosition[];

  /**
   * Name of the company.
   */
  company: string;

  /**
   * [WEB] URL that opens when the company name is clicked.
   */
  companyUrl?: string;

  /**
   * [WEB] Logo of the company.
   *
   * **Ratio**: 1:1
   *
   * **Display size**: 56x56px
   */
  image?: Photo;

  /**
   * Date range when you were working in the company.
   */
  dates: DateRange;

  /**
   * A short overview of your job. You can use markdown syntax.
   */
  description: string;

  /**
   * Any information that you want to highlight.
   * We recommend to describe the technologies used in the project.
   */
  tagsList: TagsList;

  /**
   * [WEB] Links related to your job (e.g. production app, company's website, project website).
   */
  links: LinkButton[];
}

export interface ExperienceSection extends Section {
  /**
   * List of your jobs in a chronological order. Start with the most recent one.
   */
  jobs: Job[];
}
