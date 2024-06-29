export type CategoryType = {
  id: string;
  title: string;
};

export type SeriesType = {
  id: string;
  title: string;
};

export type TagType = string;

export type LanguageType = {
  id: string;
  title: string;
};

export type IsPublicType = {
  value: boolean;
  title: string;
};

export type EditorType = 'Editor' | 'Markdown';
