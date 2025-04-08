import { BadgeData, zoneLink } from 'coh-content-db'
import { TalosIsland } from '../../zone/talos-island'
import { Ouroboros } from '../../zone/ouroboros'

export const LastLineOfDefense: BadgeData = {
  type: 'exploration',
  key: 'last-line-of-defense',
  setTitleId: [1546],
  name: 'Last Line of Defense',
  morality: 'paragon-city-access',
  badgeText: `During the Second Rikti War, this hill was used by heroes as a gathering point to fight off the Rikti in Talos.
Despite the large Rikti numbers, the heroes managed to repel them time after time from this very spot, allowing the rest of Talos Island's citizens to get to safety.`,
  notes: `Located on top of the large hill, just northwest of the ${zoneLink(Ouroboros)} teleport beacon, 169 yards north of the Green Line station.`,
  links: [
    { title: 'Last Line of Defense Badge', href: 'https://homecoming.wiki/wiki/Last_Line_of_Defense_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hero.png',
  requirements: [
    { key: 'loc-0', type: 'location', location: { zoneKey: TalosIsland.key, coords: [-965, 228, 6909] }, vidiotMapKey: '4' },
  ],
}
