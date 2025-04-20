import { BadgeData, zoneLink } from 'coh-content-db'
import { PerezPark } from '../../zone/perez-park'

export const Unleasher: BadgeData = {
  type: 'defeat',
  key: 'unleasher',
  setTitleId: [181],
  name: 'Unleasher',
  releaseDate: '2012-11-30',
  morality: 'heroic',
  badgeText: 'The Kraken was unleashed, but your might has put it down for another day.',
  acquisition: `Defeat the Kraken, a monster that spawns in ${zoneLink(PerezPark)}.`,
  links: [
    { title: 'Unleasher Badge', href: 'https://homecoming.wiki/wiki/Unleasher_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/defeat/unleasher.png',
}
