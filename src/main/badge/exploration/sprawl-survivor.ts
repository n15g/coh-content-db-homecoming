import { BadgeData, mapLink } from 'coh-content-db'
import { AbandonedSewerNetwork } from '../../map/abandoned-sewer-network'
import { SewerNetwork } from '../../map/sewer-network'

export const SprawlSurvivor: BadgeData = {
  type: 'EXPLORATION',
  key: 'sprawl-survivor',
  setTitle: { id: 1824 },
  name: [{ value: 'Sprawl Survivor' }],
  alignment: ['H'],
  mapKey: AbandonedSewerNetwork.key,
  loc: [64, 0, 3072],
  badgeText: [{
    value: 'Many people, of a particular mindset, find they cannot tolerate the dirt and noise of Skyway City\'s sprawl.'
      + ' It takes someone of singular courage (or foolhardiness) to see the Abandoned Sewer Network as the place they would like to escape to.'
      + ' But down here, in the cool confines of the tunnels, away from the noise of Skyway, a kind of peace can be achieved.',
  }],
  notes: `Located in ${mapLink(AbandonedSewerNetwork)} 79 feet northwest of the ${mapLink(SewerNetwork)} transfer point in Skyway City Network, right at the exit of the room.`,
  links: [
    { title: 'Sprawl Survivor Badge', href: 'https://homecoming.wiki/wiki/Sprawl_Survivor_Badge' },
  ],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hazard.png' }],
  vidiotMapKey: '4',
}
