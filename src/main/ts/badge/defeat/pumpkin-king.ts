import { BadgeData, zoneLink } from 'coh-content-db'
import { Croatoa } from '../../zone/croatoa'

export const PumpkinKing: BadgeData = {
  type: 'defeat',
  key: 'pumpkin-king',
  setTitleId: [429],
  name: [
    { sex: 'M', value: 'Pumpkin King' },
    { sex: 'F', value: 'Pumpkin Queen' },
  ],
  releaseDate: '2012-11-30',
  morality: 'heroic',
  badgeText: 'The king is dead. Long live the king!',
  acquisition: `Defeat Eochai, a monster that spawns in ${zoneLink(Croatoa)}.`,
  links: [
    { title: 'Pumpkin King Badge', href: 'https://homecoming.wiki/wiki/Pumpkin_King_Badge' },
    { title: 'Pumpkin Queen Badge', href: 'https://homecoming.wiki/wiki/Pumpkin_Queen_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/defeat/pumpkin-king.png',
}
