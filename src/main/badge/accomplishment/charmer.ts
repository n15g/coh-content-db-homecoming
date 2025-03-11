import { BadgeData } from 'coh-content-db'

export const Charmer: BadgeData = {
  type: 'ACCOMPLISHMENT',
  key: 'charmer',
  setTitle: { id: 69 },
  name: [
    { value: 'Charmer' },
  ],
  alignment: ['H'],
  badgeText: [
    { value: 'You have defeated the Hydra, a major threat to the sewer network of Paragon City.' },
  ],
  acquisition: 'Complete the Abandoned Sewers Trial',
  links: [
    { title: 'Charmer Badge', href: 'https://homecoming.wiki/wiki/Charmer_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/trial-1.png' },
  ],
}
