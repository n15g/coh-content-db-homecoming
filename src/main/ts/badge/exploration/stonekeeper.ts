import { BadgeData } from 'coh-content-db'
import { StMartial } from '../../zone/st-martial'

export const Stonekeeper: BadgeData = {
  type: 'exploration',
  key: 'stonekeeper',
  setTitleId: [281],
  name: 'Stonekeeper',
  releaseDate: '2012-11-30',
  morality: 'rogue-isles-access',
  badgeText: `What strange purpose do these glyphs serve?`,
  notes: `Located in the Babylon neighborhood, at ground level inside the southernmost obelisk due southeast of the Golden Giza casino. The marker itself is not visible due to the obelisk.`,
  links: [
    { title: 'Stonekeeper Badge', href: 'https://homecoming.wiki/wiki/Stonekeeper_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/villain.png',
  requirements: [
    { key: 'loc-0', type: 'location', location: { zoneKey: StMartial.key, coords: [-2566, 119.8, 3000.5], icon: 'badge', iconText: '3' } },
  ],
}
