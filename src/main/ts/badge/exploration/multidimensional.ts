import { BadgeData, missionLink } from 'coh-content-db'
import { HydraMissionMap } from '../../zone/hydra-missions'
import { TheHydraDimension } from '../../mission/the-hydra-dimension'
import { GetSomeSamplesOfHydraManDna } from '../../mission/get-some-samples-of-hydra-man-dna'

export const Multidimensional: BadgeData = {
  type: 'exploration',
  key: 'multidimensional',
  setTitleId: [172],
  name: 'Multidimensional',
  morality: 'all',
  badgeText: `The Hydra that lives under Paragon City is rumored to be a refugee from this dimension.`,
  acquisition: `Spend any amount of time on the mission map in either ${missionLink(TheHydraDimension)} or ${missionLink(GetSomeSamplesOfHydraManDna)} mission.`,
  notes: `The badge is awarded after a random period of time while on the map, or will be rewarded immediately if you leave the map.`,
  links: [
    { title: 'Multidimensional Badge', href: 'https://homecoming.wiki/wiki/Multidimensional_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hazard.png',
  requirements: [
    { key: 'loc-0', type: 'location', location: { zoneKey: HydraMissionMap.key } },
  ],
}
