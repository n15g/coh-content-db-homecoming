import { BadgeData } from 'coh-content-db'

export const Vendor: BadgeData = {
  type: 'CONSIGNMENT',
  key: 'vendor',
  setTitle: { id: 810 },
  name: [
    { value: 'Vendor' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [
    { alignment: 'H', value: `You've sold 10 items on the Consignment House.` },
    { alignment: 'V', value: `You've sold 10 items on the Black Market.` },
  ],
  acquisition: '10 total sales of any kind on the consignment houses.',
  links: [
    { title: 'Vendor Badge', href: 'https://homecoming.wiki/wiki/Vendor_Badge' },
  ],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/consignment/vendor.png' }],
}
