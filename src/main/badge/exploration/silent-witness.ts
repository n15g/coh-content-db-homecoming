import { BadgeData, zoneLink } from 'coh-content-db'
import { UndergroundImperial } from '../../zone/underground-imperial'

export const SilentWitness: BadgeData = {
  type: 'EXPLORATION',
  key: 'silent-witness',
  setTitle: { id: 1651 },
  name: [{ value: 'Silent Witness' }],
  alignment: ['H', 'V', 'P'],
  zoneKey: UndergroundImperial.key,
  loc: [-2482, 335, -591],
  badgeText: [{
    value: 'You have seen much injustice and brutality in your journeys through Praetoria, and here beneath Precinct 4 in Imperial City you are witness to a chamber dedicated to both.'
      + ' Will you remain silent forever?',
  }],
  notes: `Located in ${zoneLink(UndergroundImperial)} in the red area 256 yds. NNE of Underground Transit.`,
  links: [
    { title: 'Silent Witness Badge', href: 'https://homecoming.wiki/wiki/Silent_Witness_Badge' },
  ],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/praetorian.png' }],
  vidiotMapKey: '7',
}
