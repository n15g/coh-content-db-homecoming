import { BadgeData } from 'coh-content-db'

export const Valet: BadgeData = {
  type: 'ACHIEVEMENT',
  key: 'valet',
  setTitle: { id: 2391 },
  name: [
    { value: 'Valet' },
  ],
  alignment: ['H'],
  badgeText: [{ value: `You have kept Paragon City's vehicles safe during a Freakshow rampage.` }],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/valet.png' }],
  acquisition: 'Prevent destruction of vehicles around Wentworth\'s building during the Market Crash Task Force.',
  links: [
    { title: 'Valet Badge', href: 'https://homecoming.wiki/wiki/Valet_Badge' },
  ],
}
