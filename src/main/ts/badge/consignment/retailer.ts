import { BadgeData } from 'coh-content-db'

export const Retailer: BadgeData = {
  type: 'consignment',
  key: 'retailer',
  setTitleId: [815],
  name: 'Retailer',
  releaseDate: '2012-11-30',
  morality: 'all',
  badgeText: [
    { alignment: 'hero', value: `You've sold 1000 items on the Consignment House.` },
    { alignment: 'villain', value: `You've sold 1000 items on the Black Market.` },
  ],
  acquisition: '1000 total sales of any kind on the consignment houses.',
  links: [
    { title: 'Retailer Badge', href: 'https://homecoming.wiki/wiki/Retailer_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/consignment/retailer.png',
}
