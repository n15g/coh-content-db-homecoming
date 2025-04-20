import { BadgeData } from 'coh-content-db'
import { EliminateNegotiatorAndWitnesses } from '../../mission/eliminate-negotiator-and-witnesses'

export const AgentOfDiscord: BadgeData = {
  type: 'accomplishment',
  key: 'agent-of-discord',
  setTitleId: [338],
  name: 'Agent of Discord',
  releaseDate: '2012-11-30',
  morality: 'villainous',
  badgeText: `Obviously, Arachnos isn't as united as Lord Recluse would like the world to believe.`,
  links: [
    { title: 'Agent of Discord Badge', href: 'https://homecoming.wiki/wiki/Agent_of_Discord_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/stature-5.png',
  requirements: [
    { key: EliminateNegotiatorAndWitnesses.key, type: 'mission', missionKey: EliminateNegotiatorAndWitnesses.key },
  ],
}
