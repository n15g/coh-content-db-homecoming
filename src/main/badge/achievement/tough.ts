import { BadgeData } from 'coh-content-db'

export const Tough: BadgeData = {
  type: 'achievement',
  key: 'tough',
  setTitleId: [8, 1674],
  name: [
    { alignment: 'hero', value: 'Tough' },
    { alignment: 'villain', value: 'Stoic' },
    { alignment: 'praetorian', value: 'Slammer' },
  ],
  morality: 'all',
  badgeText: [
    { alignment: 'hero', value: `You have endured one hundred thousand points of damage and are still dauntless in your pursuit of justice.` },
    { alignment: 'villain', value: `Way to take it like a man, tough guy. You've taken one hundred thousand points of damage.` },
    { alignment: 'praetorian', value: `You've taken such a beating the Resistance would certainly call you a Slammer. (One who can't be slammed).` },
  ],
  acquisition: 'Endure 100,000 points of damage.',
  links: [
    { title: 'Tough Badge', href: 'https://homecoming.wiki/wiki/Tough_Badge' },
    { title: 'Stoic Badge', href: 'https://homecoming.wiki/wiki/Stoic_Badge' },
    { title: 'Slammer Badge', href: 'https://homecoming.wiki/wiki/Slammer_Badge' },
  ],
  icon: [
    { alignment: 'hero', value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/dmg-in-h.png' },
    { alignment: 'villain', value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/dmg-in-v.png' },
  ],
}
