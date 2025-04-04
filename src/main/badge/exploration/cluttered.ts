import { BadgeData } from 'coh-content-db'
import { UndergroundNeutropolis } from '../../zone/underground-neutropolis'

export const Cluttered: BadgeData = {
  type: 'exploration',
  key: 'cluttered',
  setTitleId: [1742],
  name: 'Cluttered',
  morality: 'all',
  zoneKey: UndergroundNeutropolis.key,
  loc: [-2539, -1216, -3033],
  badgeText: `Praetor Berry's dizzying research speed accomplishes much, but tends to leave unfinished projects and prototypes in its wake.
Some of those half-baked notions end up here. Occasionally, a few get up and walk away.`,
  notes: `Located approx. 105 yds north of the Loyalist Sewer Access.`,
  links: [
    { title: 'Cluttered Badge', href: 'https://homecoming.wiki/wiki/Cluttered_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/praetorian.png',
  vidiotMapKey: '2',
}
