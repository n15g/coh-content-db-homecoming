import { BadgeData } from 'coh-content-db'

export const Immortal: BadgeData = {
  type: 'ACHIEVEMENT',
  key: 'immortal',
  setTitle: { id: 232, praetorianId: 1680 },
  name: [
    { value: 'Immortal' },
    { alignment: 'P', value: 'Challenger of Gods' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [
    { value: 'You are truly Immortal. You have survived one hundred million points of damage.' },
    {
      alignment: 'P', value: 'You\'re not even sure Emperor Cole has taken as much damage as you. Remember to ask him next '
        + 'time you see him.',
    },
  ],
  acquisition: 'Endure 100,000,000 points of damage',
  links: [
    { title: 'Immortal Badge', href: 'https://homecoming.wiki/wiki/Immortal_Badge' },
    { title: 'Challenger of Gods Badge', href: 'https://homecoming.wiki/wiki/Challenger_of_Gods_Badge' },
  ],
  icon: [
    { alignment: 'H', value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/dmg-in-h.png' },
    { alignment: 'V', value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/dmg-in-v.png' },
  ],
}
