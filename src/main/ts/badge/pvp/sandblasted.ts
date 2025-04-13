import { BadgeData, zoneLink } from 'coh-content-db'
import { ReclusesVictory } from '../../zone/recluses-victory'

export const Sandblasted: BadgeData = {
  type: 'pvp',
  key: 'sandblasted',
  setTitleId: [583],
  name: 'Sandblasted',
  morality: 'heroic',
  badgeText: `You have helped defeat Scirocco in Recluse's Victory.`,
  acquisition: `Defeat Scirocco in ${zoneLink(ReclusesVictory)}.`,
  links: [
    { title: 'Sandblasted Badge', href: 'https://homecoming.wiki/wiki/Sandblasted_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/pvp/sandblasted.png',
}
