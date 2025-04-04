import { BadgeData } from 'coh-content-db'

export const Vendor: BadgeData = {
  type: 'consignment',
  key: 'vendor',
  setTitleId: [810],
  name: 'Vendor',
  morality: 'all',
  badgeText: [
    { alignment: 'hero', value: `You've sold 10 items on the Consignment House.` },
    { alignment: 'villain', value: `You've sold 10 items on the Black Market.` },
  ],
  acquisition: '10 total sales of any kind on the consignment houses.',
  links: [
    { title: 'Vendor Badge', href: 'https://homecoming.wiki/wiki/Vendor_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/consignment/vendor.png',
}
