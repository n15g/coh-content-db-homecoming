import { BadgeData } from 'coh-content-db'

export const LongbowRifleman: BadgeData = {
  type: 'GLADIATOR',
  key: 'longbow-rifleman',
  setTitle: { id: 454 },
  name: [
    { value: 'Longbow Rifleman' },
  ],
  alignment: ['V'],
  badgeText: [
    { alignment: 'H', value: 'Longbow counts you as an ally.' },
    { alignment: 'V', value: 'Even Longbow respects your skills.' },
  ],
  acquisition: 'Earn the [badge:locked-and-loaded] Badge (Longbow)',
  links: [
    { title: 'Longbow Rifleman Badge', href: 'https://homecoming.wiki/wiki/Longbow_Rifleman_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/gladiator/gladiator.png' },
  ],
}
