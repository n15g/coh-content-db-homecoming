import { BadgeData } from 'coh-content-db'
import { MariaJenkins } from '../../contact/maria-jenkins'

export const Agent: BadgeData = {
  type: 'ACCOMPLISHMENT',
  key: 'agent',
  setTitle: { id: 85 },
  name: 'Agent',
  alignment: ['H'],
  badgeText: `You wiped out a cell of Marauder's forces right here in Paragon City.`,
  links: [
    { title: 'Agent Badge', href: 'https://homecoming.wiki/wiki/Agent_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/agent.png',
  requirements: [
    { key: 'defeat-marauder-and-destroy-the-portal', type: 'MISSION', missionName: 'Defeat Marauder and destroy the portal', contactKey: MariaJenkins.key },
  ],
}
