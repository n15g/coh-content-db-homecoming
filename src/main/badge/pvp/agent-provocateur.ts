import { BadgeData } from 'coh-content-db'

export const AgentProvocateur: BadgeData = {
  type: 'PVP',
  key: 'agent-provocateur',
  setTitle: { id: 369 },
  name: [
    { value: 'Agent Provocateur' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [
    { alignment: 'H', value: 'Arachnos has put you at the top of their hit list.' },
    { alignment: 'V', value: 'Freedom Corps has made your capture a number one priority.' },
  ],
  acquisition: 'Complete a buff mission in a PvP zone (Bloody Bay, Siren\'s Call, or Warburg)',
  links: [
    { title: 'Agent Provocateur Badge', href: 'https://homecoming.wiki/wiki/Agent_Provocateur_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/pvp/cracked.png' },
  ],
}
