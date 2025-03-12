import { ReactNode } from 'react';
import { ImageLogoProps } from '../baseComponents/imageLogo/ImageLogo';
/**
 * Represents an item in a work timeline.
 */
export interface WorkTimelineItem {
  /**
   * The date when the work or project started.
   */
  startDate: Date;

  /**
   * The date when the work or project ended. If not present, it might represent ongoing work.
   */
  endDate?: Date;

  /**
   * The title or role for this period of work.
   */
  title: string;

  /**
   * The name of the company or organization.
   */
  companyName: string;

  /**
   * The description of the company or organization.
   */
  companyDescription: string;

  /**
   * URL to the company's website.
   */
  companyUrl?: string;

  /**
   * An optional subtitle for more context.
   */
  subtitle?: string;

  /**
   * A detailed description of the work or project, which can include React components.
   */
  description: string;

  /**
   * List of technologies or tools used during this work period.
   */
  techStack: string[];

  /**
   * Images or logos associated with the company.
   */
  companyImageUrls: Omit<ImageLogoProps, 'alt'>;
}
