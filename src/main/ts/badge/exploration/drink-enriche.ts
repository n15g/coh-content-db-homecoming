import { BadgeData } from 'coh-content-db'
import { UndergroundNeutropolis } from '../../zone/underground-neutropolis'

export const DrinkEnriche: BadgeData = {
  type: 'exploration',
  key: 'drink-enriche',
  setTitleId: [1743],
  name: 'Drink Enriche!',
  morality: 'all',
  badgeText: `Careful study of the bowels of the Water Treatment Facility reveals two output pipes.
One flows directly into the Praetorian water system. The other pipe ends at the Enriche Bottling Plant in Neutropolis. Curious...`,
  notes: `Located approx. 337 yards SSE of the Resistance Surface Access, near the bottom left corner of the series of red tunnels on the map.`,
  links: [
    { title: 'Drink Enriche! Badge', href: 'https://homecoming.wiki/wiki/Drink_Enriche!_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/praetorian.png',
  requirements: [
    { key: 'loc-0', type: 'location', location: { zoneKey: UndergroundNeutropolis.key, coords: [-1231, -1249, -1316], icon: 'badge', iconText: '3' } },
  ],
}
