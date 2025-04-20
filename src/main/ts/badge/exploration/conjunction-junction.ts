import { BadgeData, zoneLink } from 'coh-content-db'
import { TerraVolta } from '../../zone/terra-volta'
import { IndependencePort } from '../../zone/independence-port'

export const ConjunctionJunction: BadgeData = {
  type: 'exploration',
  key: 'conjunction-junction',
  setTitleId: [131],
  name: 'Conjunction Junction',
  releaseDate: '2012-11-30',
  morality: 'paragon-city-access',
  badgeText: `This junction was the first target of the Freakshow when they started their campaign of mayhem.
Statesman and the rest of the Freedom Phalanx were able to stop their plan before it could be fulfilled.`,
  notes: `Located in the Northwest corner of Coroman Manufacturing, in a culvert.
Head west from the entrance to ${zoneLink(IndependencePort)} and it can be located under pipes along the north war wall.`,
  links: [
    { title: 'Conjunction Junction Badge', href: 'https://homecoming.wiki/wiki/Conjunction_Junction_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hazard.png',
  requirements: [
    { key: 'loc-0', type: 'location', location: { zoneKey: TerraVolta.key, coords: [2222, 0, -7102], icon: 'badge', iconText: '1' } },
  ],
}
