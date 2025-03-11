import { BadgeData } from 'coh-content-db'

export const Retailer: BadgeData = {
  type: 'CONSIGNMENT',
  key: 'retailer',
  setTitle: { id: 815 },
  name: [
    { value: 'Retailer' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [
    { alignment: 'H', value: `You've sold 1000 items on the Consignment House.` },
    { alignment: 'V', value: `You've sold 1000 items on the Black Market.` },
  ],
  acquisition: '1000 total sales of any kind on the consignment houses.',
  links: [
    { title: 'Retailer Badge', href: 'https://homecoming.wiki/wiki/Retailer_Badge' },
  ],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/consignment/retailer.png' }],
}
