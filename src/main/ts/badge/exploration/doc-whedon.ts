import { BadgeData } from 'coh-content-db'
import { PerezPark } from '../../zone/perez-park'

export const DocWhedon: BadgeData = {
  type: 'exploration',
  key: 'doc-whedon',
  setTitleId: [104],
  name: 'Doc Whedon',
  morality: 'paragon-city-access',
  badgeText: `This old dock used to be the most popular make-out spot in Paragon City. Today, however, it is more a place of violence than love.`,
  notes: `Located 292 yards due east of the Everett Lake and 216 yards north of the Gaiman Woods neighborhood markers. It is also about 145 yards southeast of the Amphitheater.`,
  links: [
    { title: 'Doc Whedon Badge', href: 'https://homecoming.wiki/wiki/Doc_Whedon_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hazard.png',
  requirements: [
    { key: 'loc-0', type: 'location', location: { zoneKey: PerezPark.key, coords: [-2085, -32, 2853], icon: 'badge', iconText: '4' } },
  ],
}
