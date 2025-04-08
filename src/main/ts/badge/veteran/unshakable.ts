import { BadgeData } from 'coh-content-db'

export const Unshakable: BadgeData = {
  type: 'veteran',
  key: 'unshakable',
  setTitleId: [1609],
  name: 'Unshakable',
  morality: 'all',
  badgeText: [
    { alignment: 'hero', value: `Nothing can keep a hero like you down. Try as villains might, you're just unshakable. You have attained ninety Veteran levels.` },
    { alignment: 'villain', value: `Nothing can keep a villain like you down. Try as heroes might, you're just unshakable. You have attained ninety Veteran levels.` },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/veteran/unshakable.png',
  acquisition: 'Reach Veteran level 90',
}
