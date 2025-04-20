import { BadgeData, zoneLink } from 'coh-content-db'
import { ReclusesVictory } from '../../zone/recluses-victory'

export const TemporalSoldier: BadgeData = {
  type: 'pvp',
  key: 'temporal-soldier',
  setTitleId: [569],
  name: 'Temporal Soldier',
  releaseDate: '2012-11-30',
  morality: 'all',
  badgeText: `50 Heavies have been at your disposal in Recluse's Victory`,
  acquisition: `Control 50 Heavies in ${zoneLink(ReclusesVictory)}.`,
  links: [
    { title: 'Temporal Soldier Badge', href: 'https://homecoming.wiki/wiki/Temporal_Soldier_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/pvp/temporal-soldier.png',
}
