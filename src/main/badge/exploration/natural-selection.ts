import { BadgeData, zoneLink } from 'coh-content-db'
import { Eden } from '../../zone/eden'
import { TheHive } from '../../zone/the-hive'

export const NaturalSelection: BadgeData = {
  type: 'exploration',
  key: 'natural-selection',
  setTitleId: [1847],
  name: 'Natural Selection',
  morality: 'heroic',
  zoneKey: Eden.key,
  loc: [3132, 153, 4527],
  badgeText: `It is difficult to remain unaffected by the display of Hamidon's might.
How could anyone not feel a sense of awe at the majesty present in the towering spires of rock, the primeval forest you can practically watch growing before your very eyes?
How anyone could not feel insignificant before it is a mystery.
But then you realize that this is merely another seduction perpetrated by Hamidon, to weaken your resolve and steal from you the urge to resist the Devouring Earth and the danger they represent.`,
  notes: `Located 392 yards SSW of ${zoneLink(TheHive)} marker, at the base of a spire on a cliff in the southwest corner of the zone.`,
  links: [
    { title: 'Natural Selection Badge', href: 'https://homecoming.wiki/wiki/Natural_Selection_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hazard.png',
  vidiotMapKey: '8',
}
