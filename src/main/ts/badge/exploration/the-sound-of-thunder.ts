import { BadgeData, zoneLink } from 'coh-content-db'
import { TheHive } from '../../zone/the-hive'
import { Eden } from '../../zone/eden'

export const TheSoundOfThunder: BadgeData = {
  type: 'exploration',
  key: 'the-sound-of-thunder',
  setTitleId: [1852],
  name: 'The Sound of Thunder',
  releaseDate: '2012-11-30',
  morality: 'paragon-city-access',
  badgeText: `The Devouring Earth have gathered here in force, their stomping legs echoing off the distant hillsides like the thunder of angry gods.
The closer your approach, the more excited they seem to grow and the louder their roars and pounding feet become, creating a deafening racket that makes even shouted speech nearly impossible to hear.`,
  notes: `Located 558 yards west and a bit north of the ${zoneLink(Eden)} transfer point, in the middle of a valley guarded by two barricades of monsters, off the southeast edge of the crater.`,
  links: [
    { title: 'The Sound of Thunder Badge', href: 'https://homecoming.wiki/wiki/The_Sound_of_Thunder_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hazard.png',
  requirements: [
    { key: 'loc-0', type: 'location', location: { zoneKey: TheHive.key, coords: [-813, 0, -791], icon: 'badge', iconText: '7' } },
  ],
}
