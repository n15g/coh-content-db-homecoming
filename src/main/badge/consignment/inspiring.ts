import { BadgeData } from 'coh-content-db'

export const Inspiring: BadgeData = {
  type: 'CONSIGNMENT',
  key: 'inspiring',
  setTitle: { id: 807 },
  name: [
    { value: 'Inspiring' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [
    { alignment: 'H', value: `You've sold 50 Inspirations on the Consignment House.` },
    { alignment: 'V', value: `You've sold 50 Inspirations on the Black Market.` },
  ],
  acquisition: 'Sell 50 Inspirations at either Wentworths or the Black Market.',
  links: [
    { title: 'Inspiring Badge', href: 'https://homecoming.wiki/wiki/Inspiring_Badge' },
  ],
  icon: [
    { alignment: 'H', value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/consignment/broker-h.png' },
    { alignment: 'V', value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/consignment/broker-v.png' },
  ],
}
