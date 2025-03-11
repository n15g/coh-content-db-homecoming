import { BadgeData } from 'coh-content-db'

export const LongbowWarden: BadgeData = {
  type: 'GLADIATOR',
  key: 'longbow-warden',
  setTitle: { id: 455 },
  name: [
    { value: 'Longbow Warden' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [
    { alignment: 'H', value: 'Longbow counts you as an ally.' },
    { alignment: 'V', value: 'Bow down and obey!' },
  ],
  acquisition: 'Earn the [badge:politician] Badge (Longbow)',
  links: [
    { title: 'Longbow Warden Badge', href: 'https://homecoming.wiki/wiki/Longbow_Warden_1_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/gladiator/gladiator.png' },
  ],
}
