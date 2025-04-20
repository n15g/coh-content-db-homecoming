import { BadgeData } from 'coh-content-db'
import { UndergroundImperial } from '../../zone/underground-imperial'

export const Condemning: BadgeData = {
  type: 'exploration',
  key: 'condemning',
  setTitleId: [1646],
  name: 'Condemning',
  releaseDate: '2012-11-30',
  morality: 'all',
  badgeText: `It is no small thing to make the long perilous journey to the levels beneath the Behavioral Adjustment Facility.
The route is filled with hostile PPD trained to shoot first and never ask questions.
You have entered a realm that is the last many will see: Do you seek to free the condemned from their fate, or facilitate their demise?`,
  notes: `Located on the ferry barge in the furthest north room, just east of the crates.`,
  links: [
    { title: 'Condemning Badge', href: 'https://homecoming.wiki/wiki/Condemning_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/praetorian.png',
  requirements: [
    { key: 'loc-0', type: 'location', location: { zoneKey: UndergroundImperial.key, coords: [-815, 330, -6169], icon: 'badge', iconText: '2' } },
  ],
}
