import { BadgeData } from 'coh-content-db'

export const Invulnerable: BadgeData = {
  type: 'achievement',
  key: 'invulnerable',
  setTitleId: [231, 1679],
  name: [
    { value: 'Invulnerable' },
    { alignment: 'praetorian', value: 'Marvel of Modern Medicine' },
  ],
  morality: 'all',
  badgeText: [
    { value: 'Some call you Invulnerable, based on the fact that you have survived fifty million points of damage.' },
    { alignment: 'praetorian', value: `Each day you're stunned at how much punishment you can take. Maybe it was all that Enriche... or maybe it was all that Beefy Pop.` },
  ],
  acquisition: 'Endure 50,000,000 points of damage.',
  links: [
    { title: 'Invulnerable Badge', href: 'https://homecoming.wiki/wiki/Invulnerable_Badge' },
    { title: 'Marvel of Modern Medicine Badge', href: 'https://homecoming.wiki/wiki/Marvel_of_Modern_Medicine_Badge' },
  ],
  icon: [
    { alignment: 'hero', value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/dmg-in-h.png' },
    { alignment: 'villain', value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/dmg-in-v.png' },
  ],
}
