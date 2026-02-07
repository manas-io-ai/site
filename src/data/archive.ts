import { ArchiveProject } from '@/types';

// Generate 76 archive items with placeholder data
const categories = ['Brand', 'Web', 'Motion', '3D', 'UI/UX', 'Art Direction', 'Identity', 'Campaign'];
const names = [
  'Meridian', 'Flux', 'Apex', 'Nova', 'Drift', 'Pulse', 'Vertex', 'Zenith',
  'Ember', 'Prism', 'Orbit', 'Cipher', 'Atlas', 'Veil', 'Forge', 'Echo',
  'Rune', 'Helix', 'Tide', 'Spark', 'Bloom', 'Shade', 'Vector', 'Phase',
  'Aura', 'Nexus', 'Grid', 'Tone', 'Core', 'Edge', 'Loop', 'Wave',
  'Base', 'Node', 'Link', 'Bolt', 'Arch', 'Stem', 'Void', 'Glow',
  'Shard', 'Frost', 'Blaze', 'Dusk', 'Haze', 'Mist', 'Stone', 'Cloud',
  'Steel', 'Glass', 'Silk', 'Iron', 'Copper', 'Silver', 'Gold', 'Pearl',
  'Ivory', 'Onyx', 'Jade', 'Ruby', 'Opal', 'Quartz', 'Amber', 'Coral',
  'Sage', 'Moss', 'Clay', 'Sand', 'Slate', 'Ash', 'Ink', 'Lux',
  'Zen', 'Sol', 'Luna', 'Terra',
];

export const archiveProjects: ArchiveProject[] = names.map((name, i) => ({
  id: `archive-${i + 1}`,
  name,
  thumbnail: `/images/archive/archive-${(i % 20) + 1}.jpg`,
  category: categories[i % categories.length],
  year: `${2020 + (i % 6)}`,
}));
