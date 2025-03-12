import { BadgeData } from 'coh-content-db'

export const Agent: BadgeData = {
  type: 'ACCOMPLISHMENT',
  key: 'agent',
  setTitle: { id: 85 },
  name: [
    { value: 'Agent' },
  ],
  alignment: ['H'],
  badgeText: [
    { value: 'You wiped out a cell of Marauder\'s forces right here in Paragon City.' },
  ],
  acquisition: 'Complete the Eliminate Marauder\'s Cell mission from Maria Jenkins',
  links: [
    { title: 'Agent Badge', href: 'https://homecoming.wiki/wiki/Agent_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/agent.png' },
  ],
}
