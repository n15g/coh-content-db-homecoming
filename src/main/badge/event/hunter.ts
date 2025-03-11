import { BadgeData } from 'coh-content-db'

export const Hunter: BadgeData = {
  type: 'EVENT',
  key: 'hunter',
  setTitle: { id: 185 },
  name: [
    { value: 'Hunter' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [
    { value: 'You have defeated 20 of the nefarious Vampires who rose from their graves on Halloween.' },
  ],
  acquisition: 'Defeat 20 Nefarious Vampires during the Halloween event.',
  links: [
    { title: 'Hunter Badge', href: 'https://homecoming.wiki/wiki/Hunter_Badge' },
  ],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/event/hunter.png' }],
}
