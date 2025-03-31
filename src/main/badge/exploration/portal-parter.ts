import { BadgeData, zoneLink } from 'coh-content-db'
import { PeregrineIsland } from '../../zone/peregrine-island'

export const PortalParter: BadgeData = {
  type: 'EXPLORATION',
  key: 'portal-parter',
  setTitle: { id: 144 },
  name: [{ value: 'Portal Parter' }],
  alignment: ['H'],
  zoneKey: PeregrineIsland.key,
  loc: [3045, 0, 1287],
  badgeText: [{
    value: 'This R&D facility suffered one too many accidents and has since fallen into ruin.',
  }],
  notes: `Located on a small island in the ${zoneLink(PeregrineIsland)} zone.

The island it is on is approximately 834 yards southwest of the Talos Island Ferry, and the marker is located in the center of the grassy area, between the rock outcropping and the large electrical tower.`,
  links: [
    { title: 'Portal Parter Badge', href: 'https://homecoming.wiki/wiki/Portal_Parter_Badge' },
  ],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hero.png' }],
  vidiotMapKey: '1',
}
