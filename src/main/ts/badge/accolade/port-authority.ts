import { BadgeData, zoneLink } from 'coh-content-db'
import { StrigaIsle } from '../../zone/striga-isle'
import { RingOfPeebles } from '../../mission/ring-of-peebles'
import { HearAndNow } from '../../mission/hear-and-now'
import { ReturnToVampyrMountain } from '../../mission/return-to-vampyr-mountain'
import { AMadmansCouncil } from '../../mission/a-madmans-council'

export const PortAuthority: BadgeData = {
  type: 'accolade',
  key: 'port-authority',
  setTitleId: [2374],
  name: 'Port Authority',
  morality: 'all',
  badgeText: `You've obtained this accolade by completing every story arc within Striga Isle.`,
  acquisition: `Complete every story arc within ${zoneLink(StrigaIsle)}.`,
  links: [
    { title: 'Port Authority Badge', href: 'https://homecoming.wiki/wiki/Port_Authority_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accolade/storyarc-acc-vara-h.png',
  requirements: [
    { key: RingOfPeebles.key, type: 'mission', missionKey: RingOfPeebles.key },
    { key: HearAndNow.key, type: 'mission', missionKey: HearAndNow.key },
    { key: ReturnToVampyrMountain.key, type: 'mission', missionKey: ReturnToVampyrMountain.key },
    { key: AMadmansCouncil.key, type: 'mission', missionKey: AMadmansCouncil.key },
  ],
}
