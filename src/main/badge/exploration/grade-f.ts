import { BadgeData, mapLink } from 'coh-content-db'
import { UndergroundNeutropolis } from '../../map/underground-neutropolis'

export const GradeF: BadgeData = {
  type: 'EXPLORATION',
  key: 'grade-f',
  setTitle: { id: 1744 },
  name: [{ value: 'Grade F' }],
  alignment: ['H', 'V', 'P'],
  mapKey: UndergroundNeutropolis.key,
  loc: [-3050, -1248, -2239],
  badgeText: [{
    value: 'For some reason, you can usually find Failed Experiments in this area.'
      + ' Rumor has it that previously this room was used as part of their indoctrination and training phase.'
      + ' Maybe they still remember it in what\'s left of their broken minds.',
  }],
  notes: `Located in ${mapLink(UndergroundNeutropolis)} approximately 90 yards NNE of the Eastern Sector B marker (there are two) by the Imperial Tunnel entrance.

          The route from the Sector B marker is not direct and the badge is more easily found by travelling 285 yards SE from the Loyalist Surface Access marker.`,
  links: [
    { title: 'Grade F Badge', href: 'https://homecoming.wiki/wiki/Grade_F_Badge' },
  ],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/praetorian.png' }],
  vidiotMapKey: '4',
}
