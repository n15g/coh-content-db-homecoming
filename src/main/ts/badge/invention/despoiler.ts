import { BadgeData } from 'coh-content-db'

export const Despoiler: BadgeData = {
  type: 'invention',
  key: 'despoiler',
  setTitleId: [762],
  name: 'Despoiler',
  morality: 'all',
  badgeText: 'You have memorized the following recipes at level 25 and 30: Defense Debuff, To Hit Debuff, Taunt, and Confuse.',
  effect: 'Awards +2 to Invention Salvage capacity.',
  links: [
    { title: 'Despoiler Badge', href: 'https://homecoming.wiki/wiki/Despoiler_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/invention/brain-3.png',
  requirements: [
    {
      key: 'a',
      type: 'invention',
      inventionLevel: 25,
      inventionTypes: ['defense-debuff', 'to-hit-debuff', 'taunt', 'confuse'],
      count: 2,
    },
    {
      key: 'b',
      type: 'invention',
      inventionLevel: 30,
      inventionTypes: ['defense-debuff', 'to-hit-debuff', 'taunt', 'confuse'],
      count: 2,
    },
  ],
}
