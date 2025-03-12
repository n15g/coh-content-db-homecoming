import { BadgeData } from 'coh-content-db'

export const FashionDesigner: BadgeData = {
  type: 'DAY_JOB',
  key: 'fashion-designer',
  setTitle: { id: 1045 },
  name: [
    { value: 'Fashion Designer' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [{
    value: 'You spend your free time perfecting your costume earning the Fashion Designer Day Job.'
      + ' Logging out at a Tailor will earn you a discount to Tailor fees, when you log back in, for a short time.',
  }],
  acquisition: 'Log out inside Tailor buildings for 100 hours.',
  effect: 'Day Job: Tailor discount tokens',
  links: [
    { title: 'Fashion Designer Badge', href: 'https://homecoming.wiki/wiki/Fashion_Designer_Badge' },
    { title: 'Day Jobs', href: 'https://homecoming.wiki/wiki/Day_Jobs' },
  ],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/day-job/fashion-designer.png' }],
}
