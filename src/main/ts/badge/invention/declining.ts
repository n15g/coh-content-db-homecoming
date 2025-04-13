import { BadgeData } from 'coh-content-db'

export const Declining: BadgeData = {
  type: 'invention',
  key: 'declining',
  setTitleId: [760],
  name: 'Declining',
  morality: 'all',
  badgeText: 'You have memorized the following recipes at level 10: Defense Debuff, To Hit Debuff, Taunt, and Confuse.',
  links: [
    { title: 'Declining Badge', href: 'https://homecoming.wiki/wiki/Declining_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/invention/brain-1.png',
  requirements: [
    {
      key: 'a',
      type: 'invention',
      inventionLevel: 10,
      inventionTypes: ['defense-debuff', 'to-hit-debuff', 'taunt', 'confuse'],
      count: 2,
    },
  ],
}
