import { BadgeData } from 'coh-content-db'

export const Energized: BadgeData = {
  type: 'AE',
  key: 'energized',
  setTitle: { id: 1206 },
  name: [
    { value: 'Energized' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [{ value: 'You\'ve earned your first Inspiration while playing an Architect Mission, earning yourself the Energized badge.' }],
  acquisition: 'Earn one inspiration drop while playing a published Mission Architect mission.',
  links: [
    { title: 'Energized Badge', href: 'https://homecoming.wiki/wiki/Energized_Badge' },
  ],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/ae/energized.png' }],
}
