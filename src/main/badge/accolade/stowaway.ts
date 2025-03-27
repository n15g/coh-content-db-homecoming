import { BadgeData, mapLink } from 'coh-content-db'
import { StrigaIsle } from '../../map/striga-isle'

export const Stowaway: BadgeData = {
  type: 'ACCOLADE',
  key: 'stowaway',
  setTitle: { id: 2519 },
  name: [
    { value: 'Stowaway' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [
    { value: `Striga has long been a Council stronghold but recent events have upset the delicate balance and created a power vaccum for opportunistic villains to exploit.` },
  ],
  acquisition: `Complete every villain story arc in ${mapLink(StrigaIsle)}`,
  notes: `This badge rewards 20 reward merits.`,
  links: [
    { title: 'Stowaway Badge', href: 'https://homecoming.wiki/wiki/Stowaway_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accolade/storyarc-acc-vara-v.png' },
  ],
}
