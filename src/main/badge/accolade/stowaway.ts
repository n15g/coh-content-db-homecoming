import { BadgeData } from 'coh-content-db'
import { OberstStraxt } from '../../contact/oberst-straxt'
import { DrFrancois } from '../../contact/dr-francois'
import { NightWidowRagana } from '../../contact/night-widow-ragana'
import { Orpheus } from '../../contact/orpheus'
import { MageKillerTatiana } from '../../contact/mage-killer-tatiana'

export const Stowaway: BadgeData = {
  type: 'ACCOLADE',
  key: 'stowaway',
  setTitle: { id: 2519 },
  name: 'Stowaway',
  alignment: ['H', 'V', 'P'],
  badgeText: 'Striga has long been a Council stronghold but recent events have upset the delicate balance and created a power vaccum for opportunistic villains to exploit.',
  effect: `Awards 20 reward merits.`,
  links: [
    { title: 'Stowaway Badge', href: 'https://homecoming.wiki/wiki/Stowaway_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accolade/storyarc-acc-vara-v.png',
  requirements: [
    { key: 'buried-secrets', type: 'ARC', missionName: 'Buried Secrets', contactKey: OberstStraxt.key },
    { key: 'just-prototypical', type: 'ARC', missionName: 'Just Prototypical', contactKey: DrFrancois.key },
    { key: 'negotiations-of-the-living-dead', type: 'ARC', missionName: 'Negotiations of the Living Dead', contactKey: NightWidowRagana.key },
    { key: 'the-most-dangerous-prey', type: 'ARC', missionName: 'The Most Dangerous Prey', contactKey: Orpheus.key },
    { key: 'the-last-witch-of-striga', type: 'ARC', missionName: 'The Last Witch of Striga', contactKey: MageKillerTatiana.key },
  ],
}
