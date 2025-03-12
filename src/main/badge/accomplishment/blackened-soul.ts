import { BadgeData } from 'coh-content-db'

export const BlackenedSoul: BadgeData = {
  type: 'ACCOMPLISHMENT',
  key: 'blackened-soul',
  setTitle: { id: 2018 },
  name: [
    { value: 'Blackened Soul' },
  ],
  alignment: ['V'],
  badgeText: [
    {
      value: 'Having won the contest by besting your rivals, you\'ve been given the task of now dealing with '
        + 'them... permanently.',
    },
  ],
  acquisition: 'Complete the Level 10-14 Ongoing Training story arc from Dr. Graves',
  links: [
    { title: 'Blackened Soul Badge', href: 'https://homecoming.wiki/wiki/Blackened_Soul_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/blackened-soul.png' },
  ],
}
