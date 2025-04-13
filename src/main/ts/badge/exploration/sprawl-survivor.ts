import { BadgeData, zoneLink } from 'coh-content-db'
import { AbandonedSewerNetwork } from '../../zone/abandoned-sewer-network'
import { SewerNetwork } from '../../zone/sewer-network'
import { SkywayCity } from '../../zone/skyway-city'

export const SprawlSurvivor: BadgeData = {
  type: 'exploration',
  key: 'sprawl-survivor',
  setTitleId: [1824],
  name: 'Sprawl Survivor',
  morality: 'paragon-city-access',
  badgeText: `Many people, of a particular mindset, find they cannot tolerate the dirt and noise of Skyway City's sprawl.
It takes someone of singular courage (or foolhardiness) to see the Abandoned Sewer Network as the place they would like to escape to.
But down here, in the cool confines of the tunnels, away from the noise of Skyway, a kind of peace can be achieved.`,
  notes: `Located 79 feet northwest of the ${zoneLink(SewerNetwork)} transfer point in the ${zoneLink(SkywayCity)} Network, right at the exit of the room.`,
  links: [
    { title: 'Sprawl Survivor Badge', href: 'https://homecoming.wiki/wiki/Sprawl_Survivor_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hazard.png',
  requirements: [
    { key: 'loc-0', type: 'location', location: { zoneKey: AbandonedSewerNetwork.key, coords: [64, 0, 3072], icon: 'badge', iconText: '4' } },
  ],
}
