import { BadgeData, zoneLink } from 'coh-content-db'
import { ReclusesVictory } from '../../zone/recluses-victory'

export const Poltergeist: BadgeData = {
  type: 'pvp',
  key: 'poltergeist',
  setTitleId: [582],
  name: 'Poltergeist',
  releaseDate: '2012-11-30',
  morality: 'heroic',
  badgeText: `You have helped defeat Ghost Widow in Recluse's Victory.`,
  acquisition: `Defeat Ghost Widow in ${zoneLink(ReclusesVictory)}.`,
  links: [
    { title: 'Poltergeist Badge', href: 'https://homecoming.wiki/wiki/Poltergeist_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/pvp/poltergeist.png',
}
