import { BadgeData } from 'coh-content-db'

export const EnemyOfTheState: BadgeData = {
  type: 'ACCOMPLISHMENT',
  key: 'enemy-of-the-state',
  setTitle: { id: 2220 },
  name: [
    { value: 'Enemy of the State' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [
    { value: 'You have completed the Incarnate Trial: Magisterium.' },
  ],
  acquisition: 'Complete the Magisterium Trial',
  links: [
    { title: 'Enemy of the State Badge', href: 'https://homecoming.wiki/wiki/Enemy_of_the_State_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/enemy-of-the-state.png' },
  ],
}
