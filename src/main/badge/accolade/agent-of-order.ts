import { BadgeData, zoneLink } from 'coh-content-db'
import { AtlasPark } from '../../zone/atlas-park'

export const AgentOfOrder: BadgeData = {
  type: 'ACCOLADE',
  key: 'agent-of-order',
  setTitle: { id: 2352 },
  name: [
    { value: 'Agent of Order' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [
    { alignment: 'H', value: `Without heroes like you the world would fall into chaos and despair.` },
    { alignment: 'V', value: `You leave nothing but chaos and destruction in your wake!` },
  ],
  acquisition: `Complete every story arc in ${zoneLink(AtlasPark)}`,
  notes: `
This badge rewards 20 reward merits for completing the following story arcs (contact in parentheses):

* What Was Lost (Matthew Habashy)
* No More Fears (Officer Fields)
* Reason to Fight (Aaron Thiery)
* Lay Down Your Burdens (Sondra Costel)
* The Shining Stars Chapters 1, 2, and 3 (Twinshot)
`,
  links: [
    { title: 'Agent of Order Badge', href: 'https://homecoming.wiki/wiki/Agent_of_Order_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accolade/storyarc-acc-vara-h.png' },
  ],
}
