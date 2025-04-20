import { BadgeData } from 'coh-content-db'
import { PortOakes } from '../../zone/port-oakes'

export const ScurvyDog: BadgeData = {
  type: 'exploration',
  key: 'scurvy-dog',
  setTitleId: [251],
  name: 'Scurvy Dog',
  releaseDate: '2012-11-30',
  morality: 'rogue-isles-access',
  badgeText: `The owner of Blackbeard's pub is rumored to have sent more than one patron to Davey Jones locker.`,
  notes: `Located on Blackbeard's Pub, a shack near Drea the Hook in the Dockside neighborhood, approximately 190 yards south and slightly east of the Dockside marker.

The badge marker is on the southwest side of the building, atop a small landing supported by corrugated metal.`,
  links: [
    { title: 'Scurvy Dog Badge', href: 'https://homecoming.wiki/wiki/Scurvy_Dog_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/villain.png',
  requirements: [
    { key: 'loc-0', type: 'location', location: { zoneKey: PortOakes.key, coords: [-2852, 82, 1216], icon: 'badge', iconText: '1' } },
  ],
}
