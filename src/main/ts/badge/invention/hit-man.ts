import { BadgeData } from 'coh-content-db'

export const HitMan: BadgeData = {
  type: 'invention',
  key: 'hit-man',
  setTitleId: [787],
  name: 'Hit-Man',
  morality: 'all',
  badgeText: 'You have memorized the following recipes at level 25 and 30: Recharge Rate and Interrupt Time.',
  effect: '+2 to Invention Salvage capacity',
  links: [
    { title: 'Hit-Man Badge', href: 'https://homecoming.wiki/wiki/Hit-Man_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/invention/brain-3.png',
  requirements: [
    {
      key: 'a',
      type: 'invention',
      inventionLevel: 25,
      inventionTypes: ['recharge-reduction', 'interrupt-duration'],
      count: 8,
    },
    {
      key: 'b',
      type: 'invention',
      inventionLevel: 30,
      inventionTypes: ['recharge-reduction', 'interrupt-duration'],
      count: 8,
    },
    { key: 'c', type: 'invention-plus-one' },
  ],
}
