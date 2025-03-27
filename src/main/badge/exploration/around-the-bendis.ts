import { BadgeData, mapLink } from 'coh-content-db'
import { PerezPark } from '../../map/perez-park'
import { SkywayCity } from '../../map/skyway-city'

export const AroundTheBendis: BadgeData = {
  type: 'EXPLORATION',
  key: 'around-the-bendis',
  setTitle: { id: 103 },
  name: [{ value: 'Around the Bendis' }],
  alignment: ['H'],
  mapKey: PerezPark.key,
  loc: [-875, -31, 3658],
  badgeText: [{
    value: 'This old boathouse used to be a popular spot in Perez Park, but since the gangs moved in it has been abandoned.',
  }],
  notes: `Located in ${mapLink(PerezPark)} 343 yards northwest of the ${mapLink(SkywayCity)} entrance.`,
  links: [
    { title: 'Around the Bendis Badge', href: 'https://homecoming.wiki/wiki/Around_the_Bendis_Badge' },
  ],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hazard.png' }],
  vidiotMapKey: '3',
}
