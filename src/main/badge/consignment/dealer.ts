import { BadgeData } from 'coh-content-db'

export const Dealer: BadgeData = {
  type: 'CONSIGNMENT',
  key: 'dealer',
  setTitle: { id: 816 },
  name: [
    { value: 'Dealer' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [
    { alignment: 'H', value: `You've sold 2000 items on the Consignment House.` },
    { alignment: 'V', value: `You've sold 2000 items on the Black Market.` },
  ],
  acquisition: '2000 total sales of any kind on the consignment houses.',
  links: [
    { title: 'Dealer Badge', href: 'https://homecoming.wiki/wiki/Dealer_Badge' },
  ],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/consignment/dealer.png' }],
}
