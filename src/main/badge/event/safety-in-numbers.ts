import { BadgeData } from 'coh-content-db'

export const SafetyInNumbers: BadgeData = {
  type: 'EVENT',
  key: 'safety-in-numbers',
  setTitle: { id: 1021 },
  name: [
    { value: 'Safety in Numbers' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [
    { value: 'You\'ve taken out 33 Zombie Lieutenants, proving that there is Safety in Numbers.' },
  ],
  acquisition: 'Defeat 33 Zombie lieutenants during Zombie Apocalypses.',
  links: [
    { title: 'Safety in Numbers Badge', href: 'https://homecoming.wiki/wiki/Safety_in_Numbers_Badge' },
  ],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/event/safety-in-numbers.png' }],
}
