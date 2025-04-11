import { BadgeData } from 'coh-content-db'

export const GrandLanista: BadgeData = {
  type: 'gladiator',
  key: 'grand-lanista',
  setTitleId: [474],
  name: 'Grand Lanista',
  morality: 'all',
  badgeText: [
    { alignment: 'hero', value: 'Continued success has earned you fame as a manager of gladiators.' },
    { alignment: 'villain', value: 'You have achieved great fame as a manager of gladiators in the Arena.' },
  ],
  acquisition: 'Win ten Gladiator matches in the Arena.',
  links: [
    { title: 'Grand Lanista Badge', href: 'https://homecoming.wiki/wiki/Grand_Lanista_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/gladiator/gladiator.png',
}
