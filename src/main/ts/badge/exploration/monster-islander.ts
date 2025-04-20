import { BadgeData, zoneLink } from 'coh-content-db'
import { MonsterIsland } from '../../zone/monster-island'
import { Grandville } from '../../zone/grandville'

export const MonsterIslander: BadgeData = {
  type: 'exploration',
  key: 'monster-islander',
  setTitleId: [1868],
  name: 'Monster Islander',
  releaseDate: '2012-11-30',
  morality: 'rogue-isles-access',
  badgeText: `You've set foot on soil now the domain of ravaging monstrosities. You take a deep breath and catch a scent of their spoor.
It is harsh with a slaughterhouse reek. At your feet you see that you are standing in the massive footprint of one of the island's inhabitants.
Impressive. Against the horizon you catch a hulking silhouette ambling slowly towards some unknown destination.
Squaring your shoulders, you set out; it is time you showed them that a new monster prowls the island. Just as fierce and twice as deadly.`,
  notes: `Located 68 yards southwest of the ${zoneLink(Grandville)} transfer point, in the center of the hospital island next to the submarine.`,
  links: [
    { title: 'Monster Islander Badge', href: 'https://homecoming.wiki/wiki/Monster_Islander_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hazard.png',
  requirements: [
    { key: 'loc-0', type: 'location', location: { zoneKey: MonsterIsland.key, coords: [-2437, 1, -8276], icon: 'badge', iconText: '1' } },
  ],
}
