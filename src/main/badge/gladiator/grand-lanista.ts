import { BadgeData } from 'coh-content-db'

export const GrandLanista: BadgeData = {
  type: 'GLADIATOR',
  key: 'grand-lanista',
  setTitle: { id: 474 },
  name: [
    { value: 'Grand Lanista' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [
    { alignment: 'H', value: 'Continued success has earned you fame as a manager of gladiators.' },
    { alignment: 'V', value: 'You have achieved great fame as a manager of gladiators in the Arena.' },
  ],
  acquisition: 'Win ten Gladiator matches in the Arena (Arena)',
  links: [
    { title: 'Grand Lanista Badge', href: 'https://homecoming.wiki/wiki/Grand_Lanista_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/gladiator/gladiator.png' },
  ],
}
