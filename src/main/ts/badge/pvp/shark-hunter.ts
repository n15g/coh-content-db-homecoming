import { BadgeData, zoneLink } from 'coh-content-db'
import { ReclusesVictory } from '../../zone/recluses-victory'

export const SharkHunter: BadgeData = {
  type: 'pvp',
  key: 'shark-hunter',
  setTitleId: [584],
  name: 'Shark Hunter',
  releaseDate: '2012-11-30',
  morality: 'heroic',
  badgeText: `You have helped defeat Captain Mako in Recluse's Victory.`,
  acquisition: `Defeat Captain Mako in ${zoneLink(ReclusesVictory)}.`,
  links: [
    { title: 'Shark Hunter Badge', href: 'https://homecoming.wiki/wiki/Shark_Hunter_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/pvp/shark-hunter.png',
}
