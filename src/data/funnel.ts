import type { Segment } from '@/types/funnel';

export const CAL_LINK = 'jhillin/30min';

export const segments: { value: Segment; label: string }[] = [
  { value: 'myself', label: 'Myself' },
  { value: 'startup', label: 'My Startup' },
  { value: 'agency', label: 'My Agency' },
  { value: 'brand', label: 'My Brand' },
];
