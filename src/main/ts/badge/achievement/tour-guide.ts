import { BadgeData } from 'coh-content-db'

export const TourGuide: BadgeData = {
  type: 'achievement',
  key: 'tour-guide',
  setTitleId: [1997],
  name: 'Tour Guide',
  releaseDate: '2012-11-30',
  morality: 'all',
  badgeText: 'While escorting Desdemona through the Underground, you never let her drop below half health.',
  acquisition: `Don't let Desdemona's health go below 50% during The Underground Trial.`,
  links: [
    { title: 'Tour Guide Badge', href: 'https://homecoming.wiki/wiki/Tour_Guide_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/it-ug.png',
}
