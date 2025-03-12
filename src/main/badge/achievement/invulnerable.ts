import { BadgeData } from 'coh-content-db'

export const Invulnerable: BadgeData = {
  type: 'ACHIEVEMENT',
  key: 'invulnerable',
  setTitle: { id: 231, praetorianId: 1679 },
  name: [
    { value: 'Invulnerable' },
    { alignment: 'P', value: 'Marvel of Modern Medicine' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [
    {
      value: 'Some call you Invulnerable, based on the fact that you have survived fifty million points of '
        + 'damage.',
    },
    {
      alignment: 'P', value: 'Each day you\'re stunned at how much punishment you can take. Maybe it was all that Enriche... '
        + 'or maybe it was all that Beefy Pop.',
    },
  ],
  acquisition: 'Endure 50,000,000 points of damage',
  links: [
    { title: 'Invulnerable Badge', href: 'https://homecoming.wiki/wiki/Invulnerable_Badge' },
    { title: 'Marvel of Modern Medicine Badge', href: 'https://homecoming.wiki/wiki/Marvel_of_Modern_Medicine_Badge' },
  ],
  icon: [
    { alignment: 'H', value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/dmg-in-h.png' },
    { alignment: 'V', value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/dmg-in-v.png' },
  ],
}
