import { BadgeData } from 'coh-content-db'

export const GhostTouched: BadgeData = {
  type: 'EVENT',
  key: 'ghost-touched',
  setTitle: { id: 697 },
  name: [
    { value: 'Ghost Touched' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [
    { value: 'You have defeated 20 of the Unseelie Court.' },
  ],
  acquisition: 'Defeat 20 Unseelie Court during the Halloween event.',
  links: [
    { title: 'Ghost Touched Badge', href: 'https://homecoming.wiki/wiki/Ghost_Touched_Badge' },
  ],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/event/ghost-touched.png' }],
}
