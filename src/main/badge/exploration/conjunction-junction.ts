import { BadgeData, zoneLink } from 'coh-content-db'
import { TerraVolta } from '../../zone/terra-volta'
import { IndependencePort } from '../../zone/independence-port'

export const ConjunctionJunction: BadgeData = {
  type: 'EXPLORATION',
  key: 'conjunction-junction',
  setTitle: { id: 131 },
  name: [{ value: 'Conjunction Junction' }],
  alignment: ['H'],
  zoneKey: TerraVolta.key,
  loc: [2222, 0, -7102],
  badgeText: [{
    value: `This junction was the first target of the Freakshow when they started their campaign of mayhem.
Statesman and the rest of the Freedom Phalanx were able to stop their plan before it could be fulfilled.`,
  }],
  notes: `Located in the Northwest corner of Coroman Manufacturing in a culvert.
          Head west from the entrance to ${zoneLink(IndependencePort)} and it can be located under pipes along the north war wall.`,
  links: [
    { title: 'Conjunction Junction Badge', href: 'https://homecoming.wiki/wiki/Conjunction_Junction_Badge' },
  ],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hazard.png' }],
  vidiotMapKey: '1',
}
