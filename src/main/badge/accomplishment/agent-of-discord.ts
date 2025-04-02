import { BadgeData } from 'coh-content-db'
import { OperativeKirkland } from '../../contact/operative-kirkland'

export const AgentOfDiscord: BadgeData = {
  type: 'ACCOMPLISHMENT',
  key: 'agent-of-discord',
  setTitle: { id: 338 },
  name: 'Agent of Discord',
  alignment: ['V'],
  badgeText: `Obviously, Arachnos isn't as united as Lord Recluse would like the world to believe.`,
  acquisition: 'Complete the Take out negotiator and witnesses mission from Operative Kirkland',
  links: [
    { title: 'Agent of Discord Badge', href: 'https://homecoming.wiki/wiki/Agent_of_Discord_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/stature-5.png',
  requirements: [
    { key: 'eliminate-negotiator-and-witnesses', type: 'MISSION', missionName: 'Eliminate Negotiator and Witnesses', contactKey: OperativeKirkland.key },
  ],
}
