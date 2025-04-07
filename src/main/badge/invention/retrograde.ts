import { BadgeData } from 'coh-content-db'

export const Retrograde: BadgeData = {
  type: 'invention',
  key: 'retrograde',
  setTitleId: [764],
  name: 'Retrograde',
  morality: 'all',
  badgeText: 'You have memorized the following recipes at level 45 and 50: Defense Debuff, To Hit Debuff, Taunt, and Confuse.',
  links: [
    { title: 'Retrograde Badge', href: 'https://homecoming.wiki/wiki/Retrograde_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/invention/brain-5.png',
  requirements: [
    {
      key: 'a',
      type: 'invention',
      inventionLevel: 45,
      inventionTypes: ['defense-debuff', 'to-hit-debuff', 'taunt', 'confuse'],
      count: 3,
    },
    {
      key: 'b',
      type: 'invention',
      inventionLevel: 50,
      inventionTypes: ['defense-debuff', 'to-hit-debuff', 'taunt', 'confuse'],
      count: 3,
    },
    { key: 'c', type: 'invention-plus-one' },
  ],
}
