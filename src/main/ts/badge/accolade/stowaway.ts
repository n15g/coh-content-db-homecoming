import { BadgeData, zoneLink } from 'coh-content-db'
import { StrigaIsle } from '../../zone/striga-isle'
import { BuriedSecrets } from '../../mission/buried-secrets'
import { JustPrototypical } from '../../mission/just-prototypical'
import { NegotiationsOfTheLivingDead } from '../../mission/negotiations-of-the-living-dead'
import { TheMostDangerousPrey } from '../../mission/the-most-dangerous-prey'
import { TheLastWitchOfStriga } from '../../mission/the-last-witch-of-striga'

export const Stowaway: BadgeData = {
  type: 'accolade',
  key: 'stowaway',
  setTitleId: [2519],
  name: 'Stowaway',
  morality: 'all',
  badgeText: 'Striga has long been a Council stronghold but recent events have upset the delicate balance and created a power vaccum for opportunistic villains to exploit.',
  acquisition: `Complete every story arc within ${zoneLink(StrigaIsle)}.`,
  links: [
    { title: 'Stowaway Badge', href: 'https://homecoming.wiki/wiki/Stowaway_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accolade/storyarc-acc-vara-v.png',
  requirements: [
    { key: BuriedSecrets.key, type: 'mission', missionKey: BuriedSecrets.key },
    { key: JustPrototypical.key, type: 'mission', missionKey: JustPrototypical.key },
    { key: NegotiationsOfTheLivingDead.key, type: 'mission', missionKey: NegotiationsOfTheLivingDead.key },
    { key: TheMostDangerousPrey.key, type: 'mission', missionKey: TheMostDangerousPrey.key },
    { key: TheLastWitchOfStriga.key, type: 'mission', missionKey: TheLastWitchOfStriga.key },
  ],
}
