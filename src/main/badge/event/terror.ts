import { BadgeData } from 'coh-content-db'

export const Terror: BadgeData = {
  type: 'EVENT',
  key: 'terror',
  setTitle: { id: 1369 },
  name: [
    { value: 'Terror' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [
    { value: 'The legions of terrible spectral fiends that guarded their Banner of Terror were no match for you.' },
  ],
  acquisition: 'Defeat the Banner of Terror during a Deadly Apocalypse.',
  links: [
    { title: 'Terror Badge', href: 'https://homecoming.wiki/wiki/Terror_Badge' },
  ],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/event/terror.png' }],
}
