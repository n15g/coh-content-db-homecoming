import { BadgeData } from 'coh-content-db'

export const Proprietor: BadgeData = {
  type: 'CONSIGNMENT',
  key: 'shopkeeper',
  setTitle: { id: 820 },
  name: [
    { value: 'Proprietor' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [
    { alignment: 'H', value: `You've sold 6000 items on the Consignment House.` },
    { alignment: 'V', value: `You've sold 6000 items on the Black Market.` },
  ],
  acquisition: '6000 total sales of any kind on the consignment houses.',
  links: [
    { title: 'Proprietor Badge', href: 'https://homecoming.wiki/wiki/Proprietor_Badge' },
  ],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/consignment/proprietor.png' }],
}
