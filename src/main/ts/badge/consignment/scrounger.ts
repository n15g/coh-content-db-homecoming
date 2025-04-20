import { BadgeData } from 'coh-content-db'

export const Scrounger: BadgeData = {
  type: 'consignment',
  key: 'scrounger',
  setTitleId: [808],
  name: 'Scrounger',
  releaseDate: '2012-11-30',
  morality: 'all',
  badgeText: [
    { alignment: 'hero', value: `You've sold 50 Salvage on the Consignment House.` },
    { alignment: 'villain', value: `You've sold 50 Salvage on the Black Market.` },
  ],
  acquisition: 'Sell 50 Salvage at either Wentworths or the Black Market.',
  links: [
    { title: 'Scrounger Badge', href: 'https://homecoming.wiki/wiki/Scrounger_Badge' },
  ],
  icon: [
    { alignment: 'hero', value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/consignment/broker-h.png' },
    { alignment: 'villain', value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/consignment/broker-v.png' },
  ],
}
