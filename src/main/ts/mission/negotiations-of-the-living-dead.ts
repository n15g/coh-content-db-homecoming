import { MissionData } from 'coh-content-db'
import { NightWidowRagana } from '../contact/night-widow-ragana'

export const NegotiationsOfTheLivingDead: MissionData = {
  key: 'negotiations-of-the-living-dead',
  name: 'Negotiations of the Living Dead',
  type: 'story-arc',
  morality: 'villainous',
  contactKeys: NightWidowRagana.key,
  levelRange: [20, 24],
  links: [
    { title: 'Negotiations of the Living Dead', href: 'https://homecoming.wiki/wiki/Night_Widow_Ragana#Negotiations_of_the_Living_Dead' },
  ],
  flashback: {
    id: '27.92',
    levelRange: [20, 24],
  },
}
