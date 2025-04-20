import { BadgeData } from 'coh-content-db'
import { Boomtown } from '../../zone/boomtown'

export const VisionOfDespair: BadgeData = {
  type: 'exploration',
  key: 'vision-of-despair',
  setTitleId: [116],
  name: 'Vision of Despair',
  releaseDate: '2012-11-30',
  morality: 'paragon-city-access',
  badgeText: 'An unnatural feeling of dread permeates the area in what is now called the Pit of Despair.',
  notes: `Located in a dead-end pit 470 yards east of the Grenadier Village marker, between the Grenadier and Cannonade neighborhoods of Boomtown.
The badge is at the base of three high walls, next to an old dumpster.`,
  links: [
    { title: 'Vision of Despair Badge', href: 'https://homecoming.wiki/wiki/Vision_of_Despair_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hazard.png',
  requirements: [
    { key: 'loc-0', type: 'location', location: { zoneKey: Boomtown.key, coords: [-754, 0, -595], icon: 'badge', iconText: '3' } },
  ],
}
