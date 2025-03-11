import { BadgeData } from 'coh-content-db'

export const FalseProphet: BadgeData = {
  type: 'ACHIEVEMENT',
  key: 'false-prophet',
  setTitle: { id: 2096 },
  name: [
    { value: 'False Prophet' },
  ],
  alignment: ['V'],
  badgeText: [
    {
      value: 'You\'re not above using others\' beliefs to your own advantage, especially when they\'re as '
        + 'gullible as the Luddites.',
    },
  ],
  acquisition: 'Complete the story arc from Brother Hammond',
  links: [
    { title: 'False Prophet Badge', href: 'https://homecoming.wiki/wiki/False_Prophet_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/false-prophet.png' },
  ],
}
