import { BadgeData } from 'coh-content-db'

export const Superstar: BadgeData = {
  type: 'achievement',
  key: 'superstar',
  setTitleId: [7, 1701],
  name: [
    { alignment: 'hero', value: 'Superstar' },
    { alignment: 'villain', value: 'Midas Touch' },
    { alignment: 'praetorian', value: 'Illustrious' },
  ],
  morality: 'all',
  badgeText: [
    { alignment: 'hero', value: 'The citizens of Paragon City have begun a petition to make a statue in your name.' },
    { alignment: 'villain', value: `Every job you take seems to turn to gold. You've earned over ten million Infamy.` },
    { alignment: 'praetorian', value: `You've pieced together from bits of information that word of your exploits is spreading back to Praetoria in hushed whispers and classified reports.` },
  ],
  acquisition: 'Earn 10,000,000 influence.',
  links: [
    { title: 'Superstar Badge', href: 'https://homecoming.wiki/wiki/Superstar_Badge' },
    { title: 'Midas Touch Badge', href: 'https://homecoming.wiki/wiki/Midas_Touch_Badge' },
    { title: 'Illustrious Badge', href: 'https://homecoming.wiki/wiki/Illustrious_Badge' },
  ],
  icon: [
    { alignment: 'hero', value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/inf-h.png' },
    { alignment: 'villain', value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/inf-v.png' },
  ],
}
