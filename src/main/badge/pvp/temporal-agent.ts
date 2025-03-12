import { BadgeData } from 'coh-content-db'

export const TemporalAgent: BadgeData = {
  type: 'PVP',
  key: 'temporal-agent',
  setTitle: { id: 567 },
  name: [
    { value: 'Temporal Agent' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [
    { value: 'You have controlled 10 Heavies in Recluse\'s Victory.' },
  ],
  acquisition: 'Control 10 Heavies in Recluse\'s Victory',
  links: [
    { title: 'Temporal Agent Badge', href: 'https://homecoming.wiki/wiki/Temporal_Agent_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/pvp/temporal-agent.png' },
  ],
}
