import { BadgeData } from 'coh-content-db'
import { NovaPraetoria } from '../../map/nova-praetoria'

export const AgentOfPraetoria: BadgeData = {
  type: 'ACCOLADE',
  key: 'agent-of-praetoria',
  setTitle: { id: 2350 },
  name: [
    { value: 'Agent of Praetoria' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [
    { value: `You stand on the fragile tipping point between Order and Chaos. Which way will you go?` },
  ],
  acquisition: `Complete every story arc in [map:${NovaPraetoria.key}]`,
  notes: `This badge rewards 20 reward merits.`,
  links: [
    { title: 'Agent of Praetoria Badge', href: 'https://homecoming.wiki/wiki/Agent_of_Praetoria_Badge' },
  ],
  icon: [
    { alignment: 'H', value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accolade/storyarc-acc-varb-h.png' },
    { alignment: 'V', value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accolade/storyarc-acc-varb-v.png' },
  ],
}
