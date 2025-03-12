import { BadgeData } from 'coh-content-db'

export const Scrounger: BadgeData = {
  type: 'CONSIGNMENT',
  key: 'scrounger',
  setTitle: { id: 808 },
  name: [
    { value: 'Scrounger' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [
    { alignment: 'H', value: `You've sold 50 Salvage on the Consignment House.` },
    { alignment: 'V', value: `You've sold 50 Salvage on the Black Market.` },
  ],
  acquisition: 'Sell 50 Salvage at either Wentworths or the Black Market.',
  links: [
    { title: 'Scrounger Badge', href: 'https://homecoming.wiki/wiki/Scrounger_Badge' },
  ],
  icon: [
    { alignment: 'H', value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/consignment/broker-h.png' },
    { alignment: 'V', value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/consignment/broker-v.png' },
  ],
}
