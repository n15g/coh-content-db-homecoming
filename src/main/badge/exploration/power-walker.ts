import { BadgeData } from 'coh-content-db'
import { TerraVolta } from '../../zone/terra-volta'

export const PowerWalker: BadgeData = {
  type: 'EXPLORATION',
  key: 'power-walker',
  setTitle: { id: 1840 },
  name: [{ value: 'Power Walker' }],
  alignment: ['H'],
  zoneKey: TerraVolta.key,
  loc: [888, 159, -5332],
  badgeText: [{
    value: `The Walker Energy condensate plant stands at the strategic center of the Terra Volta complex, and as such has become a hotly contested site between the Freakshow and the Sky Raiders.
Gaining control of this building places one within ideal striking distance to any other location in Terra Volta and so the fighting here is especially fierce.`,
  }],
  notes: `174 yards NE of the Gordon Trench marker, on the roof of the building.`,
  links: [
    { title: 'Power Walker Badge', href: 'https://homecoming.wiki/wiki/Power_Walker_Badge' },
  ],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hazard.png' }],
  vidiotMapKey: '7',
}
