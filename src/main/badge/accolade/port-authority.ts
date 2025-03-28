import { BadgeData, zoneLink } from 'coh-content-db'
import { StrigaIsle } from '../../zone/striga-isle'

export const PortAuthority: BadgeData = {
  type: 'ACCOLADE',
  key: 'port-authority',
  setTitle: { id: 2374 },
  name: [
    { value: 'Port Authority' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [
    { value: `You've obtained this accolade by completing every story arc within Striga Isle.` },
  ],
  acquisition: `Complete every hero story arc in ${zoneLink(StrigaIsle)}`,
  notes: `This badge rewards 20 reward merits.`,
  links: [
    { title: 'Port Authority Badge', href: 'https://homecoming.wiki/wiki/Port_Authority_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accolade/storyarc-acc-vara-h.png' },
  ],
}
