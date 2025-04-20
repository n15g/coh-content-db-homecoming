import { BadgeData } from 'coh-content-db'

export const Merchant: BadgeData = {
  type: 'consignment',
  key: 'merchant',
  setTitleId: [813],
  name: 'Merchant',
  releaseDate: '2012-11-30',
  morality: 'all',
  badgeText: [
    { alignment: 'hero', value: `You've sold 250 items on the Consignment House.` },
    { alignment: 'villain', value: `You've sold 250 items on the Black Market.` },
  ],
  acquisition: '250 total sales of any kind on the consignment houses.',
  links: [
    { title: 'Merchant Badge', href: 'https://homecoming.wiki/wiki/Merchant_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/consignment/merchant.png',
}
