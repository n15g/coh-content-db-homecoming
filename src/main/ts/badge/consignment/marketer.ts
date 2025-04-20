import { BadgeData } from 'coh-content-db'

export const Marketer: BadgeData = {
  type: 'consignment',
  key: 'marketer',
  setTitleId: [819],
  name: [
    { alignment: 'hero', value: 'Marketer' },
    { alignment: 'villain', value: 'Black Marketeer' },
  ],
  releaseDate: '2012-11-30',
  morality: 'all',
  badgeText: [
    { alignment: 'hero', value: `You've sold 5000 items on the Consignment House.` },
    { alignment: 'villain', value: `You've sold 5000 items on the Black Market.` },
  ],
  acquisition: '5000 total sales of any kind on the consignment houses.',
  links: [
    { title: 'Marketer Badge', href: 'https://homecoming.wiki/wiki/Marketer_Badge' },
    { title: 'Black Marketeer Badge', href: 'https://homecoming.wiki/wiki/Black_Marketeer' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/consignment/marketer.png',
}
