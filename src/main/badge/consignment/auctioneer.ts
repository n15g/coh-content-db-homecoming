import { BadgeData } from 'coh-content-db'

export const Auctioneer: BadgeData = {
  type: 'CONSIGNMENT',
  key: 'auctioneer',
  setTitle: { id: 817 },
  name: [
    { value: 'Auctioneer' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [
    { alignment: 'H', value: `You've sold 3000 items on the Consignment House.` },
    { alignment: 'V', value: `You've sold 3000 items on the Black Market.` },
  ],
  acquisition: '3000 total sales of any kind on the consignment houses.',
  links: [
    { title: 'Auctioneer Badge', href: 'https://homecoming.wiki/wiki/Auctioneer_Badge' },
  ],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/consignment/auctioneer.png' }],
}
