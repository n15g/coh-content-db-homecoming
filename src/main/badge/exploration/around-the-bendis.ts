import { BadgeData, zoneLink } from 'coh-content-db'
import { PerezPark } from '../../zone/perez-park'
import { SkywayCity } from '../../zone/skyway-city'

export const AroundTheBendis: BadgeData = {
  type: 'exploration',
  key: 'around-the-bendis',
  setTitleId: [103],
  name: 'Around the Bendis',
  morality: 'heroic',
  zoneKey: PerezPark.key,
  loc: [-875, -31, 3658],
  badgeText: `This old boathouse used to be a popular spot in Perez Park, but since the gangs moved in it has been abandoned.`,
  notes: `Located 343 yards northwest of the ${zoneLink(SkywayCity)} entrance.`,
  links: [
    { title: 'Around the Bendis Badge', href: 'https://homecoming.wiki/wiki/Around_the_Bendis_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hazard.png',
  vidiotMapKey: '3',
}
