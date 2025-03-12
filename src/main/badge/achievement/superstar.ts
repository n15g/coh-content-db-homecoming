import { BadgeData } from 'coh-content-db'

export const Superstar: BadgeData = {
  type: 'ACHIEVEMENT',
  key: 'superstar',
  setTitle: { id: 7, praetorianId: 1701 },
  name: [
    { alignment: 'H', value: 'Superstar' },
    { alignment: 'V', value: 'Midas Touch' },
    { alignment: 'P', value: 'Illustrious' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [
    { alignment: 'H', value: 'The citizens of Paragon City have begun a petition to make a statue in your name.' },
    { alignment: 'V', value: 'Every job you take seems to turn to gold. You\'ve earned over ten million Infamy.' },
    {
      alignment: 'P', value: 'You\'ve pieced together from bits of information that word of your exploits is spreading back '
        + 'to Praetoria in hushed whispers and classified reports.',
    },
  ],
  acquisition: 'Earn 10,000,000 influence',
  links: [
    { title: 'Superstar Badge', href: 'https://homecoming.wiki/wiki/Superstar_Badge' },
    { title: 'Midas Touch Badge', href: 'https://homecoming.wiki/wiki/Midas_Touch_Badge' },
    { title: 'Illustrious Badge', href: 'https://homecoming.wiki/wiki/Illustrious_Badge' },
  ],
  icon: [
    { alignment: 'H', value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/inf-h.png' },
    { alignment: 'V', value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/inf-v.png' },
  ],
}
