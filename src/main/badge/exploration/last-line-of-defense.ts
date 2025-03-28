import { BadgeData, zoneLink } from 'coh-content-db'
import { TalosIsland } from '../../zone/talos-island'

export const LastLineOfDefense: BadgeData = {
  type: 'EXPLORATION',
  key: 'last-line-of-defense',
  setTitle: { id: 1546 },
  name: [{ value: 'Last Line of Defense' }],
  alignment: ['H'],
  zoneKey: TalosIsland.key,
  loc: [-965, 228, 6909],
  badgeText: [{
    value: 'During the Second Rikti War, this hill was used by heroes as a gathering point to fight off the Rikti in Talos.'
      + ' Despite the large Rikti numbers, the heroes managed to repel them time after time from this very spot, allowing the rest of Talos Island\'s citizens to get to safety.',
  }],
  notes: `Located on top of the large hill in ${zoneLink(TalosIsland)}, just northwest of the Ouroboros teleport beacon, 169 yards north of the Green Line station.`,
  links: [
    { title: 'Last Line of Defense Badge', href: 'https://homecoming.wiki/wiki/Last_Line_of_Defense_Badge' },
  ],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hero.png' }],
  vidiotMapKey: '4',
}
