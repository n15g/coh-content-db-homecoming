import { BadgeData } from 'coh-content-db'

export const ShiningStar: BadgeData = {
  type: 'ACCOMPLISHMENT',
  key: 'shining-star',
  setTitle: { id: 2014 },
  name: [
    { value: 'Shining Star' },
  ],
  alignment: ['H'],
  badgeText: [
    { value: 'You and your friends have proven your worth to Manticore, and gained a high-profile benefactor.' },
  ],
  acquisition: 'Complete the Level 5-9 Ongoing Training story arc from Twinshot',
  links: [
    { title: 'Shining Star Badge', href: 'https://homecoming.wiki/wiki/Shining_Star_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/shining-star.png' },
  ],
}
