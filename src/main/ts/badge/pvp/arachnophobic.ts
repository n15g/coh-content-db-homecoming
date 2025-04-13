import { BadgeData, zoneLink } from 'coh-content-db'
import { ReclusesVictory } from '../../zone/recluses-victory'

export const Arachnophobic: BadgeData = {
  type: 'pvp',
  key: 'arachnophobic',
  setTitleId: [580],
  name: 'Arachnophobic',
  morality: 'heroic',
  badgeText: `You have helped defeat Lord Recluse in Recluse's Victory.`,
  acquisition: `Defeat Lord Recluse in ${zoneLink(ReclusesVictory)}.`,
  links: [
    { title: 'Arachnophobic Badge', href: 'https://homecoming.wiki/wiki/Arachnophobic_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/pvp/defeatrecluse.png',
}
