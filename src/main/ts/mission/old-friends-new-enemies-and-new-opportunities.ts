import { MissionData } from 'coh-content-db'
import { VincentRoss } from '../contact/vincent-ross'

export const OldFriendsNewEnemiesAndNewOpportunities: MissionData = {
  key: 'old-friends-new-enemies-and-new-opportunities',
  name: 'Old Friends, New Enemies, and New Opportunities',
  type: 'story-arc',
  morality: 'villainous',
  contactKeys: VincentRoss.key,
  levelRange: [20, 29],
  links: [
    { title: 'Old Friends, New Enemies, and New Opportunities', href: 'https://homecoming.wiki/wiki/Vincent_Ross#Old_Friends,_New_Enemies,_and_New_Opportunities' },
  ],
  flashback: {
    id: '19.02',
    levelRange: [25, 29],
  },
}
