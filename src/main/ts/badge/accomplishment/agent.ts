import { BadgeData } from 'coh-content-db'
import { DefeatMarauderAndDestroyThePortal } from '../../mission/defeat-marauder-and-destroy-the-portal'

export const Agent: BadgeData = {
  type: 'accomplishment',
  key: 'agent',
  setTitleId: [85],
  name: 'Agent',
  releaseDate: '2012-11-30',
  morality: 'heroic',
  badgeText: `You wiped out a cell of Marauder's forces right here in Paragon City.`,
  links: [
    { title: 'Agent Badge', href: 'https://homecoming.wiki/wiki/Agent_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/agent.png',
  requirements: [
    { key: DefeatMarauderAndDestroyThePortal.key, type: 'mission', missionKey: DefeatMarauderAndDestroyThePortal.key },
  ],
}
