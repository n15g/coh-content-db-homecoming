import { BadgeData } from 'coh-content-db'
import { UndergroundImperial } from '../../zone/underground-imperial'

export const SilentWitness: BadgeData = {
  type: 'exploration',
  key: 'silent-witness',
  setTitleId: [1651],
  name: 'Silent Witness',
  releaseDate: '2012-11-30',
  morality: 'all',
  badgeText: `You have seen much injustice and brutality in your journeys through Praetoria, and here beneath Precinct 4 in Imperial City you are witness to a chamber dedicated to both. Will you remain silent forever?`,
  notes: `Located in the red area 256 yds. NNE of Underground Transit.`,
  links: [
    { title: 'Silent Witness Badge', href: 'https://homecoming.wiki/wiki/Silent_Witness_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/praetorian.png',
  requirements: [
    { key: 'loc-0', type: 'location', location: { zoneKey: UndergroundImperial.key, coords: [-2482, 335, -591], icon: 'badge', iconText: '7' } },
  ],
}
