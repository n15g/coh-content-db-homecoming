import { BadgeData } from 'coh-content-db'

export const Agile: BadgeData = {
  type: 'ACCOMPLISHMENT',
  key: 'agile',
  setTitle: { id: 1059 },
  name: [
    { value: 'Agile' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [
    { value: 'You have taken the silver medal in the advanced ski course!  Now try for the gold.' },
  ],
  acquisition: 'Complete a ski run on the Advanced slope in under 1 minute during a Winter Event',
  links: [
    { title: 'Agile Badge', href: 'https://homecoming.wiki/wiki/Agile_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/ski-silver.png' },
  ],
}
