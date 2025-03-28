import { BadgeData, zoneLink } from 'coh-content-db'
import { DarkAstoria } from '../../zone/dark-astoria'

export const Determined: BadgeData = {
  type: 'ACCOLADE',
  key: 'determined',
  setTitle: { id: 2343 },
  name: [
    { value: 'Determined' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [
    { value: `You've obtained this accolade by completing every story arc within Dark Astoria.` },
  ],
  acquisition: `Complete every story arc in ${zoneLink(DarkAstoria)}`,
  notes: `This badge rewards 20 reward merits.`,
  links: [
    { title: 'Determined Badge', href: 'https://homecoming.wiki/wiki/Determined_Badge' },
  ],
  icon: [
    { alignment: 'H', value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accolade/storyarc-acc-vara-h.png' },
    { alignment: 'V', value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accolade/storyarc-acc-vara-v.png' },
  ],
}
