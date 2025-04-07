import { BadgeData } from 'coh-content-db'

export const AgentProvocateur: BadgeData = {
  type: 'pvp',
  key: 'agent-provocateur',
  setTitleId: [369],
  name: 'Agent Provocateur',
  morality: 'all',
  badgeText: [
    { alignment: 'hero', value: 'Arachnos has put you at the top of their hit list.' },
    { alignment: 'villain', value: 'Freedom Corps has made your capture a number one priority.' },
  ],
  acquisition: 'Complete a buff mission in a PvP zone (Bloody Bay, Siren\'s Call, or Warburg)',
  links: [
    { title: 'Agent Provocateur Badge', href: 'https://homecoming.wiki/wiki/Agent_Provocateur_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/pvp/cracked.png',
}
