export interface IArticleList {
  title: string;
  description: string;
  page: number;
  page_items: number;
  pages: number;
  count: number;
  items: IArticleListItem[];
}

export interface IArticleListItem {
  id: string;
  title: string;
  image: IArticleImage;
  description: string;
  publish_date: IArticleDate;
  publish_date_utc: IArticleDate;
  update_date: IArticleDate | null;
  update_date_utc: IArticleDate | null;
  label: IArticleLabel | null;
}

export interface IArticleImage {
  src: string;
  src_webp: string;
  width: number;
  height: number;
  alt: string;
  caption: string;
  copyright: string;
}

export interface IArticleDate {
  date: string;
  timezone_type: number;
  timezone: string;
}

export interface IArticleLabel {
  id: string;
  title: string;
  description: string;
  slug: string;
  background_color: string;
  font_color: string;
}

export interface IArticle {
  id: string;
  title: string;
  image: IArticleImage;
  author: IArticleAuthor;
  description: string;
  publish_date: IArticleDate;
  publish_date_utc: IArticleDate;
  update_date: IArticleDate | null;
  update_date_utc: IArticleDate | null;
  label: IArticleLabel | null;
  content: string;
  players: unknown;
  teams: unknown;
  tournaments: unknown;
}

export interface IArticleAuthor {
  name: string;
  url: string;
  image: IArticleImage;
}
