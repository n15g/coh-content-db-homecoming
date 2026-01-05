import { BadgeData } from 'coh-content-db'

export const Eradicator: BadgeData = {
  type: 'achievement',
  key: 'eradicator',
  setTitleId: [2359],
  name: 'Eradicator',
  releaseDate: '2012-11-30',
  morality: 'all',
  badgeText: 'You have inflicted fifty million points of damage upon your foes.',
  acquisition: 'Deal 50,000,000 damage.',
  links: [
    { title: 'Eradicator Badge', href: 'https://homecoming.wiki/wiki/Eradicator_Badge' },
  ],
  icon: [
    { alignment: 'hero', value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/deal-damage-h.png' },
    { alignment: 'villain', value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/deal-damage-v.png' },
  ],
}
