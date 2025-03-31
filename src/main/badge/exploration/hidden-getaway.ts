import { BadgeData, zoneLink } from 'coh-content-db'
import { PortOakes } from '../../zone/port-oakes'

export const HiddenGetaway: BadgeData = {
  type: 'EXPLORATION',
  key: 'hidden-getaway',
  setTitle: { id: 1490 },
  name: [{ value: 'Hidden Getaway' }],
  alignment: ['V'],
  zoneKey: PortOakes.key,
  loc: [365, 128, -2424],
  badgeText: [{
    value: `When things became heated between rival families, heads of the Marcones have been known to hide in this cabin, sometimes using the nearby submarine to escape to better grounds.
Some say this may even be where the first monkey fight club was started.`,
  }],
  notes: `Located in ${zoneLink(PortOakes)}, in the Villa Montrose neighborhood.

It is at the front door of the remote house in the NW corner of the neighborhood, 590 yards west of the marker.`,
  links: [
    { title: 'Hidden Getaway Badge', href: 'https://homecoming.wiki/wiki/Hidden_Getaway_Badge' },
  ],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/villain.png' }],
  vidiotMapKey: '8',
}
