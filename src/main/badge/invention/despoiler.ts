import { BadgeData } from 'coh-content-db'

export const Despoiler: BadgeData = {
  type: 'INVENTION',
  key: 'despoiler',
  setTitle: { id: 762 },
  name: [{ value: 'Despoiler' }],
  alignment: ['H', 'V', 'P'],
  badgeText: [{ value: 'You have memorized the following recipes at level 25 and 30: Defense Debuff, To Hit Debuff, Taunt, and Confuse.' }],
  effect: '+2 to Invention Salvage capacity',
  links: [
    { title: 'Despoiler Badge', href: 'https://homecoming.wiki/wiki/Despoiler_Badge' },
  ],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/invention/brain-3.png' }],
  requirements: [
    {
      key: 'a',
      type: 'INVENTION',
      inventionLevel: 25,
      inventionTypes: ['DEFENSE_DEBUFF', 'TO_HIT_DEBUFF', 'TAUNT', 'CONFUSE'],
      inventionCount: 2,
    },
    {
      key: 'b',
      type: 'INVENTION',
      inventionLevel: 30,
      inventionTypes: ['DEFENSE_DEBUFF', 'TO_HIT_DEBUFF', 'TAUNT', 'CONFUSE'],
      inventionCount: 2,
    },
  ],
}
