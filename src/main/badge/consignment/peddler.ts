import { BadgeData } from 'coh-content-db'

export const Peddler: BadgeData = {
  type: 'CONSIGNMENT',
  key: 'peddler',
  setTitle: { id: 814 },
  name: [
    { value: 'Peddler' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [
    { alignment: 'H', value: `You've sold 500 items on the Consignment House.` },
    { alignment: 'V', value: `You've sold 500 items on the Black Market.` },
  ],
  acquisition: '500 total sales of any kind on the consignment houses.',
  links: [
    { title: 'Peddler Badge', href: 'https://homecoming.wiki/wiki/Peddler_Badge' },
  ],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/consignment/peddler.png' }],
}
