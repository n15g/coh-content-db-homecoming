import { BadgeData, mapLink } from 'coh-content-db'
import { UndergroundNeutropolis } from '../../map/underground-neutropolis'

export const KeepingTheLightsOn: BadgeData = {
  type: 'EXPLORATION',
  key: 'keeping-the-lights-on',
  setTitle: { id: 1745 },
  name: [{ value: 'Keeping the Lights On' }],
  alignment: ['H', 'V', 'P'],
  mapKey: UndergroundNeutropolis.key,
  loc: [-2378, -1222, -1455],
  badgeText: [{
    value: 'While the Keyes Reactors themselves require little fuel to keep humming, the entire island is devoted to power transmission, safety, and security;'
      + ' the latter especially due to near-constant Resistance sabotage attempts. All of these functions require maintenance Clockwork and deliveries which come through this bay.',
  }],
  notes: `Located in ${mapLink(UndergroundNeutropolis)} 256 yards west of City Access A.`,
  links: [
    { title: 'Keeping the Lights On Badge', href: 'https://homecoming.wiki/wiki/Keeping_the_Lights_On_Badge' },
  ],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/praetorian.png' }],
  vidiotMapKey: '5',
}
