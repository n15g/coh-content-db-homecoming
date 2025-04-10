import { BadgeData } from 'coh-content-db'
import { FirebaseZulu } from '../../zone/firebase-zulu'

export const ShardLeaper: BadgeData = {
  type: 'exploration',
  key: 'shard-leaper',
  setTitleId: [1804],
  name: 'Shard Leaper',
  morality: 'paragon-city-access',
  badgeText: `It is an odd coincidence that the soldiers manning Point Sierra are composed of units drawn from Mountaineering Corps.
One of the ways by which they welcome new recruits to their station is to take a "hop" over to the neighboring shard for a quick strike-and-fade attack against the enemy.
They welcome you to do the same.`,
  notes: `Located 423 yards NW of the Point Sierra marker, on the north side of the small island.`,
  links: [
    { title: 'Shard Leaper Badge', href: 'https://homecoming.wiki/wiki/Shard_Leaper_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hazard.png',
  requirements: [
    { key: 'loc-0', type: 'location', location: { zoneKey: FirebaseZulu.key, coords: [-202, 1013, 2285], icon: 'badge', iconText: '8' } },
  ],
}
