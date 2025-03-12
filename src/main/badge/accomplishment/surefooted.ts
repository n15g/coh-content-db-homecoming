import { BadgeData } from 'coh-content-db'

export const Surefooted: BadgeData = {
  type: 'ACCOMPLISHMENT',
  key: 'surefooted',
  setTitle: { id: 1060 },
  name: [
    { value: 'Surefooted' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [
    { value: 'You have taken the bronze medal in the advanced ski course!  Now try for the silver.' },
  ],
  acquisition: 'Complete a ski run on the Advanced slope in under 1 minute and 10 seconds during a Winter Event',
  links: [
    { title: 'Surefooted Badge', href: 'https://homecoming.wiki/wiki/Surefooted_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/ski-bronze.png' },
  ],
}
