import { BadgeData } from 'coh-content-db'
import { TheHive } from '../../zone/the-hive'

export const HeartOfTheHamidon: BadgeData = {
  type: 'exploration',
  key: 'heart-of-the-hamidon',
  setTitleId: [143],
  name: 'Heart of the Hamidon',
  morality: 'paragon-city-access',
  badgeText: `The Hamidon has defeated many heroes.`,
  notes: `Located in the dead center of the zone, where Hamidon spawns.`,
  links: [
    { title: 'Heart of the Hamidon Badge', href: 'https://homecoming.wiki/wiki/Heart_of_the_Hamidon_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hazard.png',
  requirements: [
    { key: 'loc-0', type: 'location', location: { zoneKey: TheHive.key, coords: [-3, -338, -2183], icon: 'badge', iconText: '2' } },
  ],
}
