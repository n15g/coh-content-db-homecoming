import { BadgeData, zoneLink } from 'coh-content-db'
import { ReclusesVictory } from '../../zone/recluses-victory'

export const Uppercut: BadgeData = {
  type: 'pvp',
  key: 'uppercut',
  setTitleId: [579],
  name: 'Uppercut',
  releaseDate: '2012-11-30',
  morality: 'villainous',
  badgeText: `You have helped defeat Back Alley Brawler in Recluse's Victory.`,
  acquisition: `Defeat Back Alley Brawler in ${zoneLink(ReclusesVictory)}.`,
  links: [
    { title: 'Uppercut Badge', href: 'https://homecoming.wiki/wiki/Uppercut_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/pvp/uppercut.png',
}
