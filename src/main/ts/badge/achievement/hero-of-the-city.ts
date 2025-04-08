import { BadgeData } from 'coh-content-db'

export const HeroOfTheCity: BadgeData = {
  type: 'achievement',
  key: 'hero-of-the-city',
  setTitleId: [25, 1673],
  name: [
    { alignment: 'hero', value: 'Hero of the City' },
    { alignment: 'villain', value: 'Made' },
    { alignment: 'praetorian', value: 'Praetor' },
  ],
  morality: 'all',
  badgeText: [
    { alignment: 'hero', value: 'Positron has awarded you this badge for achieving Security Level 50.' },
    { alignment: 'villain', value: 'Arachnos has awarded you the Made Badge for reaching Level 50.' },
    { alignment: 'praetorian', value: 'Even Emperor Cole would have to admit you would make a fine Praetor. You can feel the time of reckoning drawing near...' },
  ],
  acquisition: 'Reach level 50.',
  links: [
    { title: 'Hero of the City Badge', href: 'https://homecoming.wiki/wiki/Hero_of_the_City_Badge' },
    { title: 'Made Badge', href: 'https://homecoming.wiki/wiki/Made_Badge' },
    { title: 'Praetor Badge', href: 'https://homecoming.wiki/wiki/Praetor_Badge' },
  ],
  icon: [
    { alignment: 'hero', value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/hero-of-the-city-h.png' },
    { alignment: 'villain', value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/hero-of-the-city-v.png' },
  ],
}
