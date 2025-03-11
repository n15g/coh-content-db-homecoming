import { BadgeData } from 'coh-content-db'

export const Businessman: BadgeData = {
  type: 'CONSIGNMENT',
  key: 'businessman',
  setTitle: { id: 818 },
  name: [
    { sex: 'M', value: 'Businessman' },
    { sex: 'F', value: 'Businesswoman' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [
    { alignment: 'H', value: `You've sold 4000 items on the Consignment House.` },
    { alignment: 'V', value: `You've sold 4000 items on the Black Market.` },
  ],
  acquisition: '4000 total sales of any kind on the consignment houses.',
  links: [
    { title: 'Businessman Badge', href: 'https://homecoming.wiki/wiki/Businessman_Badge' },
    { title: 'Businesswoman Badge', href: 'https://homecoming.wiki/wiki/Businesswoman_Badge' },
  ],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/consignment/businessman.png' }],
}
