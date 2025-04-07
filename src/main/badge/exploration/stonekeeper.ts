import { BadgeData, zoneLink } from 'coh-content-db'
import { StMartial } from '../../zone/st-martial'

export const Stonekeeper: BadgeData = {
  type: 'exploration',
  key: 'stonekeeper',
  setTitleId: [281],
  name: 'Stonekeeper',
  morality: 'villainous',
  zoneKey: StMartial.key,
  loc: [-2566, 119.8, 3000.5],
  badgeText: `What strange purpose do these glyphs serve?`,
  notes: `
Located in ${zoneLink(StMartial)}, in the Babylon neighborhood.

The marker is at ground level inside the southernmost obelisk located due southeast of the Golden Giza casino. The marker itself is not visible due to the obelisk.`,
  links: [
    { title: 'Stonekeeper Badge', href: 'https://homecoming.wiki/wiki/Stonekeeper_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/villain.png',
  vidiotMapKey: '3',
}
