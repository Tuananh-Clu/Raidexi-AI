
export interface PartnerImage {
  src: string;
  alt: string;
}

export type GridItem = PartnerImage | { type: 'join' };