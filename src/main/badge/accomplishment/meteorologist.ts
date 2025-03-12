import { BadgeData } from 'coh-content-db'

export const Meteorologist: BadgeData = {
  type: 'ACCOMPLISHMENT',
  key: 'meteorologist',
  setTitle: { id: 83 },
  name: [
    { value: 'Meteorologist' },
  ],
  alignment: ['H'],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/meteorologist.png' }],
  badgeText: [
    { value: 'You have crushed Nemesis\' weather controlling equipment.' },
  ],
  acquisition: 'Complete the Defeat all foes in weather lab mission from Maxwell Christopher',
  links: [
    { title: 'Meteorologist Badge', href: 'https://homecoming.wiki/wiki/Meteorologist_Badge' },
  ],
}
