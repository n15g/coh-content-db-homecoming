import { BadgeData } from 'coh-content-db'

export const Dealer: BadgeData = {
  type: 'consignment',
  key: 'dealer',
  setTitleId: [816],
  name: 'Dealer',
  morality: 'all',
  badgeText: [
    { alignment: 'hero', value: `You've sold 2000 items on the Consignment House.` },
    { alignment: 'villain', value: `You've sold 2000 items on the Black Market.` },
  ],
  acquisition: '2000 total sales of any kind on the consignment houses.',
  links: [
    { title: 'Dealer Badge', href: 'https://homecoming.wiki/wiki/Dealer_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/consignment/dealer.png',
}
