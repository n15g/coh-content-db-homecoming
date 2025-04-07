import { BadgeData } from 'coh-content-db'
import { PortOakes } from '../../zone/port-oakes'

export const HiddenGetaway: BadgeData = {
  type: 'exploration',
  key: 'hidden-getaway',
  setTitleId: [1490],
  name: 'Hidden Getaway',
  morality: 'villainous',
  zoneKey: PortOakes.key,
  loc: [365, 128, -2424],
  badgeText: `When things became heated between rival families, heads of the Marcones have been known to hide in this cabin, sometimes using the nearby submarine to escape to better grounds.
Some say this may even be where the first monkey fight club was started.`,
  notes: `Located in the Villa Montrose neighborhood, at the front door of the remote house in the NW corner of the neighborhood, 590 yards west of the marker.`,
  links: [
    { title: 'Hidden Getaway Badge', href: 'https://homecoming.wiki/wiki/Hidden_Getaway_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/villain.png',
  vidiotMapKey: '8',
}
