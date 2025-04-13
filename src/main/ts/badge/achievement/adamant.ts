import { BadgeData } from 'coh-content-db'

export const Adamant: BadgeData = {
  type: 'achievement',
  key: 'adamant',
  setTitleId: [10, 1676],
  name: [
    { alignment: 'hero', value: 'Adamant' },
    { alignment: 'villain', sex: 'M', value: 'Ironman' },
    { alignment: 'villain', sex: 'F', value: 'Ironwoman' },
    { alignment: 'praetorian', value: 'Laughs it Off' },
  ],
  morality: 'all',
  badgeText: [
    { alignment: 'hero', value: 'You have endured one million points of damage.' },
    { alignment: 'villain', value: `Never let 'em see you bleed. That's a cool million points of damage.` },
    { alignment: 'praetorian', value: `One million damage? Nothing to you, it seems. Though you probably wouldn't want to take it in one blow...` },
  ],
  acquisition: 'Endure 1,000,000 points of damage.',
  links: [
    { title: 'Adamant Badge', href: 'https://homecoming.wiki/wiki/Adamant_Badge' },
    { title: 'Ironman Badge', href: 'https://homecoming.wiki/wiki/Ironman_Badge' },
    { title: 'Ironwoman Badge', href: 'https://homecoming.wiki/wiki/Ironwoman_Badge' },
    { title: 'Laughs it Off Badge', href: 'https://homecoming.wiki/wiki/Laughs_it_Off_Badge' },
  ],
  icon: [
    { alignment: 'hero', value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/dmg-in-h.png' },
    { alignment: 'villain', value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/dmg-in-v.png' },
  ],
}
