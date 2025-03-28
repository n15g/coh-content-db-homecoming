import { BadgeData, zoneLink } from 'coh-content-db'
import { NervaArchipelago } from '../../zone/nerva-archipelago'

export const PrimalInstinct: BadgeData = {
  type: 'EXPLORATION',
  key: 'primal-instinct',
  setTitle: { id: 277 },
  name: [{ value: 'Primal Instinct' }],
  alignment: ['V'],
  zoneKey: NervaArchipelago.key,
  loc: [2304, -110, 798],
  badgeText: [{
    value: `This is the spot of many battles between the Circle of Thorns and their age-old enemy, the Mu.`,
  }],
  notes: `Located in ${zoneLink(NervaArchipelago)}, in the Primeva neighborhood.

It is 266 yards north-northwest of the Primeva marker.
 The marker is well-hidden by being near no particular landmark.
 To get to it, go to the jungle below the Primeva marker and head north.
 When you reach a bridge, scale down the cliff and head left (west).
 You will soon come to a pyramid.
 Just past the pyramid, there are two large columns.
 The badge marker is within a fern just past and to the left of the left (southern) column.`,
  links: [
    { title: 'Primal Instinct Badge', href: 'https://homecoming.wiki/wiki/Primal_Instinct_Badge' },
  ],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/villain.png' }],
  vidiotMapKey: '4',
}
