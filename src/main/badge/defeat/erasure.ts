import { BadgeData } from 'coh-content-db'

export const Erasure: BadgeData = {
  type: 'DEFEAT',
  key: 'erasure',
  setTitle: { id: 2171 },
  name: [
    { value: 'Erasure' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [
    {
      value: 'You have washed away the memories of the ancestors, who have no place in the world of the '
        + 'living.',
    },
  ],
  acquisition: 'Defeat 100 points worth of Incarnate-level Tsoo',
  links: [
    { title: 'Erasure Badge', href: 'https://homecoming.wiki/wiki/Erasure_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/defeat/erasure.png' },
  ],
}
