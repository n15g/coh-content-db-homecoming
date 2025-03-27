import { BadgeData, badgeLink } from 'coh-content-db'
import { AgentOfDiscord } from '../accomplishment/agent-of-discord'

export const Arachnobot: BadgeData = {
  type: 'GLADIATOR',
  key: 'arachnobot',
  setTitle: { id: 453 },
  name: [
    { value: 'Arachnobot' },
  ],
  alignment: ['V'],
  badgeText: [
    { value: 'Password accepted. This unit will obey.' },
  ],
  acquisition: `Earn the ${badgeLink(AgentOfDiscord)} Badge (Arachnos)`,
  links: [
    { title: 'Arachnobot Badge', href: 'https://homecoming.wiki/wiki/Arachnobot_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/gladiator/gladiator.png' },
  ],
}
