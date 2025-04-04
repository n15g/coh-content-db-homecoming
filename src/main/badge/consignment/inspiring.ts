import { BadgeData } from 'coh-content-db'

export const Inspiring: BadgeData = {
  type: 'consignment',
  key: 'inspiring',
  setTitleId: [807],
  name: 'Inspiring',
  morality: 'all',
  badgeText: [
    { alignment: 'hero', value: `You've sold 50 Inspirations on the Consignment House.` },
    { alignment: 'villain', value: `You've sold 50 Inspirations on the Black Market.` },
  ],
  acquisition: 'Sell 50 Inspirations at either Wentworths or the Black Market.',
  links: [
    { title: 'Inspiring Badge', href: 'https://homecoming.wiki/wiki/Inspiring_Badge' },
  ],
  icon: [
    { alignment: 'hero', value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/consignment/broker-h.png' },
    { alignment: 'villain', value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/consignment/broker-v.png' },
  ],
}
