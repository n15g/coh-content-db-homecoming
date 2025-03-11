import { BadgeData } from 'coh-content-db'

export const Broker: BadgeData = {
  type: 'CONSIGNMENT',
  key: 'broker',
  setTitle: { id: 806 },
  name: [
    { value: 'Broker' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [
    { alignment: 'H', value: `You've sold 50 Recipes on the Consignment House.` },
    { alignment: 'V', value: `You've sold 50 Recipes on the Black Market.` },
  ],
  acquisition: 'Sell 50 Recipes at either Wentworths or the Black Market.',
  links: [
    { title: 'Broker Badge', href: 'https://homecoming.wiki/wiki/Broker_Badge' },
  ],
  icon: [
    { alignment: 'H', value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/consignment/broker-h.png' },
    { alignment: 'V', value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/consignment/broker-v.png' },
  ],
}
