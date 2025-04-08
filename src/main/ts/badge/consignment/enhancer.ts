import { BadgeData } from 'coh-content-db'

export const Enhancer: BadgeData = {
  type: 'consignment',
  key: 'enhancer',
  setTitleId: [809],
  name: 'Enhancer',
  morality: 'all',
  badgeText: [
    { alignment: 'hero', value: `You've sold 50 Enhancements on the Consignment House.` },
    { alignment: 'villain', value: `You've sold 50 Enhancements on the Black Market.` },
  ],
  acquisition: 'Sell 50 Enhancements at either Wentworths or the Black Market.',
  links: [
    { title: 'Enhancer Badge', href: 'https://homecoming.wiki/wiki/Enhancer_Badge' },
  ],
  icon: [
    { alignment: 'hero', value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/consignment/broker-h.png' },
    { alignment: 'villain', value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/consignment/broker-v.png' },
  ],
}
