import { BadgeData } from 'coh-content-db'

export const Salesman: BadgeData = {
  type: 'CONSIGNMENT',
  key: 'salesman',
  setTitle: { id: 811 },
  name: [
    { sex: 'M', value: 'Salesman' },
    { sex: 'F', value: 'Saleswoman' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [
    { alignment: 'H', value: `You've sold 50 items on the Consignment House.` },
    { alignment: 'V', value: `You've sold 50 items on the Black Market.` },
  ],
  acquisition: '50 total sales of any kind on the consignment houses.',
  links: [
    { title: 'Salesman Badge', href: 'https://homecoming.wiki/wiki/Salesman_Badge' },
    { title: 'Saleswoman Badge', href: 'https://homecoming.wiki/wiki/Saleswoman_Badge' },
  ],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/consignment/salesman.png' }],
}
