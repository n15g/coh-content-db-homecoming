import { BadgeData } from 'coh-content-db'

export const Indestructible: BadgeData = {
  type: 'achievement',
  key: 'indestructible',
  setTitleId: [9, 1675],
  name: [
    { alignment: 'hero', value: 'Indestructible' },
    { alignment: 'villain', value: 'Hard Case' },
    { alignment: 'praetorian', value: 'Big Dog' },
  ],
  morality: 'all',
  badgeText: [
    { alignment: 'hero', value: 'Over the course of your career, you have taken five hundred thousand points of damage.' },
    { alignment: 'villain', value: `You can dish it out, and you can take it. You've soaked over five hundred thousand points of damage.` },
    { alignment: 'praetorian', value: `Like a big red punching bag, you take a beating but can't seem to call it quits.` },
  ],
  acquisition: 'Endure 500,000 points of damage.',
  links: [
    { title: 'Indestructible Badge', href: 'https://homecoming.wiki/wiki/Indestructible_Badge' },
    { title: 'Hard Case Badge', href: 'https://homecoming.wiki/wiki/Hard_Case_Badge' },
    { title: 'Big Dog Badge', href: 'https://homecoming.wiki/wiki/Big_Dog_Badge' },
  ],
  icon: [
    { alignment: 'hero', value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/dmg-in-h.png' },
    { alignment: 'villain', value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/dmg-in-v.png' },
  ],
}
