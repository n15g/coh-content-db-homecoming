import { BadgeData } from 'coh-content-db'
import { TalosIsland } from '../../zone/talos-island'

export const Whitecap: BadgeData = {
  type: 'exploration',
  key: 'whitecap',
  setTitleId: [127],
  name: 'Whitecap',
  morality: 'paragon-city-access',
  badgeText: `The cargo ship Alba Varden tends to be a hotbed of criminal activity.`,
  notes: `Located on a ship in the sea northeast of the main island, approximately 630 yards east of the Ithaca Island marker. The badge is on top of the cabin.`,
  links: [
    { title: 'Whitecap Badge', href: 'https://homecoming.wiki/wiki/Whitecap_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hero.png',
  requirements: [
    { key: 'loc-0', type: 'location', location: { zoneKey: TalosIsland.key, coords: [-5613, 80, 1855], icon: 'badge', iconText: '3' } },
  ],
}
