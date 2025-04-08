import { BadgeData } from 'coh-content-db'

export const Proprietor: BadgeData = {
  type: 'consignment',
  key: 'shopkeeper',
  setTitleId: [820],
  name: 'Proprietor',
  morality: 'all',
  badgeText: [
    { alignment: 'hero', value: `You've sold 6000 items on the Consignment House.` },
    { alignment: 'villain', value: `You've sold 6000 items on the Black Market.` },
  ],
  acquisition: '6000 total sales of any kind on the consignment houses.',
  links: [
    { title: 'Proprietor Badge', href: 'https://homecoming.wiki/wiki/Proprietor_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/consignment/proprietor.png',
}
