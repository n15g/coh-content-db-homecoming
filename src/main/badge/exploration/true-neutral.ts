import { BadgeData } from 'coh-content-db'
import { ReclusesVictory } from '../../zone/recluses-victory'

export const TrueNeutral: BadgeData = {
  type: 'exploration',
  key: 'true-neutral',
  setTitleId: [2423],
  name: 'True Neutral',
  morality: 'all',
  badgeText: `Vanguard abandoned its Atlas Park outpost in this timeline, not willing to take sides between Freedom Corps and Arachnos. They continue to recruit metahumans of all alignments in their fight against alien threats.`,
  zoneKey: ReclusesVictory.key,
  loc: [-0.3, 16.3, 511.9],
  links: [
    { title: 'New PvP Exploration Badge List', href: 'https://forums.homecomingservers.com/topic/11053-new-pvp-exploration-badge-list/' },
  ],
  icon: [
    { alignment: 'hero', value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hero.png' },
    { alignment: 'villain', value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/villain.png' },
  ],
  vidiotMapKey: '6',
}
