import { BadgeData } from 'coh-content-db'
import { NervaArchipelago } from '../../map/nerva-archipelago'

export const UnethicalTourist: BadgeData = {
  type: 'EXPLORATION',
  key: 'unethical-tourist',
  setTitle: { id: 1501 },
  name: [{ value: 'Unethical Tourist' }],
  alignment: ['V'],
  mapKey: NervaArchipelago.key,
  loc: [-644, 16, 6712],
  badgeText: [{
    value: `Crey Corporation has been known to invite tourist groups to see the experiments caged in these pens.
They justify their actions by claiming the research is to better understand the various subjects contained here.`,
  }],
  notes: `Located in [map:${NervaArchipelago.key}], on the eastern island of the Crimson Cove neighborhood.

It is in the middle of the southwestern specimen hangar, 597 yards east of the neighborhood marker.`,
  links: [
    { title: 'Unethical Tourist Badge', href: 'https://homecoming.wiki/wiki/Unethical_Tourist_Badge' },
  ],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/villain.png' }],
  vidiotMapKey: '6',
}
