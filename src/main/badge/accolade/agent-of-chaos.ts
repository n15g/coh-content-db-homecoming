import { BadgeData, zoneLink } from 'coh-content-db'
import { MercyIsland } from '../../zone/mercy-island'

export const AgentOfChaos: BadgeData = {
  type: 'ACCOLADE',
  key: 'agent-of-chaos',
  setTitle: { id: 2344 },
  name: [
    { value: 'Agent of Chaos' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [
    { value: `You've obtained this accolade by completing every story arc within Mercy Island.` },
  ],
  acquisition: `Complete every story arc in ${zoneLink(MercyIsland)}`,
  notes: `
This badge rewards 20 reward merits for completing the following story arcs (contact in parentheses):

* Earning Arachnos' Favor (Kalinda)
* The Origins of the Snakes (Matthew Burke)
* Snake Uprising (Mongoose)
* Weird Science (Doctor Creed)
* Underdogs Never Win (Operative Kuzmin)
* Fire and Heist (Fire Wire)
* Higher Purpose (Doctor Weber)
* Price of Friendship (Lt. Harris)
* The Hearts of Darkness Chapters 1, 2, and 3 (Dr. Graves)
* Oh, Wretched Man! (Seer Marino)
`,
  links: [
    { title: 'Agent of Chaos Badge', href: 'https://homecoming.wiki/wiki/Agent_of_Chaos_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accolade/storyarc-acc-vara-v.png' },
  ],
}
