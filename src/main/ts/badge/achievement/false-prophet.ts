import { BadgeData } from 'coh-content-db'

export const FalseProphet: BadgeData = {
  type: 'achievement',
  key: 'false-prophet',
  setTitleId: [2096],
  name: 'False Prophet',
  morality: 'villainous',
  badgeText: `You're not above using others' beliefs to your own advantage, especially when they're as gullible as the Luddites.`,
  acquisition: 'Complete the story arc from Brother Hammond',
  links: [
    { title: 'False Prophet Badge', href: 'https://homecoming.wiki/wiki/False_Prophet_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/false-prophet.png',
}
