import { MissionData } from 'coh-content-db'
import { MrGPraetorian } from '../contact/mr-g-praetorian'

export const PersonalMonster: MissionData = {
  key: 'personal-monster',
  name: 'Personal Monster',
  type: 'story-arc',
  morality: 'loyalist',
  contactKeys: MrGPraetorian.key,
  levelRange: [8, 15],
  links: [
    { title: 'Personal Monster', href: 'https://homecoming.wiki/wiki/Mr._G#Personal_Monster' },
  ],
  flashback: {
    id: '18.22',
    levelRange: [15, 19],
    morality: 'all',
  },
}
