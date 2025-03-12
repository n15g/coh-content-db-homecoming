import { BadgeData } from 'coh-content-db'

export const PowerSeller: BadgeData = {
  type: 'CONSIGNMENT',
  key: 'power-seller',
  setTitle: { id: 821 },
  name: [
    { value: 'Power Seller' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [
    { alignment: 'H', value: `You've sold 7000 items on the Consignment House.` },
    { alignment: 'V', value: `You've sold 7000 items on the Black Market.` },
  ],
  acquisition: '7000 total sales of any kind on the consignment houses.',
  links: [
    { title: 'Power Seller Badge', href: 'https://homecoming.wiki/wiki/Power_Seller_Badge' },
  ],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/consignment/power-seller.png' }],
}
