import { BadgeData } from 'coh-content-db'
import { MonsterIsland } from '../../map/monster-island'
import { Grandville } from '../../map/grandville'

export const MonsterIslander: BadgeData = {
  type: 'EXPLORATION',
  key: 'monster-islander',
  setTitle: { id: 1868 },
  name: [{ value: 'Monster Islander' }],
  alignment: ['V'],
  mapKey: MonsterIsland.key,
  loc: [-2437, 1, -8276],
  badgeText: [{
    value: `You've set foot on soil now the domain of ravaging monstrosities. You take a deep breath and catch a scent of their spoor.
It is harsh with a slaughterhouse reek. At your feet you see that you are standing in the massive footprint of one of the island's inhabitants.
Impressive. Against the horizon you catch a hulking silhouette ambling slowly towards some unknown destination.
Squaring your shoulders, you set out; it is time you showed them that a new monster prowls the island. Just as fierce and twice as deadly.`,
  }],
  notes: `Located in [map:${MonsterIsland.key}], 68 yards southwest of the [map:${Grandville.key}] transfer point, in the center of the hospital island next to the submarine.`,
  links: [
    { title: 'Monster Islander Badge', href: 'https://homecoming.wiki/wiki/Monster_Islander_Badge' },
  ],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hazard.png' }],
  vidiotMapKey: '1',
}
