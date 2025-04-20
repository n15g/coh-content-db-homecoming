import { BadgeData } from 'coh-content-db'
import { NervaArchipelago } from '../../zone/nerva-archipelago'

export const UnethicalTourist: BadgeData = {
  type: 'exploration',
  key: 'unethical-tourist',
  setTitleId: [1501],
  name: 'Unethical Tourist',
  releaseDate: '2012-11-30',
  morality: 'rogue-isles-access',
  badgeText: `Crey Corporation has been known to invite tourist groups to see the experiments caged in these pens. They justify their actions by claiming the research is to better understand the various subjects contained here.`,
  notes: `Located on the eastern island of the Crimson Cove neighborhood, in the middle of the southwestern specimen hangar, 597 yards east of the neighborhood marker.`,
  links: [
    { title: 'Unethical Tourist Badge', href: 'https://homecoming.wiki/wiki/Unethical_Tourist_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/villain.png',
  requirements: [
    { key: 'loc-0', type: 'location', location: { zoneKey: NervaArchipelago.key, coords: [-644, 16, 6712], icon: 'badge', iconText: '6' } },
  ],
}
