import { BadgeData } from 'coh-content-db'

export const PowerHungry: BadgeData = {
  type: 'EVENT',
  key: 'power-hungry',
  setTitle: { id: 1768 },
  name: [
    { value: 'Power Hungry' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [
    { value: 'The Malleus Mundi has real power, and you\'ve tapped into some of its potential.' },
  ],
  acquisition: 'Complete the Whispered Rumor tip mission during the Halloween event and choose the option to \'Use the Malleus Mundi to gain personal power\'.',
  links: [
    { title: 'Power Hungry Badge', href: 'https://homecoming.wiki/wiki/Power_Hungry_Badge' },
    { title: 'Whispered Rumour', href: 'https://homecoming.wiki/wiki/Mission:Tip_-_Whispered_Rumor' },
  ],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/event/power-hungry.png' }],
}
