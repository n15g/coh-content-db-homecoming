import { BadgeData } from 'coh-content-db'

export const Exterminator: BadgeData = {
  type: 'ACCOMPLISHMENT',
  key: 'exterminator',
  setTitle: { id: 341 },
  name: [
    { value: 'Exterminator' },
  ],
  alignment: ['V'],
  badgeText: [
    { value: 'The Rikti are like vermin. Good thing you were around to clean \'em out.' },
  ],
  acquisition: 'Complete the Eliminate Kit\'Vul mission from Timothy Raymond',
  links: [
    { title: 'Exterminator Badge', href: 'https://homecoming.wiki/wiki/Exterminator_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/stature-6.png' },
  ],
}
