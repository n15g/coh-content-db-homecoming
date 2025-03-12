import { BadgeData } from 'coh-content-db'

export const Transmogrified: BadgeData = {
  type: 'ACCOMPLISHMENT',
  key: 'transmogrified',
  setTitle: { id: 67 },
  name: [
    { value: 'Transmogrified' },
  ],
  alignment: ['H'],
  badgeText: [
    {
      value: 'You have succeeded in preventing the destruction of the Terra Volta reactor... but at what '
        + 'price?',
    },
  ],
  acquisition: 'Complete the Terra Volta respec trial and choose the respec reward for the first time',
  links: [
    { title: 'Transmogrified Badge', href: 'https://homecoming.wiki/wiki/Transmogrified_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/trial-1.png' },
  ],
}
