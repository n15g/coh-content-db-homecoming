import { BadgeData } from 'coh-content-db'

export const Adamant: BadgeData = {
  type: 'ACHIEVEMENT',
  key: 'adamant',
  setTitle: { id: 10, praetorianId: 1676 },
  name: [
    { alignment: 'H', value: 'Adamant' },
    { alignment: 'V', sex: 'M', value: 'Ironman' },
    { alignment: 'V', sex: 'F', value: 'Ironwoman' },
    { alignment: 'P', value: 'Laughs it Off' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [
    { alignment: 'H', value: 'You have endured one million points of damage.' },
    { alignment: 'V', value: 'Never let \'em see you bleed. That\'s a cool million points of damage.' },
    {
      alignment: 'P', value: 'One million damage? Nothing to you, it seems. Though you probably wouldn\'t want to take it in '
        + 'one blow...',
    },
  ],
  acquisition: 'Endure 1,000,000 points of damage',
  links: [
    { title: 'Adamant Badge', href: 'https://homecoming.wiki/wiki/Adamant_Badge' },
    { title: 'Ironman Badge', href: 'https://homecoming.wiki/wiki/Ironman_Badge' },
    { title: 'Ironwoman Badge', href: 'https://homecoming.wiki/wiki/Ironwoman_Badge' },
    { title: 'Laughs it Off Badge', href: 'https://homecoming.wiki/wiki/Laughs_it_Off_Badge' },
  ],
  icon: [
    { alignment: 'H', value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/dmg-in-h.png' },
    { alignment: 'V', value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/dmg-in-v.png' },
  ],
}
