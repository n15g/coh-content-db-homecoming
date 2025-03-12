import { BadgeData } from 'coh-content-db'

export const SirensSong: BadgeData = {
  type: 'ACHIEVEMENT',
  key: 'sirens-song',
  setTitle: { id: 399 },
  name: [
    { alignment: 'H', value: 'Siren\'s Song' },
    { alignment: 'V', value: 'Raider' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [
    { value: 'Siren\'s Call must call to you. You\'ve spent over one hour there.' },
  ],
  acquisition: 'Spend 1 hour in Siren\'s Call',
  links: [
    { title: 'Siren\'s Song Badge', href: 'https://homecoming.wiki/wiki/Siren%27s_Song_Badge' },
    { title: 'Raider Badge', href: 'https://homecoming.wiki/wiki/Raider_Badge' },
  ],
  icon: [
    { alignment: 'H', value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/time-h.png' },
    { alignment: 'V', value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/time-v.png' },
  ],
}
