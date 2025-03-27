import { BadgeData, mapLink } from 'coh-content-db'
import { UndergroundNova } from '../../map/underground-nova'

export const WarriorAtTheGate: BadgeData = {
  type: 'EXPLORATION',
  key: 'warrior-at-the-gate',
  setTitle: { id: 1643 },
  name: [{ value: 'Warrior at the Gate' }],
  alignment: ['H', 'V', 'P'],
  mapKey: UndergroundNova.key,
  loc: [-3200, 511, -48],
  badgeText: [{
    value: 'Here lies the impregnable door that leads to one of the strongholds of the Resistance.'
      + ' For a member of the Resistance this barrier is a comforting symbol of their defiance of State power.'
      + ' For the Loyalists it is an affront and a target of repeated attacks.',
  }],
  notes: `Located in ${mapLink(UndergroundNova)} immediately in front of the door to the Resistance Hub.`,
  links: [
    { title: 'Warrior at the Gate Badge', href: 'https://homecoming.wiki/wiki/Warrior_at_the_Gate_Badge' },
  ],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/praetorian.png' }],
  vidiotMapKey: '8',
}
