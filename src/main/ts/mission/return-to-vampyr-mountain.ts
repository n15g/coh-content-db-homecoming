import { MissionData } from 'coh-content-db'
import { TobiasHansen } from '../contact/tobias-hansen'

export const ReturnToVampyrMountain: MissionData = {
  key: 'return-to-vampyr-mountain',
  name: 'Return to Vampyr Mountain',
  type: 'story-arc',
  morality: 'heroic',
  contactKeys: TobiasHansen.key,
  levelRange: [25, 29],
  links: [
    { title: 'Return to Vampyr Mountain', href: 'https://homecoming.wiki/wiki/Tobias_Hansen#Return_to_Vampyr_Mountain_(25-29)' },
  ],
  flashback: {
    id: '3.03',
    levelRange: [25, 29],
  },
}
