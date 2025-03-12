import { BadgeData } from 'coh-content-db'

export const Deathless: BadgeData = {
  type: 'ACHIEVEMENT',
  key: 'deathless',
  setTitle: { id: 233, praetorianId: 1684 },
  name: [
    { value: 'Deathless' },
    { alignment: 'P', value: 'Impulsive' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [
    { alignment: 'H', value: 'You have proven that you are Deathless in your pursuit against evil.' },
    { alignment: 'V', value: 'You have proven that you are Deathless in your pursuit of evil.' },
    {
      alignment: 'P', value: 'Perhaps TPN was right when they said Praetoria would never die. At least when it comes to you, '
        + 'it\'s holding up.',
    },
  ],
  acquisition: 'Pay off 400,000 debt',
  links: [
    { title: 'Deathless Badge', href: 'https://homecoming.wiki/wiki/Deathless_Badge' },
    { title: 'Impulsive Badge', href: 'https://homecoming.wiki/wiki/Impulsive_Badge' },
  ],
  icon: [
    { alignment: 'H', value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/debt-h.png' },
    { alignment: 'V', value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/debt-v.png' },
  ],
}
