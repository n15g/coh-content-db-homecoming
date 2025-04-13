import { BadgeData } from 'coh-content-db'
import { AgentOfDiscord } from '../accomplishment/agent-of-discord'

export const Arachnobot: BadgeData = {
  type: 'gladiator',
  key: 'arachnobot',
  setTitleId: [453],
  name: 'Arachnobot',
  morality: 'villainous',
  badgeText: 'Password accepted. This unit will obey.',
  links: [
    { title: 'Arachnobot Badge', href: 'https://homecoming.wiki/wiki/Arachnobot_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/gladiator/gladiator.png',
  requirements: [
    { key: AgentOfDiscord.key, type: 'badge', badgeKey: AgentOfDiscord.key },
  ],
}
