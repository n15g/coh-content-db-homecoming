import { MissionData } from 'coh-content-db'
import { AaronThiery } from '../contact/aaron-thiery'

export const ReasonToFight: MissionData = {
  key: 'reason-to-fight',
  name: 'Reason to Fight',
  type: 'story-arc',
  morality: 'heroic',
  contactKeys: AaronThiery.key,
  levelRange: [1, 7],
  links: [
    { title: 'Reason to Fight', href: 'https://homecoming.wiki/wiki/Aaron_Thiery#Reason_to_Fight' },
  ],
  flashback: {
    id: '21.04',
    levelRange: [1, 9],
  },
}
