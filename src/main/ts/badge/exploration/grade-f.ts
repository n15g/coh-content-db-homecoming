import { BadgeData } from 'coh-content-db'
import { UndergroundNeutropolis } from '../../zone/underground-neutropolis'

export const GradeF: BadgeData = {
  type: 'exploration',
  key: 'grade-f',
  setTitleId: [1744],
  name: 'Grade F',
  releaseDate: '2012-11-30',
  morality: 'all',
  badgeText: `For some reason, you can usually find Failed Experiments in this area.
Rumor has it that previously this room was used as part of their indoctrination and training phase. Maybe they still remember it in what's left of their broken minds.`,
  notes: `Located approx. 90 yards NNE of the Eastern Sector B marker (there are two) by the Imperial Tunnel entrance.

The route from the Sector B marker is not direct and the badge is more easily found by travelling 285 yards SE from the Loyalist Surface Access marker.`,
  links: [
    { title: 'Grade F Badge', href: 'https://homecoming.wiki/wiki/Grade_F_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/praetorian.png',
  requirements: [
    { key: 'loc-0', type: 'location', location: { zoneKey: UndergroundNeutropolis.key, coords: [-3050, -1248, -2239], icon: 'badge', iconText: '4' } },
  ],
}
