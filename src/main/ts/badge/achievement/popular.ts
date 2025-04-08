import { BadgeData } from 'coh-content-db'

export const Popular: BadgeData = {
  type: 'achievement',
  key: 'popular',
  setTitleId: [243, 1703],
  name: [
    { value: 'Popular' },
    { alignment: 'praetorian', value: 'Living Legend' },
  ],
  morality: 'all',
  badgeText: [
    { alignment: 'hero', value: 'The citizens of Paragon City have begun a petition to make a statue in your name.' },
    { alignment: 'villain', value: 'The citizens of the Rogue Isles have begun a petition to make a statue in your name.' },
    { alignment: 'praetorian', value: `There is an urban legend floating around Praetoria that one day you will return, and on that day Praetoria will change forever. You're kind of flattered.` },
  ],
  acquisition: 'Earn 250,000,000 influence.',
  links: [
    { title: 'Popular Badge', href: 'https://homecoming.wiki/wiki/Popular_Badge' },
    { title: 'Living Legend Badge', href: 'https://homecoming.wiki/wiki/Living_Legend_Badge' },
  ],
  icon: [
    { alignment: 'hero', value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/inf-h.png' },
    { alignment: 'villain', value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/inf-v.png' },
  ],
}
