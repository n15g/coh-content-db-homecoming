import { BadgeData, zoneLink } from 'coh-content-db'
import { FirebaseZulu } from '../../zone/firebase-zulu'

export const ShardLeaper: BadgeData = {
  type: 'exploration',
  key: 'shard-leaper',
  setTitleId: [1804],
  name: 'Shard Leaper',
  morality: 'heroic',
  zoneKey: FirebaseZulu.key,
  loc: [-202, 1013, 2285],
  badgeText: [{
    value: 'It is an odd coincidence that the soldiers manning Point Sierra are composed of units drawn from Mountaineering Corps.'
      + ' One of the ways by which they welcome new recruits to their station is to take a "hop" over to the neighboring shard for a quick strike-and-fade attack against the enemy.'
      + ' They welcome you to do the same.',
  }],
  notes: `Located in ${zoneLink(FirebaseZulu)} 423 yards NW of the Point Sierra marker, on the north side of the small island.`,
  links: [
    { title: 'Shard Leaper Badge', href: 'https://homecoming.wiki/wiki/Shard_Leaper_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hazard.png',
  vidiotMapKey: '8',
}
