import { BadgeData } from 'coh-content-db'
import { UndergroundNeutropolis } from '../../zone/underground-neutropolis'

export const KeepingTheLightsOn: BadgeData = {
  type: 'exploration',
  key: 'keeping-the-lights-on',
  setTitleId: [1745],
  name: 'Keeping the Lights On',
  morality: 'all',
  zoneKey: UndergroundNeutropolis.key,
  loc: [-2378, -1222, -1455],
  badgeText: `While the Keyes Reactors themselves require little fuel to keep humming, the entire island is devoted to power transmission, safety, and security; the latter especially due to near-constant Resistance sabotage attempts.
All of these functions require maintenance Clockwork and deliveries which come through this bay.`,
  notes: `Located 256 yards west of City Access A.`,
  links: [
    { title: 'Keeping the Lights On Badge', href: 'https://homecoming.wiki/wiki/Keeping_the_Lights_On_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/praetorian.png',
  vidiotMapKey: '5',
}
