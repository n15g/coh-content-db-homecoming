import { BadgeData } from 'coh-content-db'

export const GiantKiller: BadgeData = {
  type: 'DEFEAT',
  key: 'giant-killer',
  setTitle: { id: 428 },
  name: [
    { value: 'Giant Killer' },
  ],
  alignment: ['H'],
  badgeText: [
    { value: 'You have felled the mighty Jack in Irons, earning the title Giant Killer.' },
  ],
  acquisition: 'Defeat Jack in Irons, a monster that spawns in Croatoa',
  links: [
    { title: 'Giant Killer Badge', href: 'https://homecoming.wiki/wiki/Giant_Killer_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/defeat/giant-killer.png' },
  ],
}
