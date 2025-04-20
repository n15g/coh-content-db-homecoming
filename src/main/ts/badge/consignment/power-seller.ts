import { BadgeData } from 'coh-content-db'

export const PowerSeller: BadgeData = {
  type: 'consignment',
  key: 'power-seller',
  setTitleId: [821],
  name: 'Power Seller',
  releaseDate: '2012-11-30',
  morality: 'all',
  badgeText: [
    { alignment: 'hero', value: `You've sold 7000 items on the Consignment House.` },
    { alignment: 'villain', value: `You've sold 7000 items on the Black Market.` },
  ],
  acquisition: '7000 total sales of any kind on the consignment houses.',
  links: [
    { title: 'Power Seller Badge', href: 'https://homecoming.wiki/wiki/Power_Seller_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/consignment/power-seller.png',
}
