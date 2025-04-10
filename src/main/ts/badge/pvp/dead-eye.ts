import { BadgeData, zoneLink } from 'coh-content-db'
import { ReclusesVictory } from '../../zone/recluses-victory'

export const DeadEye: BadgeData = {
  type: 'pvp',
  key: 'dead-eye',
  setTitleId: [576],
  name: 'Dead-eye',
  morality: 'villainous',
  badgeText: `You have helped defeat Manticore in Recluse's Victory.`,
  acquisition: `Defeat Manticore in ${zoneLink(ReclusesVictory)}`,
  links: [
    { title: 'Dead-eye Badge', href: 'https://homecoming.wiki/wiki/Dead-eye_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/pvp/dead-eye.png',
}
