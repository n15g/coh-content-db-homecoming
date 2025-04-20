import { BadgeData } from 'coh-content-db'

export const Paragon: BadgeData = {
  type: 'achievement',
  key: 'paragon',
  setTitleId: [14, 1707],
  name: [
    { alignment: 'hero', value: 'Paragon' },
    { alignment: 'villain', value: 'Svengali' },
    { alignment: 'praetorian', value: 'Teacher' },
  ],
  releaseDate: '2012-11-30',
  morality: 'all',
  badgeText: [
    { alignment: 'hero', value: 'The time spent as a mentor has earned you the right to call yourself paragon.' },
    { alignment: 'villain', value: `You've spent time recruiting others to Arachnos' cause.` },
    { alignment: 'praetorian', value: `Teaching those who want to learn the ways of Praetoria is more than a hobby to you. It's a mission.` },
  ],
  acquisition: `Sidekick another hero for 12 hours.`,
  links: [
    { title: 'Paragon Badge', href: 'https://homecoming.wiki/wiki/Paragon_Badge' },
    { title: 'Svengali Badge', href: 'https://homecoming.wiki/wiki/Svengali_Badge' },
    { title: 'Teacher Badge', href: 'https://homecoming.wiki/wiki/Teacher_Badge' },
  ],
  icon: [
    { alignment: 'hero', value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/mentor-h.png' },
    { alignment: 'villain', value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/mentor-v.png' },
  ],
}
