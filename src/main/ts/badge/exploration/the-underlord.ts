import { BadgeData, zoneLink } from 'coh-content-db'
import { AbandonedSewerNetwork } from '../../zone/abandoned-sewer-network'
import { SewerNetwork } from '../../zone/sewer-network'
import { KingsRow } from '../../zone/kings-row'

export const TheUnderlord: BadgeData = {
  type: 'exploration',
  key: 'the-underlord',
  setTitleId: [1825],
  name: [
    { sex: 'M', value: 'The Underlord' },
    { sex: 'F', value: 'The Underlady' },
  ],
  morality: 'paragon-city-access',
  badgeText: `In King's Row, where life is hard and opportunities few, competition for resources can be fierce.
But down here, someone of rare vision could carve out a niche for themselves; dominating the creatures who call this part of the sewer home or using the network's ability to touch
every part of the city as a means to carry out all kinds of business out of the eyes of the authorities.`,
  notes: `Located 84 feet northeast of the ${zoneLink(SewerNetwork)} transfer point in ${zoneLink(KingsRow)} Sector, right at the exit of the room.`,
  links: [
    { title: 'The Underlord Badge', href: 'https://homecoming.wiki/wiki/The_Underlord_Badge' },
    { title: 'The Underlady Badge', href: 'https://homecoming.wiki/wiki/The_Underlady_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hazard.png',
  requirements: [
    { key: 'loc-0', type: 'location', location: { zoneKey: AbandonedSewerNetwork.key, coords: [2688, 0, 2240], icon: 'badge', iconText: '5' } },
  ],
}
