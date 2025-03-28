import { BadgeData, zoneLink } from 'coh-content-db'
import { TheHive } from '../../zone/the-hive'

export const HeartOfTheHamidon: BadgeData = {
  type: 'EXPLORATION',
  key: 'heart-of-the-hamidon',
  setTitle: { id: 143 },
  name: [{ value: 'Heart of the Hamidon' }],
  alignment: ['H'],
  zoneKey: TheHive.key,
  loc: [-3, -338, -2183],
  badgeText: [{
    value: `The Hamidon has defeated many heroes.`,
  }],
  notes: `Located in the dead center of ${zoneLink(TheHive)}, where Hamidon appears.`,
  links: [
    { title: 'Heart of the Hamidon Badge', href: 'https://homecoming.wiki/wiki/Heart_of_the_Hamidon_Badge' },
  ],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hazard.png' }],
  vidiotMapKey: '2',
}
