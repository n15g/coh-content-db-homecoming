import { BadgeData } from 'coh-content-db'

export const Declining: BadgeData = {
  type: 'INVENTION',
  key: 'declining',
  setTitle: { id: 760 },
  name: [{ value: 'Declining' }],
  alignment: ['H', 'V', 'P'],
  badgeText: [{ value: 'You have memorized the following recipes at level 10: Defense Debuff, To Hit Debuff, Taunt, and Confuse.' }],
  links: [
    { title: 'Declining Badge', href: 'https://homecoming.wiki/wiki/Declining_Badge' },
  ],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/invention/brain-1.png' }],
  partials: [
    {
      key: 'a',
      type: 'INVENTION',
      inventionLevel: 10,
      inventionTypes: ['DEFENSE_DEBUFF', 'TO_HIT_DEBUFF', 'TAUNT', 'CONFUSE'],
      inventionCount: 2,
    },
  ],
}
