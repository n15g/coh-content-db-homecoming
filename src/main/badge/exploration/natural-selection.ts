import { BadgeData } from 'coh-content-db'
import { Eden } from '../../map/eden'
import { TheHive } from '../../map/the-hive'

export const NaturalSelection: BadgeData = {
  type: 'EXPLORATION',
  key: 'natural-selection',
  setTitle: { id: 1847 },
  name: [{ value: 'Natural Selection' }],
  alignment: ['H'],
  mapKey: Eden.key,
  loc: [3132, 153, 4527],
  badgeText: [{
    value: `It is difficult to remain unaffected by the display of Hamidon's might.
How could anyone not feel a sense of awe at the majesty present in the towering spires of rock, the primeval forest you can practically watch growing before your very eyes?
How anyone could not feel insignificant before it is a mystery.
But then you realize that this is merely another seduction perpetrated by Hamidon, to weaken your resolve and steal from you the urge to resist the Devouring Earth and the danger they represent.`,
  }],
  notes: `Located in [map:${Eden.key}] 392 yards SSW of [map:${TheHive.key}] marker, at the base of a spire on a cliff in the southwest corner of the zone.`,
  links: [
    { title: 'Natural Selection Badge', href: 'https://homecoming.wiki/wiki/Natural_Selection_Badge' },
  ],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hazard.png' }],
  vidiotMapKey: '8',
}
