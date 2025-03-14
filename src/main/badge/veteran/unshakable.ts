import { BadgeData } from 'coh-content-db'

export const Unshakable: BadgeData = {
  type: 'VETERAN',
  key: 'unshakable',
  setTitle: { id: 1609 },
  name: [
    { value: 'Unshakable' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [
    { alignment: 'H', value: `Nothing can keep a hero like you down. Try as villains might, you're just unshakable. You have attained ninety Veteran levels.` },
    { alignment: 'V', value: `Nothing can keep a villain like you down. Try as heroes might, you're just unshakable. You have attained ninety Veteran levels.` },
  ],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/veteran/unshakable.png' }],
  acquisition: 'Reach Veteran level 90',
}
