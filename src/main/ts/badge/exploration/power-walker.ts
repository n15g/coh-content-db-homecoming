import { BadgeData } from 'coh-content-db'
import { TerraVolta } from '../../zone/terra-volta'

export const PowerWalker: BadgeData = {
  type: 'exploration',
  key: 'power-walker',
  setTitleId: [1840],
  name: 'Power Walker',
  releaseDate: '2012-11-30',
  morality: 'paragon-city-access',
  badgeText: `The Walker Energy condensate plant stands at the strategic center of the Terra Volta complex, and as such has become a hotly contested site between the Freakshow and the Sky Raiders.
Gaining control of this building places one within ideal striking distance to any other location in Terra Volta and so the fighting here is especially fierce.`,
  notes: `Located 174 yards NE of the Gordon Trench marker, on the roof of the building.`,
  links: [
    { title: 'Power Walker Badge', href: 'https://homecoming.wiki/wiki/Power_Walker_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hazard.png',
  requirements: [
    { key: 'loc-0', type: 'location', location: { zoneKey: TerraVolta.key, coords: [888, 159, -5332], icon: 'badge', iconText: '7' } },
  ],
}
