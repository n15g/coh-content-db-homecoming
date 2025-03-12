import { BadgeData } from 'coh-content-db'

export const LoyalCustomer: BadgeData = {
  type: 'ACCOMPLISHMENT',
  key: 'loyal-customer',
  setTitle: { id: 2369 },
  name: [
    { value: 'Loyal Customer' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [
    { value: 'You have stopped the Sky Raiders from ransacking Wentworth\'s Fine Consignments.' },
  ],
  acquisition: 'Complete the Market Crash Task Force in Kallisti Wharf.',
  links: [
    { title: 'Loyal Customer Badge', href: 'https://homecoming.wiki/wiki/Loyal_Customer_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/loyal-customer.png' },
  ],
}
