import { BadgeData } from 'coh-content-db'

export const Marketer: BadgeData = {
  type: 'CONSIGNMENT',
  key: 'marketer',
  setTitle: { id: 819 },
  name: [
    { alignment: 'H', value: 'Marketer' },
    { alignment: 'V', value: 'Black Marketeer' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [
    { alignment: 'H', value: `You've sold 5000 items on the Consignment House.` },
    { alignment: 'V', value: `You've sold 5000 items on the Black Market.` },
  ],
  acquisition: '5000 total sales of any kind on the consignment houses.',
  links: [
    { title: 'Marketer Badge', href: 'https://homecoming.wiki/wiki/Marketer_Badge' },
    { title: 'Black Marketeer Badge', href: 'https://homecoming.wiki/wiki/Black_Marketeer' },
  ],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/consignment/marketer.png' }],
}
