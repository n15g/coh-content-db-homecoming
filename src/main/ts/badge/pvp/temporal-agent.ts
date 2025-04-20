import { BadgeData, zoneLink } from 'coh-content-db'
import { ReclusesVictory } from '../../zone/recluses-victory'

export const TemporalAgent: BadgeData = {
  type: 'pvp',
  key: 'temporal-agent',
  setTitleId: [567],
  name: 'Temporal Agent',
  releaseDate: '2012-11-30',
  morality: 'all',
  badgeText: `You have controlled 10 Heavies in Recluse's Victory.`,
  acquisition: `Control 10 Heavies in ${zoneLink(ReclusesVictory)}.`,
  links: [
    { title: 'Temporal Agent Badge', href: 'https://homecoming.wiki/wiki/Temporal_Agent_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/pvp/temporal-agent.png',
}
