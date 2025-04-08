import { BadgeData } from 'coh-content-db'

export const TriggerMan: BadgeData = {
  type: 'invention',
  key: 'trigger-man',
  setTitleId: [785],
  name: 'Trigger Man',
  morality: 'all',
  badgeText: 'You have memorized the following recipes at level 10: Recharge Rate and Interrupt Time.',
  links: [
    { title: 'Trigger Man Badge', href: 'https://homecoming.wiki/wiki/Trigger_Man_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/invention/brain-1.png',
  requirements: [
    {
      key: 'a',
      type: 'invention',
      inventionLevel: 10,
      inventionTypes: ['recharge-reduction', 'interrupt-duration'],
      count: 10,
    },
  ],
}
