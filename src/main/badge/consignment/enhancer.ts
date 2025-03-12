import { BadgeData } from 'coh-content-db'

export const Enhancer: BadgeData = {
  type: 'CONSIGNMENT',
  key: 'enhancer',
  setTitle: { id: 809 },
  name: [
    { value: 'Enhancer' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [
    { alignment: 'H', value: `You've sold 50 Enhancements on the Consignment House.` },
    { alignment: 'V', value: `You've sold 50 Enhancements on the Black Market.` },
  ],
  acquisition: 'Sell 50 Enhancements at either Wentworths or the Black Market.',
  links: [
    { title: 'Enhancer Badge', href: 'https://homecoming.wiki/wiki/Enhancer_Badge' },
  ],
  icon: [
    { alignment: 'H', value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/consignment/broker-h.png' },
    { alignment: 'V', value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/consignment/broker-v.png' },
  ],
}
