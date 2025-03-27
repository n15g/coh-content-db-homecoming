import { BadgeData, mapLink } from 'coh-content-db'
import { PerezPark } from '../../map/perez-park'

export const DocWhedon: BadgeData = {
  type: 'EXPLORATION',
  key: 'doc-whedon',
  setTitle: { id: 104 },
  name: [{ value: 'Doc Whedon' }],
  alignment: ['H'],
  mapKey: PerezPark.key,
  loc: [-2085, -32, 2853],
  badgeText: [{
    value: 'This old dock used to be the most popular make-out spot in Paragon City. Today, however, it is more a place of violence than love.',
  }],
  notes: `Located in ${mapLink(PerezPark)} 292 yards due east of the Everett Lake and 216 yards north of the Gaiman Woods neighborhood markers. It is also about 145 yards southeast of the Amphitheater.`,
  links: [
    { title: 'Doc Whedon Badge', href: 'https://homecoming.wiki/wiki/Doc_Whedon_Badge' },
  ],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hazard.png' }],
  vidiotMapKey: '4',
}
