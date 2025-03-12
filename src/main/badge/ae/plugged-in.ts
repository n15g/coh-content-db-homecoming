import { BadgeData } from 'coh-content-db'

export const PluggedIn: BadgeData = {
  type: 'AE',
  key: 'plugged-in',
  setTitle: { id: 1235 },
  name: [
    { value: 'Plugged In' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [{ value: 'You\'ve earned 10 Mission Architect badges!' }],
  acquisition: 'Earn 10 Mission Architect badges.',
  links: [
    { title: 'Plugged In Badge', href: 'https://homecoming.wiki/wiki/Plugged_In_Badge' },
  ],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/ae/plugged-in.png' }],
}
