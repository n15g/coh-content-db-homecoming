import { BadgeData } from 'coh-content-db'

export const Broker: BadgeData = {
  type: 'consignment',
  key: 'broker',
  setTitleId: [806],
  name: 'Broker',
  releaseDate: '2012-11-30',
  morality: 'all',
  badgeText: [
    { alignment: 'hero', value: `You've sold 50 Recipes on the Consignment House.` },
    { alignment: 'villain', value: `You've sold 50 Recipes on the Black Market.` },
  ],
  acquisition: 'Sell 50 Recipes at either Wentworths or the Black Market.',
  links: [
    { title: 'Broker Badge', href: 'https://homecoming.wiki/wiki/Broker_Badge' },
  ],
  icon: [
    { alignment: 'hero', value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/consignment/broker-h.png' },
    { alignment: 'villain', value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/consignment/broker-v.png' },
  ],
}
