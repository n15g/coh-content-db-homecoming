import { BadgeData } from 'coh-content-db'

export const Sniper: BadgeData = {
  type: 'invention',
  key: 'sniper',
  setTitleId: [788],
  name: 'Sniper',
  morality: 'all',
  badgeText: 'You have memorized the following recipes at level 35 and 40: Recharge Rate and Interrupt Time.',
  links: [
    { title: 'Sniper Badge', href: 'https://homecoming.wiki/wiki/Sniper_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/invention/brain-4.png',
  requirements: [
    {
      key: 'a',
      type: 'invention',
      inventionLevel: 35,
      inventionTypes: ['recharge-reduction', 'interrupt-duration'],
      count: 11,
    },
    {
      key: 'b',
      type: 'invention',
      inventionLevel: 40,
      inventionTypes: ['recharge-reduction', 'interrupt-duration'],
      count: 11,
    },
  ],
}
