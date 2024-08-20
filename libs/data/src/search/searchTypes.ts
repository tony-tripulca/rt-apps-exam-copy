export type SearchData = {
  found: number;
  hits: SearchHit[];
  out_of: number;
  page: number;
  request_params: SearchRequestParams;
  search_time_ms: number;
};

export type SearchHit = {
  document: SearchDocument;
  highlights: SearchHighlight[];
  text_match: number;
};

export type SearchDocument = {
  flag: string;
  id: string;
  image: string;
  score: number;
  score_sub: number;
  search: string;
  slug: string;
  title: string;
  title_sub: string;
  transfer_value: string;
  type: DocumentType;
};

type DocumentType = 'player' | 'team' | string;

type SearchHighlight = {
  field: Field;
  matched_tokens: string[];
  snippet: string;
};

type Field = 'title' | 'search';

type SearchRequestParams = {
  collection_name: string;
  per_page: number;
  q: string;
};
