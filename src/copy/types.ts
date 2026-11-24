export type Lang = 'en' | 'fr';

export type Localized<T> = Record<Lang, T>;

export interface Table {
  head: string[];
  rows: string[][];
}

// A section of a legal page. In `items`, "Label :: text" renders the label in bold.
export interface Block {
  id: string;
  title: string;
  paragraphs?: string[];
  table?: Table;
  items?: string[];
  after?: string[];
}

export interface Tldr {
  id: string;
  title: string;
  items: string[];
}

export interface DocCopy {
  documentTitle: string;
  description: string;
  eyebrow: string;
  title: string;
  lead: string;
  tocLabel: string;
  updated: string;
  tldr?: Tldr;
  blocks: Block[];
}
