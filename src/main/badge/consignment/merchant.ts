import { BadgeData } from 'coh-content-db'

export const Merchant: BadgeData = {
  type: 'CONSIGNMENT',
  key: 'merchant',
  setTitle: { id: 813 },
  name: [
    { value: 'Merchant' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [
    { alignment: 'H', value: `You've sold 250 items on the Consignment House.` },
    { alignment: 'V', value: `You've sold 250 items on the Black Market.` },
  ],
  acquisition: '250 total sales of any kind on the consignment houses.',
  links: [
    { title: 'Merchant Badge', href: 'https://homecoming.wiki/wiki/Merchant_Badge' },
  ],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/consignment/merchant.png' }],
}
