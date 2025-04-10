import { BadgeData, zoneLink } from 'coh-content-db'
import { ReclusesVictory } from '../../zone/recluses-victory'

export const Interrogator: BadgeData = {
  type: 'pvp',
  key: 'interrogator',
  setTitleId: [577],
  name: 'Interrogator',
  morality: 'villainous',
  badgeText: `You have helped defeat Penelope Yin in Recluse's Victory.`,
  acquisition: `Defeat Penelope Yin in ${zoneLink(ReclusesVictory)}.`,
  links: [
    { title: 'Interrogator Badge', href: 'https://homecoming.wiki/wiki/Interrogator_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/pvp/interrogator.png',
}
