import { BadgeData } from 'coh-content-db'
import { StMartial } from '../../map/st-martial'

export const Stonekeeper: BadgeData = {
  type: 'EXPLORATION',
  key: 'stonekeeper',
  setTitle: { id: 281 },
  name: [{ value: 'Stonekeeper' }],
  alignment: ['V'],
  mapKey: StMartial.key,
  loc: [-2566, 119.8, 3000.5],
  badgeText: [{
    value: `What strange purpose do these glyphs serve?`,
  }],
  notes: `Located in [map:${StMartial.key}], in the Babylon neighborhood.

The marker is at ground level inside the southernmost obelisk located due southeast of the Golden Giza casino. The marker itself is not visible due to the obelisk.`,
  links: [
    { title: 'Stonekeeper Badge', href: 'https://homecoming.wiki/wiki/Stonekeeper_Badge' },
  ],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/villain.png' }],
  vidiotMapKey: '3',
}
