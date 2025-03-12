import { BadgeData } from 'coh-content-db'

export const MonsterMasher: BadgeData = {
  type: 'EVENT',
  key: 'monster-masher',
  setTitle: { id: 1370 },
  name: [
    { value: 'Monster Masher' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [
    { value: 'You helped thwart the schemes of the horrifying Abominations by destroying their Banner of Mayhem.' },
  ],
  acquisition: 'Defeat the Banner of Mayhem during a Deadly Apocalypse.',
  links: [
    { title: 'Monster Masher Badge', href: 'https://homecoming.wiki/wiki/Monster_Masher_Badge' },
  ],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/event/monster-masher.png' }],
}
