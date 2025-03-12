import { BadgeData } from 'coh-content-db'

export const BrotherlyLove: BadgeData = {
  type: 'ACHIEVEMENT',
  key: 'brotherly-love',
  setTitle: { id: 2176 },
  name: [
    { value: 'Brotherly Love' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [
    {
      value: 'You defeated both Shivan Obliterators at the end of Drowning in Blood within 30 seconds of '
        + 'each other.',
    },
  ],
  acquisition: 'Defeat both Neo-Shivan Obliterators within 30 seconds of each other in the Drowning in Blood trial',
  links: [
    { title: 'Brotherly Love Badge', href: 'https://homecoming.wiki/wiki/Brotherly_Love_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/brotherly-love.png' },
  ],
}
