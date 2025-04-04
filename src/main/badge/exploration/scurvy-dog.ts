import { BadgeData, zoneLink } from 'coh-content-db'
import { PortOakes } from '../../zone/port-oakes'

export const ScurvyDog: BadgeData = {
  type: 'exploration',
  key: 'scurvy-dog',
  setTitleId: [251],
  name: 'Scurvy Dog',
  morality: 'villainous',
  zoneKey: PortOakes.key,
  loc: [-2852, 82, 1216],
  badgeText: [{
    value: `The owner of Blackbeard's pub is rumored to have sent more than one patron to Davey Jones locker.`,
  }],
  notes: `Located in ${zoneLink(PortOakes)}, on Blackbeard's Pub, a shack located next to Drea the Hook in the Dockside neighborhood.

The pub is approximately 190 yeard south and slightly east of the Dockside marker, and the badge marker is on the southwest side of the building, on top of a small landing supported by corrugated metal..`,
  links: [
    { title: 'Scurvy Dog Badge', href: 'https://homecoming.wiki/wiki/Scurvy_Dog_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/villain.png',
  vidiotMapKey: '1',
}
