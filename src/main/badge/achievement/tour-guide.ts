import { BadgeData } from 'coh-content-db'

export const TourGuide: BadgeData = {
  type: 'ACHIEVEMENT',
  key: 'tour-guide',
  setTitle: { id: 1997 },
  name: [
    { value: 'Tour Guide' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [
    { value: 'While escorting Desdemona through the Underground, you never let her drop below half health.' },
  ],
  acquisition: 'Don\'t let Desdemona\'s health go below 50% during The Underground Trial',
  links: [
    { title: 'Tour Guide Badge', href: 'https://homecoming.wiki/wiki/Tour_Guide_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/it-ug.png' },
  ],
}
