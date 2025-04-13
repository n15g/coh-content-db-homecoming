import { BadgeData, zoneLink } from 'coh-content-db'
import { ReclusesVictory } from '../../zone/recluses-victory'

export const Destroyer: BadgeData = {
  type: 'pvp',
  key: 'destroyer',
  setTitleId: [575],
  name: 'Destroyer',
  morality: 'villainous',
  badgeText: `You have helped defeat Positron in Recluse's Victory.`,
  acquisition: `Defeat Positron in ${zoneLink(ReclusesVictory)}.`,
  links: [
    { title: 'Destroyer Badge', href: 'https://homecoming.wiki/wiki/Destroyer_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/pvp/destroyer.png',
}
