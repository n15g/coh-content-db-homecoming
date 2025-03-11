import { BadgeData } from 'coh-content-db'

export const Promethean: BadgeData = {
  type: 'ACCOMPLISHMENT',
  key: 'promethean',
  setTitle: { id: 1982 },
  name: [
    { value: 'Promethean' },
  ],
  alignment: ['V'],
  badgeText: [
    {
      value: 'You manipulated Mortimer Kal into helping you acquire some of the Flames of Prometheus from '
        + 'Positron!',
    },
  ],
  acquisition: 'Complete the Mortimer Kal Strike Force',
  links: [
    { title: 'Promethean Badge', href: 'https://homecoming.wiki/wiki/Promethean_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/promethean.png' },
  ],
}
