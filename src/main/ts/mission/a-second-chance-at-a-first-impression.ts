import { MissionData } from 'coh-content-db'
import { PayPhone } from '../contact/pay-phone'

export const ASecondChanceAtAFirstImpression: MissionData = {
  key: 'a-second-chance-at-a-first-impression',
  name: 'A Second Chance at a First Impression',
  type: 'story-arc',
  morality: 'primal',
  contactKeys: PayPhone.key,
  levelRange: [40],
  links: [
    { title: 'A Second Chance at a First Impression', href: 'https://homecoming.wiki/wiki/Pay_Phone#A_Second_Chance_at_a_First_Impression' },
  ],
  flashback: {
    id: '27.15',
    levelRange: [50],
  },
}
