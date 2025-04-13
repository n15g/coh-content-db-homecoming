import { BadgeData } from 'coh-content-db'
import { SkywayCity } from '../../zone/skyway-city'

export const Solace: BadgeData = {
  type: 'exploration',
  key: 'solace',
  setTitleId: [111],
  name: 'Solace',
  morality: 'paragon-city-access',
  badgeText: `This was the location of Dr. Anguish's secret lab, uncovered by the Freedom Phalanx when he threatened to blow up Paragon City with a black market Soviet nuke.`,
  notes: `Located 116 yards due west of the Freedom Corp Basic Training store, on the southern border of the Astral District.

Walk around the left side of the store, following the wall along the district’s border until you reach a red truck. The badge marker is behind and just to the right of the truck.`,
  links: [
    { title: 'Solace Badge', href: 'https://homecoming.wiki/wiki/Solace_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hero.png',
  requirements: [
    { key: 'loc-0', type: 'location', location: { zoneKey: SkywayCity.key, coords: [2260, -84, -3367], icon: 'badge', iconText: '2' } },
  ],
}
