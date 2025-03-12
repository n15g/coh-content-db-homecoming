import { BadgeData } from 'coh-content-db'

export const Popular: BadgeData = {
  type: 'ACHIEVEMENT',
  key: 'popular',
  setTitle: { id: 243, praetorianId: 1703 },
  name: [
    { value: 'Popular' },
    { alignment: 'P', value: 'Living Legend' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [
    { alignment: 'H', value: 'The citizens of Paragon City have begun a petition to make a statue in your name.' },
    { alignment: 'V', value: 'The citizens of the Rogue Isles have begun a petition to make a statue in your name.' },
    {
      alignment: 'P', value: 'There is an urban legend floating around Praetoria that one day you will return, and on that '
        + 'day Praetoria will change forever. You\'re kind of flattered.',
    },
  ],
  acquisition: 'Earn 250,000,000 influence',
  links: [
    { title: 'Popular Badge', href: 'https://homecoming.wiki/wiki/Popular_Badge' },
    { title: 'Living Legend Badge', href: 'https://homecoming.wiki/wiki/Living_Legend_Badge' },
  ],
  icon: [
    { alignment: 'H', value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/inf-h.png' },
    { alignment: 'V', value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/inf-v.png' },
  ],
}
