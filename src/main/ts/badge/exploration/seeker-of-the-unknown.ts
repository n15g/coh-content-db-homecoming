import { BadgeData } from 'coh-content-db'
import { EchoDarkAstoria } from '../../zone/echo-dark-astoria'

export const SeekerOfTheUnknown: BadgeData = {
  type: 'exploration',
  key: 'seeker-of-the-unknown',
  setTitleId: [129],
  name: 'Seeker of the Unknown',
  releaseDate: '2012-11-30',
  morality: 'paragon-city-access',
  badgeText: `This tomb was used to represent the thousands of heroes who gave their lives in the Rikti War. It now stands a mute vigil at the site of even greater atrocities.`,
  notes: `Located 160 yards west and slightly north of the Moth Cemetery marker, in a deep chasm, the badge marker is outside the second (middle) crypt in a tunnel accessible via a doorway at the bottom of the chasm.`,
  links: [
    { title: 'Seeker of the Unknown Badge', href: 'https://homecoming.wiki/wiki/Seeker_of_the_Unknown_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hazard.png',
  requirements: [
    { key: 'loc-0', type: 'location', location: { zoneKey: EchoDarkAstoria.key, coords: [1868, -80, 1352], icon: 'badge', iconText: '2' } },
  ],
}
