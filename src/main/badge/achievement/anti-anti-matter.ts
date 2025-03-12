import { BadgeData } from 'coh-content-db'

export const AntiAntiMatter: BadgeData = {
  type: 'ACHIEVEMENT',
  key: 'anti-anti-matter',
  setTitle: { id: 1990 },
  name: [
    { value: 'Anti-Anti-Matter' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [
    {
      value: 'You didn\'t defeat Anti-Matter when you weren\'t supposed to during the Keyes Island Reactor, '
        + 'but you came really close and still toughed it out.',
    },
  ],
  acquisition: 'Complete the Keyes Island Reactor Trial after having brought Anti-Matter below 10% of his health while attempting to take control of Reactor Hope',
  links: [
    { title: 'Anti-Anti-Matter Badge', href: 'https://homecoming.wiki/wiki/Anti-Anti-Matter_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/it-keyes.png' },
  ],
}
