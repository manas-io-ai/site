export type Segment = 'myself' | 'startup' | 'agency' | 'brand';

export interface FunnelFormData {
  segment: Segment | '';
  companyName: string;
  name: string;
  email: string;
  profession: string;
  needs: string;
}

export type FunnelStep = 'segment' | 'details' | 'contact' | 'needs';
