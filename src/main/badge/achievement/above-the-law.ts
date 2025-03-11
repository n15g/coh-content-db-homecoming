import { BadgeData } from 'coh-content-db'

export const AboveTheLaw: BadgeData = {
  type: 'ACHIEVEMENT',
  key: 'above-the-law',
  setTitle: { id: 1451 },
  name: [
    { value: 'Above the Law' },
  ],
  alignment: ['H'],
  badgeText: [
    {
      value: 'You are the law, you dispense your own kind of justice for the greater good. You have '
        + 'completed a Vigilante Morality Mission earning yourself this badge.',
    },
  ],
  acquisition: 'Complete a Vigilante Morality mission',
  links: [
    { title: 'Above the Law Badge', href: 'https://homecoming.wiki/wiki/Above_the_Law_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/above-the-law.png' },
  ],
}
