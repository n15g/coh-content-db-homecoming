import { BadgeData, zoneLink } from 'coh-content-db'
import { ReclusesVictory } from '../../zone/recluses-victory'

export const Breakneck: BadgeData = {
  type: 'pvp',
  key: 'breakneck',
  setTitleId: [578],
  name: 'Breakneck',
  morality: 'villainous',
  badgeText: `You have helped defeat Synapse in Recluse's Victory.`,
  acquisition: `Defeat Synapse in ${zoneLink(ReclusesVictory)}.`,
  links: [
    { title: 'Breakneck Badge', href: 'https://homecoming.wiki/wiki/Breakneck_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/pvp/breakneck.png',
}
