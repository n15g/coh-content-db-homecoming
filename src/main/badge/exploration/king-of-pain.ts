import { BadgeData, zoneLink } from 'coh-content-db'
import { TheChantry } from '../../zone/the-chantry'

export const KingOfPain: BadgeData = {
  type: 'EXPLORATION',
  key: 'king-of-pain',
  setTitle: { id: 1813 },
  name: [
    { sex: 'M', value: 'King of Pain' },
    { sex: 'F', value: 'Queen of Pain' },
  ],
  alignment: ['H'],
  zoneKey: TheChantry.key,
  loc: [4131, 390, -2159],
  badgeText: [{
    value: 'Pain! Every nerve flares with it. Your body sings with a crystalline agony that is transcendent in its intensity.'
      + ' But this is not a pain that makes you whimper like a struck animal, it makes you growl with fury at the indignity of it.'
      + ' It is a lesson, a challenge to be conquered, to remain unbowed and ultimately triumph over it.'
      + ' But in a moment it is gone though the memory of it lingers, as does the conviction that you were the master of it.',
  }],
  notes: `Located in ${zoneLink(TheChantry)} 463 yards SE of the Bastion of Pain marker, on a rock on the shore of the red lake.`,
  links: [
    { title: 'King of Pain Badge', href: 'https://homecoming.wiki/wiki/King_of_Pain_Badge' },
    { title: 'Queen of Pain Badge', href: 'https://homecoming.wiki/wiki/Queen_of_Pain_Badge' },
  ],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hazard.png' }],
  vidiotMapKey: '1',
}
