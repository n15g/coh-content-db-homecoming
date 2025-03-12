import { BadgeData } from 'coh-content-db'

export const Frenzied: BadgeData = {
  type: 'ACHIEVEMENT',
  key: 'frenzied',
  setTitle: { id: 1457 },
  name: [
    { value: 'Frenzied' },
  ],
  alignment: ['V'],
  badgeText: [
    {
      value: 'You completed a Villain Morality Mission and then maintained your Villain alignment for 7 days '
        + 'earning yourself this badge.',
    },
  ],
  acquisition: 'Maintain a Villain alignment for 7 days',
  links: [
    { title: 'Frenzied Badge', href: 'https://homecoming.wiki/wiki/Frenzied_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/frenzied.png' },
  ],
}
