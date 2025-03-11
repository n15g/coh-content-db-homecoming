import { BadgeData } from 'coh-content-db'

export const Initiate: BadgeData = {
  type: 'ACCOMPLISHMENT',
  key: 'initiate',
  setTitle: { id: 1448 },
  name: [
    { value: 'Initiate' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [
    { value: 'You\'ve crafted your first Common Incarnate Ability earning yourself this badge.' },
  ],
  acquisition: 'Craft a common Incarnate Ability',
  links: [
    { title: 'Initiate Badge', href: 'https://homecoming.wiki/wiki/Initiate_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/initiate.png' },
  ],
}
