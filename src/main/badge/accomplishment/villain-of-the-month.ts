import { BadgeData } from 'coh-content-db'

export const VillainOfTheMonth: BadgeData = {
  type: 'ACCOMPLISHMENT',
  key: 'villain-of-the-month',
  setTitle: { id: 2259 },
  name: [
    { value: 'Villain of the Month' },
  ],
  alignment: ['V'],
  badgeText: [
    {
      value: 'You publically put down every attempt on your life, and then smashed apart Wu Yin\'s entire '
        + 'operation. The public is calling you the \'Villain of the Month\'.',
    },
  ],
  acquisition: 'Complete the second story arc from Mr. G (Primal Earth)',
  links: [
    { title: 'Villain of the Month Badge', href: 'https://homecoming.wiki/wiki/Villain_of_the_Month_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/st-martial-arc.png' },
  ],
}
