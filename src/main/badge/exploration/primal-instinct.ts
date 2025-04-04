import { BadgeData } from 'coh-content-db'
import { NervaArchipelago } from '../../zone/nerva-archipelago'

export const PrimalInstinct: BadgeData = {
  type: 'exploration',
  key: 'primal-instinct',
  setTitleId: [277],
  name: 'Primal Instinct',
  morality: 'villainous',
  zoneKey: NervaArchipelago.key,
  loc: [2304, -110, 798],
  badgeText: `This is the spot of many battles between the Circle of Thorns and their age-old enemy, the Mu.`,
  notes: `Located in the Primeva neighborhood, 266 yards north-northwest of the Primeva marker.

The marker is well-hidden by being near no particular landmark.
1. Go to the jungle below the Primeva marker and head north.
2. When you reach a bridge, scale down the cliff and head left (west). You will soon come to a pyramid.
4. Just past the pyramid, there are two large columns.
5. The badge marker is within a fern just past and to the left of southernmost column.`,
  links: [
    { title: 'Primal Instinct Badge', href: 'https://homecoming.wiki/wiki/Primal_Instinct_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/villain.png',
  vidiotMapKey: '4',
}
