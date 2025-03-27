import { BadgeData, mapLink } from 'coh-content-db'
import { PortOakes } from '../../map/port-oakes'

export const Driller: BadgeData = {
  type: 'EXPLORATION',
  key: 'driller',
  setTitle: { id: 254 },
  name: [{ value: 'Driller' }],
  alignment: ['V'],
  mapKey: PortOakes.key,
  loc: [1030, 8, 1982],
  badgeText: [{
    value: `Three years ago, Ms. Liberty smashed the supervillain Thermonuke through the deck and into the volatile crude below.
 Thermonuke's devastating powers ignited the oil and cracked open the Cairo Queen like a pixie stick.`,
  }],
  notes: `Located in ${mapLink(PortOakes)}, on a sunken ship off the southwest coast.

The marker is almost where the water comes over the deck.`,
  links: [
    { title: 'Driller Badge', href: 'https://homecoming.wiki/wiki/Driller_Badge' },
  ],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/villain.png' }],
  vidiotMapKey: '4',
}
