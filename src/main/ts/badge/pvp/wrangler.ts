import { BadgeData, zoneLink } from 'coh-content-db'
import { ReclusesVictory } from '../../zone/recluses-victory'

export const Wrangler: BadgeData = {
  type: 'pvp',
  key: 'wrangler',
  setTitleId: [581],
  name: 'Wrangler',
  morality: 'heroic',
  badgeText: `You have helped defeat Black Scorpion in Recluse's Victory.`,
  acquisition: `Defeat Black Scorpion in ${zoneLink(ReclusesVictory)}.`,
  links: [
    { title: 'Wrangler Badge', href: 'https://homecoming.wiki/wiki/Wrangler_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/pvp/wrangler.png',
}
