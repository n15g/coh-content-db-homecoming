import { BadgeData } from 'coh-content-db'
import { AbandonedSewerNetwork } from '../../map/abandoned-sewer-network'
import { SewerNetwork } from '../../map/sewer-network'

export const TheUnderlord: BadgeData = {
  type: 'EXPLORATION',
  key: 'the-underlord',
  setTitle: { id: 1825 },
  name: [
    { sex: 'M', value: 'The Underlord' },
    { sex: 'F', value: 'The Underlady' },
  ],
  alignment: ['H'],
  mapKey: AbandonedSewerNetwork.key,
  loc: [2688, 0, 2240],
  badgeText: [{
    value: 'In King\'s Row, where life is hard and opportunities few, competition for resources can be fierce.'
      + ' But down here, someone of rare vision could carve out a niche for themselves; dominating the creatures who call this part of the sewer home or using the network\'s ability to touch'
      + ' every part of the city as a means to carry out all kinds of business out of the eyes of the authorities.',
  }],
  notes: `Located in [map:abandoned-sewer-network] 84 feet northeast of the [${SewerNetwork.key}] transfer point in Kings Row Sector, right at the exit of the room.`,
  links: [
    { title: 'The Underlord Badge', href: 'https://homecoming.wiki/wiki/The_Underlord_Badge' },
    { title: 'The Underlady Badge', href: 'https://homecoming.wiki/wiki/The_Underlady_Badge' },
  ],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hazard.png' }],
  vidiotMapKey: '5',
}
