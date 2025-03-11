import { BadgeData } from 'coh-content-db'

export const BadLuck: BadgeData = {
  type: 'ACCOMPLISHMENT',
  key: 'bad-luck',
  setTitle: { id: 340 },
  name: [
    { value: 'Bad Luck' },
  ],
  alignment: ['V'],
  badgeText: [
    { value: 'You and Hard Luck recovered a mystical amulet designed to jinx everyone around the wearer.' },
  ],
  acquisition: 'Complete the The Unlucky Artifacts mission from Hard Luck',
  links: [
    { title: 'Bad Luck Badge', href: 'https://homecoming.wiki/wiki/Bad_Luck_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/stature-6.png' },
  ],
}
