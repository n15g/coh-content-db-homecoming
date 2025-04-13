import { BadgeData } from 'coh-content-db'

export const HiredGun: BadgeData = {
  type: 'invention',
  key: 'hired-gun',
  setTitleId: [786],
  name: 'Hired Gun',
  morality: 'all',
  badgeText: 'You have memorized the following recipes at level 15 and 20: Recharge Rate and Interrupt Time.',
  links: [
    { title: 'Hired Gun Badge', href: 'https://homecoming.wiki/wiki/Hired_Gun_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/invention/brain-2.png',
  requirements: [
    {
      key: 'a',
      type: 'invention',
      inventionLevel: 15,
      inventionTypes: ['recharge-reduction', 'interrupt-duration'],
      count: 6,
    },
    {
      key: 'b',
      type: 'invention',
      inventionLevel: 20,
      inventionTypes: ['recharge-reduction', 'interrupt-duration'],
      count: 6,
    },
    { key: 'c', type: 'invention-plus-one' },
  ],
}
