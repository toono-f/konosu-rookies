// microCMS content types

export interface HeroContent {
  title: string;
  subtitle: string;
  catchphrase: string;
  recruitmentStatus: string;
}

export interface TeamPolicy {
  title: string;
  description: string;
}

export interface AboutContent {
  teamPolicy: TeamPolicy;
  teamNameOrigin: TeamPolicy;
  targetAudience: string[];
}

export interface ActivityDetail {
  label: string;
  value: string;
}

export interface ActivitiesContent {
  description: string;
  details: ActivityDetail[];
  scheduleUrl?: string;
}

export interface JoinStep {
  number: number;
  title: string;
  description: string;
}

export interface JoinContent {
  steps: JoinStep[];
  applicationInfo: string[];
  finalMessage: string;
}

export interface SiteSettings {
  siteName: string;
  siteDescription: string;
  email: string;
  location: string;
  socialLinks: {
    instagram?: string;
    twitter?: string;
    labola?: string;
  };
}

// microCMS API response types
export interface MicroCMSContent<T> {
  id: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
  content: T;
}

export interface MicroCMSListResponse<T> {
  contents: MicroCMSContent<T>[];
  totalCount: number;
  offset: number;
  limit: number;
}
