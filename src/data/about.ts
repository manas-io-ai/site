export interface Belief {
  number: string;
  title: string;
  body: string;
}

export const bio = [
  'Manas AI is a Los Angeles based AI agency & studio. We partner with startups, brands, and agencies to design and deploy fluid intelligence strategies and products engineered to evolve with the pace of AI.',
  'Founded in 2025 by Joseph Hillin, Manas stands on eight core beliefs that define advantage in the midst of the coming displacement:',
];

export const beliefs: Belief[] = [
  {
    number: '01',
    title: 'On Taste',
    body: 'As generative tools commoditize production, the differentiating factor shifts upstream to judgment, curation, and aesthetic sensibility. Taste becomes the primary value driver.',
  },
  {
    number: '02',
    title: 'On Access',
    body: 'AI has unlocked the ability for anyone to bring their ideas to life regardless of resources, background, or connections. As the cost of trying approaches zero, the only failure is not exploring.',
  },
  {
    number: '03',
    title: 'On Expertise',
    body: 'We are moving from an economy of credentials to an economy of demonstrated capability. AI increases the premium on genuine domain knowledge, curiosity, and craft. It automates the general while surfacing the value of the specific.',
  },
  {
    number: '04',
    title: 'On Strategy',
    body: 'AI is absorbing execution-layer strategy. The remaining — and rising — strategic competency is selection: which problems to solve, which markets to enter, which capabilities to develop. The discipline of strategy is being refined to its essential function.',
  },
  {
    number: '05',
    title: 'On Structure',
    body: 'Organizational advantage is decoupling from headcount. High-performing small teams with shared standards, strong points of view, and rapid feedback loops are demonstrably outpacing larger, more resourced competitors. This trend will accelerate as AI further reduces coordination overhead.',
  },
  {
    number: '06',
    title: 'On the Individual',
    body: 'AI enables individuals to produce at scales previously requiring organizational infrastructure. The result is a migration of professional and economic identity from institutional affiliation to individual capability. Individuals who can articulate and evidence what they build will hold increasing economic leverage, independent of traditional employment structures.',
  },
  {
    number: '07',
    title: 'On Timing',
    body: 'Technology adoption has always conferred advantage, but the penalty structure of AI adoption is asymmetric. AI fluency is built through practice, iteration, and organizational learning — none of which can be purchased retroactively. Each quarter of delayed adoption is not merely a missed opportunity — it is a widening capability gap that compounds against the organization. The safest-seeming strategy is, in practice, the most dangerous.',
  },
  {
    number: '08',
    title: 'On Impact',
    body: 'We operate from the empirically grounded position that AI, deployed with intention and responsibility, represents a net positive force for human welfare. It expands access to creative and economic participation, renders viable business models that were previously unsustainable, and enables communities and cultures to preserve and express themselves in ways the pre-AI economy could not support. This is not technological utopianism — it is a measured assessment of trajectory, and one we are committed to stewarding.',
  },
];

export const contact = {
  email: 'jhillin@manasai.io',
  scheduleLabel: 'Schedule a call',
  scheduleHref: '/#discovery',
};
