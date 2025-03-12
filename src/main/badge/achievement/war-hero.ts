import { BadgeData } from 'coh-content-db'

export const WarHero: BadgeData = {
  type: 'ACHIEVEMENT',
  key: 'war-hero',
  setTitle: { id: 2098 },
  name: [
    { value: 'War Hero' },
  ],
  alignment: ['H'],
  badgeText: [
    {
      value: 'You stood in the middle of a war between the Council and the 5th Column, and emerged the '
        + 'victor.',
    },
  ],
  acquisition: 'Complete the story arc from Laura Lockhart',
  links: [
    { title: 'War Hero Badge', href: 'https://homecoming.wiki/wiki/War_Hero_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/war-hero.png' },
  ],
}
