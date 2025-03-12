import { BadgeData } from 'coh-content-db'

export const HeroOfTheCity: BadgeData = {
  type: 'ACHIEVEMENT',
  key: 'hero-of-the-city',
  setTitle: { id: 25, praetorianId: 1673 },
  name: [
    { alignment: 'H', value: 'Hero of the City' },
    { alignment: 'V', value: 'Made' },
    { alignment: 'P', value: 'Praetor' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [
    { alignment: 'H', value: 'Positron has awarded you this badge for achieving Security Level 50.' },
    { alignment: 'V', value: 'Arachnos has awarded you the Made Badge for reaching Level 50.' },
    {
      alignment: 'P', value: 'Even Emperor Cole would have to admit you would make a fine Praetor. You can feel the time of '
        + 'reckoning drawing near...',
    },
  ],
  acquisition: 'Reach level 50',
  links: [
    { title: 'Hero of the City Badge', href: 'https://homecoming.wiki/wiki/Hero_of_the_City_Badge' },
    { title: 'Made Badge', href: 'https://homecoming.wiki/wiki/Made_Badge' },
    { title: 'Praetor Badge', href: 'https://homecoming.wiki/wiki/Praetor_Badge' },
  ],
  icon: [
    { alignment: 'H', value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/hero-of-the-city-h.png' },
    { alignment: 'V', value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/hero-of-the-city-v.png' },
  ],
}
