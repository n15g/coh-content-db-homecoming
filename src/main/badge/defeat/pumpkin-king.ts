import { BadgeData } from 'coh-content-db'

export const PumpkinKing: BadgeData = {
  type: 'DEFEAT',
  key: 'pumpkin-king',
  setTitle: { id: 429 },
  name: [
    { sex: 'M', value: 'Pumpkin King' },
    { sex: 'F', value: 'Pumpkin Queen' },
  ],
  alignment: ['H'],
  badgeText: [
    { value: 'The king is dead. Long live the king!' },
  ],
  acquisition: 'Defeat Eochai, a monster that spawns in Croatoa',
  links: [
    { title: 'Pumpkin King Badge', href: 'https://homecoming.wiki/wiki/Pumpkin_King_Badge' },
    { title: 'Pumpkin Queen Badge', href: 'https://homecoming.wiki/wiki/Pumpkin_Queen_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/defeat/pumpkin-king.png' },
  ],
}
