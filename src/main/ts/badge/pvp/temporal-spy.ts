import { BadgeData, zoneLink } from 'coh-content-db'
import { ReclusesVictory } from '../../zone/recluses-victory'

export const TemporalSpy: BadgeData = {
  type: 'pvp',
  key: 'temporal-spy',
  setTitleId: [568],
  name: 'Temporal Spy',
  releaseDate: '2012-11-30',
  morality: 'all',
  badgeText: `You have commanded 25 Heavies in Recluse's Victory.`,
  acquisition: `Control 25 Heavies in ${zoneLink(ReclusesVictory)}.`,
  links: [
    { title: 'Temporal Spy Badge', href: 'https://homecoming.wiki/wiki/Temporal_Spy_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/pvp/temporal-spy.png',
}
