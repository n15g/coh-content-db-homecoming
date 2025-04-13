import { badgeLink, ContactData } from 'coh-content-db'
import { SteelCanyon } from '../zone/steel-canyon'
import { VillainDisruptor } from '../badge/defeat/villain-disruptor'

export const AgentHassell: ContactData = {
  key: 'agent-hassel',
  name: 'Agent Hassell',
  title: 'P.P.D. Safeguard Agent',
  morality: 'heroic',
  location: { zoneKey: SteelCanyon.key, coords: [-2495, -83.9, -1355] },
  levelRange: [10, 50],
  links: [{ title: 'Agent Hassell', href: 'https://homecoming.wiki/wiki/Agent_Hassell' }],
  notes: `Provides access to Safeguard Missions on request, including out-levelled content.

Requires the ${badgeLink(VillainDisruptor)} badge and Level 10.`,
}
