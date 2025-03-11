import { BadgeData } from 'coh-content-db'

export const Paragon: BadgeData = {
  type: 'ACHIEVEMENT',
  key: 'paragon',
  setTitle: { id: 14, praetorianId: 1707 },
  name: [
    { alignment: 'H', value: 'Paragon' },
    { alignment: 'V', value: 'Svengali' },
    { alignment: 'P', value: 'Teacher' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [
    { alignment: 'H', value: 'The time spent as a mentor has earned you the right to call yourself paragon.' },
    { alignment: 'V', value: 'You\'ve spent time recruiting others to Arachnos\' cause.' },
    {
      alignment: 'P', value: 'Teaching those who want to learn the ways of Praetoria is more than a hobby to you. It\'s a '
        + 'mission.',
    },
  ],
  acquisition: 'Sidekick another hero for 12 hours',
  links: [
    { title: 'Paragon Badge', href: 'https://homecoming.wiki/wiki/Paragon_Badge' },
    { title: 'Svengali Badge', href: 'https://homecoming.wiki/wiki/Svengali_Badge' },
    { title: 'Teacher Badge', href: 'https://homecoming.wiki/wiki/Teacher_Badge' },
  ],
  icon: [
    { alignment: 'H', value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/mentor-h.png' },
    { alignment: 'V', value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/mentor-v.png' },
  ],
}
