import { BadgeData, missionLink, zoneLink } from 'coh-content-db'
import { AtlasPark } from '../../zone/atlas-park'
import { OmegaTeamMemorial } from '../../mission/omega-team-memorial'
import { DrKahnTaskForce } from '../../mission/dr-kahn-task-force'

export const TriedAndTrue: BadgeData = {
  type: 'exploration',
  key: 'tried-and-true',
  setTitleId: [2370],
  name: 'Tried and True',
  releaseDate: '2012-11-30',
  morality: 'paragon-city-access',
  badgeText: `When the Omega Team accepted their mission to the Rikti home dimension, they knew they likely wouldn't be coming back. You have protected their memorial through many trials, staying true to the end.`,
  acquisition: `Visit the Omega Team memorial plaques in ${zoneLink(AtlasPark)}, ${missionLink(OmegaTeamMemorial)} and the ${missionLink(DrKahnTaskForce)}.`,
  notes: `Visit the Omega Team memorial plaques in three separate instances:

* The open-world Memorial in ${zoneLink(AtlasPark)}.
* During the ${missionLink(OmegaTeamMemorial)} mission.
* During the first mission in the ${missionLink(DrKahnTaskForce)}.`,
  links: [
    { title: 'Tried and True Badge', href: 'https://homecoming.wiki/wiki/Tried_and_True_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hero.png',
  requirements: [
    { key: 'loc-0', type: 'location', location: { zoneKey: AtlasPark.key, coords: [66, -634.5, -681.9] } },
    { key: 'loc-1', type: 'location', location: { coords: [1520, -813.2, -2688.1] }, notes: `During the ${missionLink(OmegaTeamMemorial)} mission.` },
    { key: 'loc-2', type: 'location', location: { coords: [1520, -813.2, -2688.1] }, notes: `During the first mission in the ${missionLink(DrKahnTaskForce)}.` },
  ],
}
