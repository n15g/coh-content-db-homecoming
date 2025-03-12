import { BadgeData } from 'coh-content-db'
import { UndergroundNeutropolis } from '../../map/underground-neutropolis'

export const Cluttered: BadgeData = {
  type: 'EXPLORATION',
  key: 'cluttered',
  setTitle: { id: 1742 },
  name: [{ value: 'Cluttered' }],
  alignment: ['H', 'V', 'P'],
  mapKey: UndergroundNeutropolis.key,
  loc: [-2539, -1216, -3033],
  badgeText: [{
    value: 'Praetor Berry\'s dizzying research speed accomplishes much, but tends to leave unfinished projects and prototypes in its wake.'
      + ' Some of those half-baked notions end up here. Occasionally, a few get up and walk away.',
  }],
  notes: 'Located in [map:underground-neutropolis] approximately 105 yds north of the Loyalist Sewer Access.',
  links: [
    { title: 'Cluttered Badge', href: 'https://homecoming.wiki/wiki/Cluttered_Badge' },
  ],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/praetorian.png' }],
  vidiotMapKey: '2',
}
