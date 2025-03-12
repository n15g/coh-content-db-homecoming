import { BadgeData } from 'coh-content-db'

export const Trickster: BadgeData = {
  type: 'ACHIEVEMENT',
  key: 'trickster',
  setTitle: { id: 1456 },
  name: [
    { value: 'Trickster' },
  ],
  alignment: ['V'],
  badgeText: [
    {
      value: 'You completed a Rogue Morality Mission and then maintained your Rogue alignment for 7 days '
        + 'earning yourself this badge.',
    },
  ],
  acquisition: 'Maintain a Rogue alignment for 7 days',
  links: [
    { title: 'Trickster Badge', href: 'https://homecoming.wiki/wiki/Trickster_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/trickster.png' },
  ],
}
