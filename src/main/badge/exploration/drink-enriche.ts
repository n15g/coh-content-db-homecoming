import { BadgeData, zoneLink } from 'coh-content-db'
import { UndergroundNeutropolis } from '../../zone/underground-neutropolis'

export const DrinkEnriche: BadgeData = {
  type: 'EXPLORATION',
  key: 'drink-enriche',
  setTitle: { id: 1743 },
  name: [{ value: 'Drink Enriche!' }],
  alignment: ['H', 'V', 'P'],
  zoneKey: UndergroundNeutropolis.key,
  loc: [-1231, -1249, -1316],
  badgeText: [{
    value: 'Careful study of the bowels of the Water Treatment Facility reveals two output pipes.'
      + ' One flows directly into the Praetorian water system. The other pipe ends at the Enriche Bottling Plant in Neutropolis. Curious...',
  }],
  notes: `Located in ${zoneLink(UndergroundNeutropolis)} approximately 337 yards SSE of the Resistance Surface Access, near the bottom left corner of the series of red tunnels on the map.`,
  links: [
    { title: 'Drink Enriche! Badge', href: 'https://homecoming.wiki/wiki/Drink_Enriche!_Badge' },
  ],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/praetorian.png' }],
  vidiotMapKey: '3',
}
