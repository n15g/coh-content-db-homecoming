import { BadgeData } from 'coh-content-db'

export const Tradesman: BadgeData = {
  type: 'consignment',
  key: 'tradesman',
  setTitleId: [812],
  name: [
    { sex: 'M', value: 'Tradesman' },
    { sex: 'F', value: 'Tradeswoman' },
  ],
  morality: 'all',
  badgeText: [
    { alignment: 'hero', value: `You've sold 100 items on the Consignment House.` },
    { alignment: 'villain', value: `You've sold 100 items on the Black Market.` },
  ],
  acquisition: '100 total sales of any kind on the consignment houses.',
  links: [
    { title: 'Tradesman Badge', href: 'https://homecoming.wiki/wiki/Tradesman_Badge' },
    { title: 'Tradeswoman Badge', href: 'https://homecoming.wiki/wiki/Tradeswoman_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/consignment/tradesman.png',
}
