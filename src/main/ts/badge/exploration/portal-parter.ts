import { BadgeData, zoneLink } from 'coh-content-db'
import { PeregrineIsland } from '../../zone/peregrine-island'
import { TalosIsland } from '../../zone/talos-island'

export const PortalParter: BadgeData = {
  type: 'exploration',
  key: 'portal-parter',
  setTitleId: [144],
  name: 'Portal Parter',
  morality: 'paragon-city-access',
  badgeText: `This R&D facility suffered one too many accidents and has since fallen into ruin.`,
  notes: `Located on a small island, approx. 834 yards southwest of the ${zoneLink(TalosIsland)} Ferry,
and the marker is located in the center of the grassy area, between the rock outcropping and the large electrical tower.`,
  links: [
    { title: 'Portal Parter Badge', href: 'https://homecoming.wiki/wiki/Portal_Parter_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hero.png',
  requirements: [
    { key: 'loc-0', type: 'location', location: { zoneKey: PeregrineIsland.key, coords: [3045, 0, 1287], icon: 'badge', iconText: '1' } },
  ],
}
