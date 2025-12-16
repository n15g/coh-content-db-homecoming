import { missionLink, ZoneData } from 'coh-content-db'
import { TheHydraDimension } from '../mission/the-hydra-dimension'
import { GetSomeSamplesOfHydraManDna } from '../mission/get-some-samples-of-hydra-man-dna'

export const HydraMissionMap: ZoneData = {
  key: 'hydra-mission-map',
  name: 'Hydra Mission Map',
  type: 'mission',
  morality: 'heroic',
  levelRange: [36, 40],
  notes: `Located within the ${missionLink(TheHydraDimension)} and ${missionLink(GetSomeSamplesOfHydraManDna)} missions.`,
  links: [{ title: 'Hydra Missions', href: 'https://homecoming.wiki/wiki/Multidimensional_Badge' }],
}
