import { BadgeData, zoneLink } from 'coh-content-db'
import { TheHollows } from '../../zone/the-hollows'

export const Excavator: BadgeData = {
  type: 'ACCOLADE',
  key: 'excavator',
  setTitle: { id: 2372 },
  name: [
    { value: 'Excavator' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [
    { value: `You've obtained this accolade by completing every story arc within The Hollows.` },
  ],
  acquisition: `Complete every story arc in ${zoneLink(TheHollows)}`,
  effect: 'Awards 20 reward merits.',
  links: [
    { title: 'Excavator Badge', href: 'https://homecoming.wiki/wiki/Excavator_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accolade/storyarc-acc-vara-h.png' },
  ],
}
