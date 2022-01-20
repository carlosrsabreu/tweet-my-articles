export enum SOURCE {
  dev = "DEV",
  hashnode = "hashnode",
}

export enum VIEWS_MILESTONE {
  hundred = 100,
  two_hundred = 2 * hundred,
  five_hundred = 5 * hundred,
  thousand = 1000,
  two_thousand = 2 * thousand,
  five_thousand = 5 * thousand,
  ten_thousand = 10 * thousand,
}

export enum REACTIONS_MILESTONE {
  ten = 10,
  twenty = 20,
  fifty = 50,
  hundred = 100,
  two_hundred = 2 * hundred,
  five_hundred = 5 * hundred,
}

export interface Article {
  id: number;
  source: SOURCE;
  lastViewsMilestone: string;
  lastReactionsMilestone: string;
  last_tweeted_at: number;
}

export interface DevArticle {
  id: number;
  type_of: string;
  published_timestamp: string;
  title: string;
  description: string;
  published: boolean;
  slug: string;
  url: string;
  comments_count: number;
  public_reactions_count: number;
  page_views_count: number;
  positive_reactions_count: number;
  cover_image: string;
  reading_time_minutes: number;
}
